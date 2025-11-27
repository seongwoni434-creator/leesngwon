export enum Category {
  ALL = 'All Projects',
  INTERIOR = 'Interior',
  EXHIBITION = 'Exhibition',
  INSTALLATION = 'Installation',
  COMMERCIAL = 'Commercial',
  INFO = 'Designer Info'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: string;
  imageUrl: string;
  description?: string;
}
