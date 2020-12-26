import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex shadow-lg items-center bg-black-1 h-10 min-w-screen mb-5">
      <Link href="/">
        <a
          className={`flex-1 ml-5 ${
            router.pathname === '/' ? 'font-black' : ''
          }`}
        >
          home
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`flex-2 float-right ${
            router.pathname === '/blog' ? 'font-black' : ''
          }`}
        >
          blog
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`flex-2 ml-5 mr-5 float-right ${
            router.pathname === '/projects' ? 'font-black' : ''
          }`}
        >
          projects
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
