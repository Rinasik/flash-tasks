import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
`;

export const StyledHeader = styled.div`
  position: fixed;

  height: 50px;
  width: 100%;
  background: var(--main-color-back-deep);
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div``;

export const Logo = styled.div`
  cursor: pointer;

  user-select: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AssociatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  cursor: pointer;
  user-select: none;
  color: white;
  font-weight: 450;
  font-size: 15px;
  margin-left: 15px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  user-select: none;
  cursor: pointer;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
  }
`;
