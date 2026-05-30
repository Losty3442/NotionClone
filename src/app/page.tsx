'use client';

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
const NotionEditor = dynamic(
  () => import('../infrastructure/ui/components/editor/NotionEditor').then(mod => mod.NotionEditor),
  { ssr: false }
);
import { Suspense } from 'react';

function EditorContainer() {
  const searchParams = useSearchParams();
  const pageId = searchParams.get('pageId');

  if (!pageId) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-4">
        <h2 className="text-2xl font-semibold">Selecciona o crea una página</h2>
        <p>Haz clic en el botón "+" en la barra lateral para empezar a escribir.</p>
      </div>
    );
  }

  return <NotionEditor pageId={pageId} />;
}

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <EditorContainer />
    </Suspense>
  );
}
