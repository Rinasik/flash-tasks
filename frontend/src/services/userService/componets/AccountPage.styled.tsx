import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 50px;
  padding-top: 1px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }
`;
