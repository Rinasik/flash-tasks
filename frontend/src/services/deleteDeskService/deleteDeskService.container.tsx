import { useEvent } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNetworkErrors } from "../../hooks/useNetworkErrors";
import { DeleteDesk } from "./components/DeleteDesk";
import { deleteDeskService } from "./deleteDeskService.models";

export const DeleteDeskContainer = () => {
  const navigate = useNavigate();
  const handleSubmit = useEvent(deleteDeskService.inputs.deleteDesk);
  const deleteDeskSuccess = deleteDeskService.outputs.deleteDeskSuccess;
  const deleteDeskFailed = deleteDeskService.outputs.deleteDeskFailed;

  useNetworkErrors(deleteDeskFailed);

  useEffect(
    () =>
      deleteDeskSuccess.watch(() => {
        navigate("/Dashboard");
      }),
    []
  );

  return <DeleteDesk  handleSumbit={handleSubmit} />;
};
