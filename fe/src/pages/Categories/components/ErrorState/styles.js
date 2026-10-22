import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 16px;
  color: ${({ theme }) => theme.colors.danger.main};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;