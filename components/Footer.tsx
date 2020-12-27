import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
} from '../icons/Icons';

interface FooterItem {
  label: string;
  link: string;
  icon: IconProp;
}

const items: FooterItem[] = [
  {
    icon: faEnvelope,
    link: 'galcantaradev@gmail.com',
    label: 'Email'
  },
  {
    icon: faGithub,
    link: 'https://github.com/galcantaradev',
    label: 'GitHub'
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/galcantaradev/',
    label: 'Instagram'
  },
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/gabriel-alc%C3%A2ntara-4b7890120/',
    label: 'LinkedIn'
  },
  {
    icon: faStackOverflow,
    link: 'https://stackoverflow.com/users/14178125/gabriel-alc%c3%a2ntara',
    label: 'Stack Overflow'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/galcantaradev',
    label: 'Twitter'
  }
];

const Footer = () => {
  return (
    <footer className="fixed right-0 left-0 bottom-0 text-center py-2 bg-black shadow-md border-t-2">
      {items.map((item: FooterItem) => {
        const link = item.label === 'Email' ? `mailto:${item.link}` : item.link;

        return (
          <a
            href={link}
            target="_blank"
            key={item.label}
            title={item.label}
            className="cursor-pointer mx-5"
          >
            <FontAwesomeIcon
              size="lg"
              icon={item.icon}
              className="hover:text-indigo-400 transition-all duration-300"
            />
          </a>
        );
      })}
    </footer>
  );
};

export default Footer;
