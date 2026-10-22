import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 16px;
  background: rgba(241, 204, 255, 0.06);
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.18);
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 1.2fr 100px;
  gap: 20px;
  align-items: center;
  min-width: 780px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.light};
  background: rgba(241, 204, 255, 0.06);
  border-bottom: 1px solid 1px solid rgba(243, 244, 246, 0.06);

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 1.2fr 100px;
  gap: 20px;
  align-items: center;
  min-width: 780px;
  padding: 8px 16px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(241, 204, 255, 0.04);
  }

  && {
    margin-bottom: 8px;
    border-bottom: 1px solid 1px ${({ theme }) => theme.colors.gray.light};
  }

  &:last-child {
    border-bottom: none;
  }

  span {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray.light};
  }

  span:nth-child(2) {
    text-align: center;
  }

  @media (max-width: 800px) {
    min-width: 0;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 16px;
    margin-bottom: 0;

    & > :first-child {
      grid-column: 1 / -1;
    }

    & > *::before {
      content: attr(data-label);
      display: block;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.colors.gray.main};
      font-size: 12px;
      font-weight: 600;
    }

    & > [data-label="Status"] {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: start;
      width: 100%;
    }

    & > [data-label="Status"]::before {
      grid-column: 1 / -1;
    }

    & > [data-label="Ações"] {
      flex-wrap: wrap;
    }

    & > [data-label="Ações"]::before {
      flex-basis: 100%;
    }
  }
`;

export const ItemName = styled.span`
  color: ${({ theme }) => theme.colors.gray.light};
  font-weight: 600;
  text-decoration: ${({ $purchased }) => ($purchased ? "line-trough" : "none")};
  opacity: ${({ $purchased }) => ($purchased ? 0.6 : 1)};
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: fit-content;
  min-width: 112px;
  padding: 8px 12px;
  color: ${({ $purchased }) => ($purchased ? "#62d97b" : "#f0a23a")};
  background: ${({ $purchased }) =>
    $purchased ? "rgba(98, 217, 123, 0.1)" : "rgba(240, 162, 58, 0.1)"};
  border: 1px solid ${({ $purchased }) => ($purchased ? "#62d97b" : "#f0a23a")};
  border-radius: 999px;
  cursor: pointer;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    filter: brightness(1.5);
    transform: translateY(-1px);
  }
`;

export const ItemsActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    color: ${({ theme }) => theme.colors.gray.light};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 8px;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    svg {
      font-size: 16px;
    }

    &:hover {
      background: rgba(171, 82, 204, 0.12);
      transform: translateY(-1px);
    }
  }
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  color: ${({ $danger, theme }) =>
    $danger ? "#ff4d5d" : theme.colors.gray.light};
  background: transparent;
  border: 1px solid
    ${({ $danger, theme }) => ($danger ? "#ff4d5d" : theme.colors.gray.light)};
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${({ $danger }) =>
      $danger ? "rgba(255, 77, 93, 0.1)" : "rgba(171, 82, 204, 0.12)"};
    transform: translateY(-1px);
  }
`;
