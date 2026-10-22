import styled from "styled-components";


export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0px 16px;
  padding: 32px 16px;

  a {
    display: flex;
    max-width: 160px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 32px;
    transform: all 0.2 ease;

    svg {
      font-size: 16px;
      margin-right: 10px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
      
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 32px;
    margin-bottom: 8px;
  }
`