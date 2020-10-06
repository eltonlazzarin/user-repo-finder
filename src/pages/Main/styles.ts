import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  max-width: 700px;
  margin: 17px auto;

  display: flex;

  input {
    width: 100%;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 170px;
    height: 70px;
    background: #1e90ff;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#1E90FF')};
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;

    input {
      border-radius: 5px;

      ${(props) =>
        props.hasError &&
        css`
          border: 1px solid #c53030;
        `}
    }

    button {
      width: 100%;
      border-radius: 5px;
      margin-top: 15px;
    }
  }
`;

export const Error = styled.span`
  text-align: center;
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: 340px 340px;
  grid-gap: 20px;

  max-width: 700px;
  margin: 80px auto;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      margin-bottom: 44px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      button {
        margin-top: 16px;
        width: 100%;
        height: 36px;
        background: #1e90ff;
        border-radius: 5px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#1E90FF')};
        }
      }
    }
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
