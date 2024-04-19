import DeskSignin from "../components/HomeComponents/SignIncomponents/DeskSignin"
import MbSignin from "../components/HomeComponents/SignIncomponents/MbSignin"



const SignInPage = () => {
    return (
        <div >
            <div className="hidden sm:block">
                <DeskSignin />
            </div>
            <div className="sm:hidden ">
                <MbSignin />
            </div>

        </div>
    )
}

export default SignInPage
