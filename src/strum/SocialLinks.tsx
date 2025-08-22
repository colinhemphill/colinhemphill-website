import { getSocialLinksWithIcons } from '@/utils/fetchers/social';
import SocialLink from './SocialLink';

export default function SocialLinks() {
  return (
    <div className="container mt-16">
      <div className="flex flex-wrap justify-center gap-4">
        {getSocialLinksWithIcons().map((link) => (
          <SocialLink
            href={link.url}
            icon={link.body.code}
            key={link._id}
            name={link.description}
          />
        ))}
      </div>
    </div>
  );
}
