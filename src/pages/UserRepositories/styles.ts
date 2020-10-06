import styled from 'styled-components';

export const Header = styled.header`
  a {
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }

  &:hover {
    color: #666;
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  max-width: 700px;
  margin: 65px auto;
`;
