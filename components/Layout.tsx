import Head from 'next/head';
import { ReactNode } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="min-h-screen min-w-screen bg-black-2 text-white text-lg flex flex-col">
      <Head>
        <title>Gabriel Alcântara</title>
      </Head>
      <NavBar />
      <div className="pt-10 flex-1 mt-12">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
