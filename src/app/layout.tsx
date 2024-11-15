'use client';

import React, { ReactNode } from 'react';
import { ChatwootNextScript } from '../components';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        
        <title>Chatwoot POC</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <ChatwootNextScript token="PwNseEpr65DgDdowvSr3UEZc" />
      </body>
    </html>
  );
};

export default Layout;
  