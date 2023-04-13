interface BlogPost extends GraphCMSSystemFields {
  content: string;
  date: string;
  description: string;
  image: GraphCMSAsset;
  imageAlt: string;
  slug: string;
  tags: Array<Tag>;
  title: string;
  bitlyShortLink?: string;
}
