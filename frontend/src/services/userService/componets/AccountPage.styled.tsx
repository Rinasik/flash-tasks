import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 50px;
  padding-top: 1px;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ImageWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #ffffff11;

  &:hover {
    border: 2px solid var(--main-color);
  }

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
  }
`;
