import { revalidate } from '@/app/layout';
import { hygraphEndpoint, hygraphHeaders } from '@/utils/hygraph';
import ProjectCard from './ProjectCard';

async function getProjects(): Promise<PersonalProject[]> {
  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: hygraphHeaders,
    body: JSON.stringify({
      query: `{
        personalProjects(orderBy: slug_ASC) {
          description
          id
          image {
            height
            url
            width
          }
          slug
          subtitle
          title
          url
        }
      }`,
    }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects.');
  }

  const { data } = await response.json();
  const personalProjects = data.personalProjects;
  return personalProjects;
}

export default async function ProjectsPreview() {
  const projects = await getProjects();

  return projects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));
}
