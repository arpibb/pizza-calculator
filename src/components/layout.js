import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <main>{children}</main>
      <div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://en.wikipedia.org/wiki/History_of_pizza"
            target="_blank"
            rel="noreferrer"
          >
            Ancient Pizza Magic
          </a>
        </footer>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
