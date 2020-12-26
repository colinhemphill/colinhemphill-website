import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import { formatDate } from '../../cms/helpers';
import { PrismicImageType, PrismicRichText } from '../../cms/prismic';
import styles from './BlogPostPreview.module.scss';

const BlogPostPreview = (
  props: CMSBlogPost<PrismicRichText, PrismicImageType>,
): JSX.Element => {
  const {
    content,
    first_publication_date,
    image,
    reading_stats,
    tags,
    title,
    uid,
  } = props;
  const CMS = getCMSIntegration();

  return (
    <div className="card h-100">
      {image?.url && (
        <Link href={`/blog/${uid}`}>
          <a>
            <span className="visually-hidden">{title} blog post</span>
            <Image
              alt={image.alt}
              className="card-img-top"
              height={image.dimensions.height}
              width={image.dimensions.width}
              src={image.url}
            />
          </a>
        </Link>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h4 className="h6 card-subtitle mb-xxs text-muted">
          {formatDate(CMS.parseDate(first_publication_date))} •{' '}
          <em>{reading_stats.text}</em>
        </h4>
        <div className={classnames('card-text', styles.contentPreview)}>
          {RichText.asText(content)}
        </div>

        <div className="mt-xxs">
          {tags.map((tag) => (
            <span className="badge bg-primary me-xxxs" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer text-center">
        <Link href={`/blog/${uid}`}>
          <a className="card-link">Read more...</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPreview;
