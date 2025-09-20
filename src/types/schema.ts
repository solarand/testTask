export default interface Image {
  id: number;
  image: string;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
}

export interface ImageData {
  id: number;
  image: string;
  largeImage: string;
  comments: Comment[];
}
