import { Instagram, Linkedin, Twitch, Twitter } from 'lucide-react';
import SocialLink from './SocialLink';

export default function SocialLinks() {
  return (
    <div className="container mt-16">
      <div className="flex flex-wrap justify-center gap-4">
        <SocialLink
          href="https://twitter.com/colin_hemphill"
          Icon={Twitter}
          name="Colin on Twitter"
        />
        <SocialLink
          href="https://www.linkedin.com/in/colinhemphill/"
          Icon={Linkedin}
          name="Colin on LinkedIn"
        />
        <SocialLink
          href="https://www.instagram.com/colin.hemphill/"
          Icon={Instagram}
          name="Colin on Instagram"
        />
        <SocialLink
          href="https://www.twitch.tv/thechickenbender"
          Icon={Twitch}
          name="Colin on Twitch"
        />
      </div>
    </div>
  );
}
