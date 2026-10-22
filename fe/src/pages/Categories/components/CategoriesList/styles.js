import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 16px;
  background: rgba(241, 204, 255, 0.04);
`;

export const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 72px;
  padding: 12px 20px;

  & + & {
    border-top: 1px solid rgba(243, 244, 246, 0.08);
  }
`;

export const CategoryForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 16px;

  input {
    max-width: 500px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  padding: 0;
  font: inherit;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.light};
  cursor: pointer;
  transition: background 0.2 ease-in;

  &:hover:not(:disabled) {
    background: rgba(241, 204, 255, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ theme, $danger }) =>
    $danger &&
    css`
      color: ${theme.colors.danger.main};

      &:hover:not(:disabled) {
        background: rgba(252, 80, 80, 0.12);
      }
    `}
`;

export const CategoryName = styled.div`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 16px;
  font-weight: 600;
`;
