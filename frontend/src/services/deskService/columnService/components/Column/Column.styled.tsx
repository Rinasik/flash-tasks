import styled from "styled-components";

export const Wrap = styled.div<{ color: string | undefined }>`
  background-color: ${({ color }) => color};
  width: 95%;
  height: 400px;
  border-radius: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 5px;
  font-size: 20px;
  color: white;
  user-select: none;
`;

export const TasksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  justify-items: center;
`;

export const DropableTask = styled.div`
  width: 95%;
  height: 80px;
  background-color: #515151a2;
  opacity: 0.4;
  border-radius: 6px;
`;
