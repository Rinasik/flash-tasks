import styled from "styled-components";

export const Wrap = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 0 0 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NameWrapper = styled.div`
  padding-top: 5px;
  font-size: 20px;
  text-align: center;

  color: white;
  user-select: none;
`;

export const TasksWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;

export const DropableTask = styled.div`
  width: 95%;
  height: 80px;
  background-color: #515151a2;
  opacity: 0.4;
  border-radius: 6px;
`;
