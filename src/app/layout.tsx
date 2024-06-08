import { ReactNode } from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Import the global styles

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>File Upload and Download</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
