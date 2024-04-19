import DeskUserLogin from "../components/HomeComponents/UserLoggedInComponents/DeskUserLogin"
import MbUserLogin from "../components/HomeComponents/UserLoggedInComponents/MbUserLogin"


const UserLoggedinPage = () => {
    return (
        <div>
            <div className="hidden sm:block">
                <DeskUserLogin />
            </div>
            <div className="sm:hidden ">
                <MbUserLogin />
            </div>
        </div>
    )
}

export default UserLoggedinPage
