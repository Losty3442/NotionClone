import { create } from 'zustand';
import { Page } from '../../domain/entities/types';
import { IPageRepository } from '../../domain/repositories/IPageRepository';

interface PageState {
  pages: Page[];
  activePageId: string | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setActivePage: (id: string | null) => void;
  fetchPages: (repository: IPageRepository, userId: string) => Promise<void>;
  addPage: (repository: IPageRepository, userId: string, title: string, parentId?: string) => Promise<Page | null>;
}

export const usePageStore = create<PageState>((set, get) => ({
  pages: [],
  activePageId: null,
  isLoading: false,
  error: null,

  setActivePage: (id) => set({ activePageId: id }),

  fetchPages: async (repository, userId) => {
    set({ isLoading: true, error: null });
    try {
      const pages = await repository.getPagesByUser(userId);
      set({ pages, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  addPage: async (repository, userId, title, parentId) => {
    try {
      const newPage = await repository.createPage({
        userId,
        title,
        parentId: parentId || null,
        isArchived: false,
      });
      set((state) => ({ pages: [...state.pages, newPage] }));
      return newPage;
    } catch (error: any) {
      set({ error: error.message });
      return null;
    }
  }
}));
