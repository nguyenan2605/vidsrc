import { ScrapeMedia } from '../../utils/media';

export type VideoLinks = {
  success: boolean;
  message: string;
  premium_content: number;
  url: string;
  quality: string;
  subtitle: boolean | string;
  subtitle_lns: boolean;
  subtitle_def: boolean;
  thumbnails: string;
};

export interface MovieData {
  id: string;
  year: number;
  type: ScrapeMedia['type'];
  url: string;
}
