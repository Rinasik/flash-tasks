import { FC } from "react";
import { Layout } from "../../../shared/components/Layout";
import { UploadAvatarContainer } from "../uploadAvatarService/uploadAvatarService.container";
import { AccountPageProps } from "../userService.types";
import { ImageWrapper, Wrap } from "./AccountPage.styled";

export const AccountPage: FC<AccountPageProps> = ({ userData }) => {
  return (
    <Layout>
      <Wrap>
        <ImageWrapper>
          <img
            src={`http://localhost:9000/api/files/image/${userData?.avatar}`}
          />
        </ImageWrapper>
        <UploadAvatarContainer />
      </Wrap>
    </Layout>
  );
};
