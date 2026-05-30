'use client';

import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { useEffect, useState } from 'react';
import { usePageStore } from '../../../../application/store/usePageStore';

export const NotionEditor = ({ pageId }: { pageId: string }) => {
  const { pages } = usePageStore();
  const page = pages.find(p => p.id === pageId);
  
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="p-10">Cargando editor...</div>;
  if (!page) return <div className="p-10 text-gray-500">Página no encontrada o sin seleccionar.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-8 w-full">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 pl-12">{page.title}</h1>
      <BlockNoteView editor={editor} theme="light" />
    </div>
  );
};
