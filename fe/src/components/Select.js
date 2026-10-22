import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  margin-top: 8px;
  background: ${({ theme }) => theme.colors.bg.main};
  color: ${({ theme }) => theme.colors.gray.light};
  border: 1px solid rgba(243, 244, 246, 0.1);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition:
    border-color 0.2s ease-in,
    box-shadow 0.2s ease;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(171, 82, 204, 0.18);
  }

  option {
    background: ${({ theme }) => theme.colors.bg.main};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    background: #313341;
    border-color: #313341;
  }
`;
