import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Desk = styled.div`
  padding: 0px 40px;
  height: 600px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--main-color-back-deep); ;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr) ;
`;
