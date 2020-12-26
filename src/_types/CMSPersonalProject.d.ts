interface CMSPersonalProject<RichTextType, ImageType> {
  description: RichTextType;
  href: string;
  id: string;
  image?: ImageType;
  subtitle?: string;
  title: string;
}
