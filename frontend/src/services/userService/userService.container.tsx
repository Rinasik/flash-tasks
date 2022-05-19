import { useEvent, useStore } from "effector-react";
import { userService } from "../userService";
import { AccountPage } from "../userService/componets";
import { uploadAvatarService } from "./uploadAvatarService";

export const AccountPageContainer = () => {
  const me = useStore(userService.outputs.$me);
  const handleOpeningModal = useEvent(uploadAvatarService.inputs.openModal);

  return <AccountPage userData={me} handleOpeningModal={handleOpeningModal} />;
};
