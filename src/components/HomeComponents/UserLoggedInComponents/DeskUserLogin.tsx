

import Label from "../Label"
import Post from "../Post"
import UserHeader from "./UserHeader"
import UserRight from "./UserRight"


const DeskUserLogin = () => {
    return (
        <div className="">
            <UserHeader />
            <div className="flex">
                <div className="mx-36">
                    <Label />
                    <Post />
                </div>
                <div>
                    <UserRight />
                </div>
            </div>
        </div>
    )
}

export default DeskUserLogin
