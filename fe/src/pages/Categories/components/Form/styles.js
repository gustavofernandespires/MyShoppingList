import styled from "styled-components";

export const Container = styled.form`
  margin: 8px 0;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 16px;
  background: rgba(241, 204, 255, 0.04);

  label {
    display: block;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.gray.light};
    font-weight: 600;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 200px;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 600px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }
`;