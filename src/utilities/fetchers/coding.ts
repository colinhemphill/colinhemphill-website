import { allLinks } from '@content';
import { sortAlphabetical } from '../sort';

export const getCodingLinks = () => {
  const codingLinks = allLinks.filter(
    (link) => link.destinationType === 'code',
  );
  return sortAlphabetical(codingLinks, 'name');
};
