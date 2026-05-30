export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: Date;
}

export interface Page {
  id: string;
  userId: string;
  title: string;
  icon?: string;
  coverImage?: string;
  parentId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
}

export type BlockType = 'paragraph' | 'h1' | 'h2' | 'h3' | 'bullet_list' | 'numbered_list' | 'todo_list' | 'image' | 'divider';

export interface Block {
  id: string;
  pageId: string;
  type: BlockType;
  content: any; // JSON content depending on block type
  order: number; // Order index for sorting within the page
  createdAt: Date;
  updatedAt: Date;
}
