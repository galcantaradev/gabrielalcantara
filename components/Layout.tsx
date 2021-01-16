import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="bg-black-2 text-white text-lg">
      <Head>
        <title>Gabriel Alcântara</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
