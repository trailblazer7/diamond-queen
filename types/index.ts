import { Store } from 'lucide-react';

export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: unknown;
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: unknown;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: unknown;
  reviews_count: number;
};

export type Store = {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type Creator = {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
};
