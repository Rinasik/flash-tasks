import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 95%;
  height: 150px;
  border: 3px dashed grey;
  border-radius: 4px;
  
  box-sizing: border-box;

  &:hover {
    border: 3px dashed var(--main-color);
  }
`;
