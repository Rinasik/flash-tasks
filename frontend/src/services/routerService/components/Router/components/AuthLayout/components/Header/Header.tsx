import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../../../../shared/components/Button";
import { Layout } from "../../../../../../../../shared/components/Layout";
import {
  AssociatingWrapper,
  ImageWrapper,
  Logo,
  StyledHeader,
  UserName,
  Wrap,
  Wrapper,
} from "./Header.styled";
import { HeaderProps } from "./Header.types";

export const Header: FC<HeaderProps> = ({ me, handleSubmit }) => {
  return (
    <Wrap>
      <StyledHeader>
        <Layout>
          <Wrapper>
            <Link to="/Dashboard">
              <Logo>TodoList</Logo>
            </Link>

            <AssociatingWrapper>
              <Link
                to="/Account"
                style={{ display: " flex", alignItems: "center" }}
              >
                <ImageWrapper>
                  <img
                    src={`http://localhost:9000/api/files/image/${me?.avatar}`}
                  />
                </ImageWrapper>
                <UserName>{me?.name}</UserName>
              </Link>
              <Button
                size="sm"
                onClick={handleSubmit}
                style={{ marginLeft: "30px" }}
              >
                Logout
              </Button>
            </AssociatingWrapper>
          </Wrapper>
        </Layout>
      </StyledHeader>
    </Wrap>
  );
};
