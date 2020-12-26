import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex shadow-lg items-center bg-black-1 h-10 min-w-screen px-5">
      <div className="flex-1">
        <Link href="/">
          <a className={`${pathname === '/' ? 'underline' : ''}`}>home</a>
        </Link>
      </div>
      <Link href="/blog">
        <a className={`${pathname === '/blog' ? 'underline' : ''}`}>blog</a>
      </Link>
      <Link href="/projects">
        <a className={`ml-5 ${pathname === '/projects' ? 'underline' : ''}`}>
          projects
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
