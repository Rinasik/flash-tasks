import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100px;
  background-color: #ffffff11;
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    border: 4px dashed var(--main-color);
  }
`;
