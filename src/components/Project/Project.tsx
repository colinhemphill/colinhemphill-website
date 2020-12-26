import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import { PrismicImageType, PrismicRichText } from '../../cms/prismic';

const Project = (
  props: CMSPersonalProject<PrismicRichText, PrismicImageType>,
): JSX.Element => {
  const { description, href, image, subtitle, title } = props;
  const CMS = getCMSIntegration();

  return (
    <div className="card h-100">
      {image?.url && (
        <a href={href} rel="noopener noreferrer" target="_blank">
          <span className="visually-hidden">{title} website</span>
          <Image
            alt={image.alt}
            className="card-img-top"
            height={image.dimensions.height}
            width={image.dimensions.width}
            src={image.url}
          />
        </a>
      )}
      <div className="card-body">
        <h3
          className={classnames('card-title', {
            'mb-xxs': !subtitle,
          })}
        >
          {title}
        </h3>
        {subtitle && <h4 className="h6 card-subtitle mb-xxs">{subtitle}</h4>}
        <div className="card-text">
          <CMS.RichTextComponent richText={description} />
        </div>
      </div>
      <div className="card-footer text-center">
        <a
          className="card-link"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title} website
        </a>
      </div>
    </div>
  );
};

export default Project;
