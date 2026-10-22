import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px)
  }

  to {
    opacity: 0;
    transform: translateY(100px)
  }
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.84);
  cursor: pointer;
  animation: ${fadeIn} 0.3s;

  ${({ type }) => containerVariants[type] || containerVariants.default} & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;
