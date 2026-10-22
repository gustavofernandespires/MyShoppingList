import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 8px;
  }

  label {
    display: block;
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 15px;
    font-weight: 600;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    margin-top: 8px;
    display: block;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      right: 16px;
      top: 42px;
    }
  }
`;
