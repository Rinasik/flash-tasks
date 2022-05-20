import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 200px;
  border: 3px dashed grey;
  border-radius: 4px;
  margin-top: 10px;
  
  box-sizing: border-box;

  &:hover {
    border: 3px dashed var(--main-color);
  }
`;
