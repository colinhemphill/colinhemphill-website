import { allProjects } from '@content';
import { sortAlphabetical } from '../sort';

export const getProjects = () => {
  return sortAlphabetical(allProjects, 'title');
};
