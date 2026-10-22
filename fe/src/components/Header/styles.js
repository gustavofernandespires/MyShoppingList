import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.dark};
  background: ${({ theme }) => theme.colors.bg.dark};

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }
`