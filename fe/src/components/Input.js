import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  margin-top: 8px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.bg.main};
  color: ${({ theme }) => theme.colors.gray.light};
  outline: none;
  border: 1px solid rgba(243, 244, 246, 0.1);
  border-radius: 10px;
  transition:
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(171, 82, 204, 0.18);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    background: #313341;
    border-color: #313341;
  }
`;
