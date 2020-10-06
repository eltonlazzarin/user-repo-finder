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
  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 19px;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
  @media (max-width: 450px) {
    header {
      flex-direction: column;
      img {
        margin-bottom: 12px;
      }
    }
    ul {
      li {
        & + li {
          margin-left: 33px;
        }
        strong {
          font-size: 20px;
        }
      }
    }
  }
`;