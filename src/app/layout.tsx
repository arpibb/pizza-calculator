'use client';

import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <StyledContainer>
          <main>{children}</main>
          <div>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                href='https://en.wikipedia.org/wiki/History_of_pizza'
                target='_blank'
                rel='noreferrer'
              >
                Ancient Pizza Magic
              </a>
            </footer>
          </div>
        </StyledContainer>
      </body>
    </html>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export default Layout;
