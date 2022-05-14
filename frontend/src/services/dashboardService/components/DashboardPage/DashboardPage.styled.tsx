import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 50px;
  padding-top: 1px;
  align-items: center;
`;

export const AddDeskWrapper = styled.div`
  border: 3px dashed grey;
  height: 200px;
  border-radius: 20px;
  user-select: none;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border-color: white;
    background-color: #ffffff11;
  }
`;

export const PlusWrapper = styled.div`
  color: white;
  font-size: 80px;
`;

export const DesksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 10px;
`;
