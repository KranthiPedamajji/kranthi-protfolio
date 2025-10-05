import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  liveUrl?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.projects;
