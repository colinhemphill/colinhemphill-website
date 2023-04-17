import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import slug from 'slug';

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string', required: true },
  },
}));

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    height: { type: 'number' },
    width: { type: 'number' },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  query: {
    filter: {
      property: 'status',
      status: {
        equals: 'Published',
      },
    },
  },
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

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [highlight],
  },
});
