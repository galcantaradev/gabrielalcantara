import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="sticky flex shadow-md items-center justify-end bg-black-1 h-12 min-w-screen bg-transparent">
      <Link href="/">
        <a className={`${pathname === '/' ? 'text-indigo-400' : ''}`}>about</a>
      </Link>
      <Link href="/blog">
        <a className={`ml-5 ${pathname === '/blog' ? 'text-indigo-400' : ''}`}>
          blog
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`mx-5 ${
            pathname === '/projects' ? 'text-indigo-400' : ''
          }`}
        >
          projects
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
