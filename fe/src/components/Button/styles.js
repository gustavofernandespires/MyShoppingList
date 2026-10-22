import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.gray.light};
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  &:hover {
    filter: brightness(0.8);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray.dark} !important;
    cursor: default !important;

    &:hover {
      filter: brightness(1) !important;
      transform: translateY(0px) !important;
    }
  }

  ${({ theme, $danger }) =>
    $danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
