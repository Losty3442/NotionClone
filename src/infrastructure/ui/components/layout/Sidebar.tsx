'use client';

import React, { useEffect, useState } from 'react';
import { usePageStore } from '../../../../application/store/usePageStore';
import { InMemoryPageRepository } from '../../../adapters/InMemoryPageRepository';
import { FileText, Plus } from 'lucide-react';
import Link from 'next/link';

// Mock userId for MVP until auth is fully integrated
const MOCK_USER_ID = '00000000-0000-0000-0000-000000000000';
const repository = new InMemoryPageRepository();

export const Sidebar = () => {
  const { pages, fetchPages, addPage, activePageId } = usePageStore();

  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchPages(repository, MOCK_USER_ID);
  }, [fetchPages]);

  const handleAddPage = () => {
    setIsAdding(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const title = newTitle.trim() || 'Nueva Página';
    await addPage(repository, MOCK_USER_ID, title);
    setNewTitle('');
    setIsAdding(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsAdding(false);
      setNewTitle('');
    }
  };

  return (
    <aside className="w-64 bg-gray-50 h-screen border-r flex flex-col p-4">
      <div className="font-semibold mb-6 flex justify-between items-center text-gray-700">
        <span>Mi Workspace</span>
        <button onClick={handleAddPage} className="p-1 hover:bg-gray-200 rounded">
          <Plus size={16} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={`/?pageId=${page.id}`}
                className={`flex items-center gap-2 p-2 rounded text-sm cursor-pointer ${
                  activePageId === page.id ? 'bg-gray-200 font-medium' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FileText size={16} />
                <span className="truncate">{page.title}</span>
              </Link>
            </li>
          ))}
          {isAdding && (
            <li>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 rounded text-sm bg-gray-100">
                <FileText size={16} className="text-gray-400" />
                <input
                  type="text"
                  autoFocus
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={() => setIsAdding(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="Nombre de la página..."
                  className="flex-1 bg-transparent outline-none text-gray-700"
                />
              </form>
            </li>
          )}
          {pages.length === 0 && !isAdding && (
            <li className="text-sm text-gray-400 italic p-2">No hay páginas. Crea una.</li>
          )}
        </ul>
      </nav>
    </aside>
  );
};
