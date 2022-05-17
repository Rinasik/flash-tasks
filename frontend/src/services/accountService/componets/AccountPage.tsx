import { Layout } from "../../../shared/components/Layout";
import { UploadAvatarContainer } from "../uploadAvatarService/uploadAvatarService.container";
import { Wrap, AvatarBar, AvatarWrapper } from "./AccountPage.styled";

export const AccountPage = () => {
  return (
    <Layout>
      <Wrap>
        <AvatarBar>
          <UploadAvatarContainer />
        </AvatarBar>
      </Wrap>
    </Layout>
  );
};
