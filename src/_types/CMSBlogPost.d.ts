interface CMSBlogPost<RichTextType, ImageType> {
  content: RichTextType;
  first_publication_date: string;
  id: string;
  image: ImageType;
  reading_stats: ReadingStats;
  tags: string[];
  title: string;
  uid: string;
}
