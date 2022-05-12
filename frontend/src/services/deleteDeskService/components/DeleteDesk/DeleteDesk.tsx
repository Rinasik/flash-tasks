import { FC } from "react";
import { Button } from "../../../../shared/components/Button";
import { DeleteDeskProps } from "./DeleteDesk.types";

export const DeleteDesk: FC<DeleteDeskProps> = ({ handleSumbit }) => {
  return (
    <Button
      onClick={handleSumbit}
      size={"sm"}
      outlined
      style={{ color: "var(--main-color)" }}
    >
      Delete
    </Button>
  );
};
