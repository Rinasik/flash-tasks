import styled from "styled-components";

export const Wrap = styled.div<{ color: string | undefined }>`
  background-color: ${({ color }) => color};
  width: 95%;
  height: 400px;
  border-radius: 20px;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 5px;
  font-size: 20px;
  color: white;
`;
