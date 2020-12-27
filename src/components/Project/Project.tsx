import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { OutboundLink } from 'react-ga';
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
        <OutboundLink
          eventLabel={`${title} website`}
          rel="noopener noreferrer"
          target="_blank"
          to={href}
        >
          <span className="visually-hidden">{title} website</span>
          <Image
            alt={image.alt}
            className="card-img-top"
            height={image.dimensions.height}
            width={image.dimensions.width}
            src={image.url}
          />
        </OutboundLink>
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
        <OutboundLink
          className="card-link"
          eventLabel={`${title} website`}
          rel="noopener noreferrer"
          target="_blank"
          to={href}
        >
          {title} website
        </OutboundLink>
      </div>
    </div>
  );
};

export default Project;
