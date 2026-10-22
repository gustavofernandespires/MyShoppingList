import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  margin-bottom: 16px;

  h1 {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 32px;
  }

  span {
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.gray.main};
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    justify-content: flex-end;
    min-width: 0;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    padding: 8px 16px;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray.light};
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.gray.main};
      filter: brightness(1.08);
      transform: translateY(-1px);
    }
  }

  input {
    width: 40%;
    height: 40px;
    margin-bottom: 16px;
    background: transparent;
    outline: none;
    padding: 0 16px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.63);
    background: ${({ theme }) => theme.colors.bg.main};
    color: ${({ theme }) => theme.colors.primary.lighter};

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary.lighter};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 0 3px rgba(171, 82, 204, 0.15);
    }
  }

  @media (max-width: 640px) {
    align-items: stretch;
    gap: 16px;

    .heading,
    .toolbar {
      width: 100%;
    }

    .toolbar {
      flex-direction: column;
      align-items: stretch;
    }

    .navigation > a {
      flex: 1;
      text-align: center;
    }

    input {
      width: 100%;
    }
  }
`;
