import styled from "styled-components";

export const DeskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  padding: 0px 15px;

  position: relative;
  margin-right: 20px;
  border-radius: 15px;
  background-color: var(--main-color-back-deep);
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #ffffff11;
  }
`;

export const TitleOfDesk = styled.div`
  margin-top: 10px;
  color: grey;
  font-size: 16px;
  font-weight: 500;
  user-select: none;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 6px;
  height: 130px;
`;

export const ColumnPreview = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color};
  width: 95%;
  height: 130px;
  border-radius: 6px;
`;
