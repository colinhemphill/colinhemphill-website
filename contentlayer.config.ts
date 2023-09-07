import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import slug from 'slug';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    height: { type: 'number' },
    width: { type: 'number' },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    subtitle: {
      type: 'string',
      description: 'A subtitle to describe the project',
    },
    url: {
      type: 'string',
      description: 'An external URL to link to the project',
      required: true,
    },
    image: {
      type: 'nested',
      of: Image,
      description: 'An image to represent the project',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => slug(post.title),
    },
  },
}));

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string', required: true },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the post content',
      required: true,
    },
    status: {
      type: 'enum',
      options: ['Draft', 'Published'],
      description: 'The publishing status of the post',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    image: {
      type: 'nested',
      of: Image,
      description: 'An image to represent the post',
      required: true,
    },
    ogImage: {
      type: 'nested',
      of: Image,
      description:
        'A portrait image which will be used within the OG share image if present',
      required: false,
    },
    tags: {
      type: 'list',
      of: Tag,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => slug(post.title),
    },
  },
}));

export const Link = defineDocumentType(() => ({
  name: 'Link',
  filePathPattern: 'links/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the external website',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Text to describe where the link will take the reader',
      required: true,
    },
    url: {
      type: 'string',
      required: true,
    },
    source: {
      type: 'enum',
      options: ['internal', 'external'],
      required: true,
    },
    destinationType: {
      type: 'enum',
      options: ['social', 'code'],
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Post, Link],
  mdx: {
    // @ts-ignore
    rehypePlugins: [highlight],
  },
});
