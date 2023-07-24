import { allLinks } from '@content';
import { sortAlphabetical } from '../sort';

export const getSocialLinks = () => {
  const socialLinks = allLinks.filter(
    (link) => link.destinationType === 'social',
  );
  return sortAlphabetical(socialLinks, 'name');
};

export const getSocialLinksWithIcons = () => {
  const socialLinks = allLinks.filter(
    (link) => link.destinationType === 'social' && link.body.raw.length > 0,
  );
  return sortAlphabetical(socialLinks, 'name');
};
