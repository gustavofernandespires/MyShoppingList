import styled from "styled-components";


export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0px 32px 24px 32px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`
export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  align-items: center;
`