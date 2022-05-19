import { useStore } from "effector-react"
import { userService } from "../userService"
import { AccountPage } from "../userService/componets"

export const AccountPageContainer = () => {
    const me = useStore(userService.outputs.$me)

    return <AccountPage userData={me}/>
}