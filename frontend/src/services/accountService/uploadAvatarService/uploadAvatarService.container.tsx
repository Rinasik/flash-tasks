import { useEvent } from "effector-react"
import { UploadAvatar } from "./components/UploadAvatar"
import { uploadAvatarService } from "./uploadAvatarService.models"

export const UploadAvatarContainer = () => {
    const handleUpload = useEvent(uploadAvatarService.inputs.setAvatar)
    
    return <UploadAvatar handleUpload={handleUpload}/>
}