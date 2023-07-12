import confirm from "antd/lib/modal/confirm";
import { useEvent } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNetworkErrors } from "../../hooks/useNetworkErrors";
import { DeleteDesk } from "./components/DeleteDesk";
import { deleteDeskService } from "./deleteDeskService.models";
import "./deleteDeskService.relations";

export const DeleteDeskContainer = () => {
  const navigate = useNavigate();
  const deleteDesk = useEvent(deleteDeskService.inputs.deleteDesk);
  const deleteDeskSuccess = deleteDeskService.outputs.deleteDeskSuccess;
  const deleteDeskFailed = deleteDeskService.outputs.deleteDeskFailed;

  useNetworkErrors(deleteDeskFailed);

  useEffect(
    () =>
      deleteDeskSuccess.watch(() => {
        navigate("/Dashboard");
      }),
    [deleteDeskSuccess, navigate]
  );

  const handleSubmit = () => {
    confirm({
      title: "Delete your desk?",
      content: "This action cannot be undone",
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => deleteDesk(),
    });
  };

  return <DeleteDesk handleSumbit={handleSubmit} />;
};
