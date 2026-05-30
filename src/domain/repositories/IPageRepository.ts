import { Page } from '../entities/types';

export interface IPageRepository {
  /**
   * Obtiene todas las páginas de un usuario (para el árbol de navegación)
   */
  getPagesByUser(userId: string): Promise<Page[]>;

  /**
   * Obtiene una página por su ID
   */
  getPageById(pageId: string): Promise<Page | null>;

  /**
   * Crea una nueva página
   */
  createPage(page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>): Promise<Page>;

  /**
   * Actualiza los metadatos de una página (título, icono, portada, etc)
   */
  updatePage(pageId: string, updates: Partial<Omit<Page, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Page>;

  /**
   * Elimina lógicamente o físicamente una página
   */
  deletePage(pageId: string): Promise<void>;
}
