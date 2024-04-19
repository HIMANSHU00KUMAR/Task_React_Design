import DeskSignUp from "../components/HomeComponents/SignupComponents/DeskSignup"
import MbSignup from "../components/HomeComponents/SignupComponents/MbSignup"


const SignUpPage = () => {
    return (
        <div >
            <div className="hidden sm:block">
               <DeskSignUp/>
            </div>
            <div className="sm:hidden ">
                <MbSignup/>
            </div>

        </div>
    )
}

export default SignUpPage
