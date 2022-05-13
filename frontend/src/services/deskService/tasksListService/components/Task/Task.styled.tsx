import styled from "styled-components";

export const TaskWrapper = styled.div`
  width: 95%;
  height: 80px;
  border-radius: 10px;
  background-color: white;
  transition: all 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(1.12);
  }
`;
