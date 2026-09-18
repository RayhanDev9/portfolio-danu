const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-via-fabula`;

export interface FabulaItem {
  id: string;
  title: string;
  category: "feed" | "photo-editing";
  image: string;
  alt: string;
}

// 1. Data Feed Design (Section 2)
export const FEED_DESIGN_ITEMS: FabulaItem[] = [
  {
    id: "feed-1",
    title: "Penguin Fabula - The Movie Poster",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-01.jpg`,
    alt: "Penguin Fabula Movie Poster Design",
  },
  {
    id: "feed-2",
    title: "Cast Members Lineup Grid",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-02.jpg`,
    alt: "Cast Members Lineup Grid",
  },
  {
    id: "feed-3",
    title: "Synopsis - Creative Narrative",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-03.jpg`,
    alt: "Synopsis Creative Narrative Design",
  },
  {
    id: "feed-4",
    title: "The Moment - Behind The Scenes",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-04.jpg`,
    alt: "The Moment Behind The Scenes",
  },
  {
    id: "feed-5",
    title: "Start The Game - Event Launch",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-05.jpg`,
    alt: "Start The Game Event Launch",
  },
  {
    id: "feed-6",
    title: "Fabula Visual Showcase 06",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-06.jpg`,
    alt: "Fabula Visual Showcase 06",
  },
  {
    id: "feed-7",
    title: "Fabula Visual Showcase 07",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-07.jpg`,
    alt: "Fabula Visual Showcase 07",
  },
  {
    id: "feed-8",
    title: "Fabula Visual Showcase 08",
    category: "feed",
    image: `${DIR}/design-feeed/feed fabula-08.jpg`,
    alt: "Fabula Visual Showcase 08",
  },
];

// 2. Data Photo Editing (Section 3 - LIA Graduation Series)
export const PHOTO_EDITING_ITEMS: FabulaItem[] = [
  {
    id: "photo-1",
    title: "LIA - Graduation Flowers Collage",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-01.jpg`,
    alt: "LIA Graduation Flowers Collage",
  },
  {
    id: "photo-2",
    title: "LIA - Standing Collage Shoot",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-02.jpg`,
    alt: "LIA Standing Collage Shoot",
  },
  {
    id: "photo-3",
    title: "LIA - Close-Up Portrait & Moments",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-03.jpg`,
    alt: "LIA Close-Up Portrait & Moments",
  },
  {
    id: "photo-4",
    title: "LIA - Outdoor Toga Portrait",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-04.jpg`,
    alt: "LIA Outdoor Toga Portrait",
  },
  {
    id: "photo-5",
    title: "LIA - Photo Booth & Celebration",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-05.jpg`,
    alt: "LIA Photo Booth & Celebration",
  },
  {
    id: "photo-6",
    title: "LIA - Diploma Certificate & Toga",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-06.jpg`,
    alt: "LIA Diploma Certificate & Toga",
  },
  {
    id: "photo-7",
    title: "LIA - Studio Portrait Shoot",
    category: "photo-editing",
    image: `${DIR}/photo-editing/content feed ig-07.jpg`,
    alt: "LIA Studio Portrait Shoot",
  },
];
