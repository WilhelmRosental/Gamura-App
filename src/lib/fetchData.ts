import fs from 'fs';
import path from 'path';

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

type Media = {
  name: string;
  type: string;
  url: string;
};

export async function fetchPhotographerData(id: string): Promise<Photographer | null> {
  const photographers = require('@/app/data/photographers.json').photographers;
  return photographers.find((p: Photographer) => p.id === parseInt(id)) || null;
}

export async function fetchMediaData(id: string): Promise<Media[]> {
  const mediaPath = path.join(process.cwd(), 'app', 'data', 'medias', id);
  try {
    const files = fs.readdirSync(mediaPath);
    return files.map((file) => ({
      name: file,
      type: file.endsWith('.mp4') ? 'video' : 'image',
      url: `/app/data/medias/${id}/${file}`,
    }));
  } catch (error) {
    console.error(`Error reading media files for photographer ${id}:`, error);
    return [];
  }
}
