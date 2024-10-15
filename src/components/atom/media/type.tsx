type mediaType = "img" | "video";

export interface MediaProps {
  mediaType: mediaType;
  src: string;
  alt: string;
  containerClasses?: string;
  mediaClasses?: string;
}
