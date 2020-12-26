import Head from 'next/head';
import { ReactNode } from 'react';

import NavBar from '../components/NavBar';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="min-h-screen min-w-screen bg-black-2 text-white text-lg">
      <Head>
        <title>Gabriel Alcântara</title>
      </Head>

      <NavBar />

      {props.children}
    </div>
  );
};

export default Layout;
