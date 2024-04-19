
import Header from "../Header"
import Label from "../Label"
import Post from "../Post"
import UserRight from "../UserLoggedInComponents/UserRight"
import SignupForm from "./SignupForm"


const DeskSignup = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div>
        <Header />
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
      <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" >
        <div className="z-10 shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full"><SignupForm/></div>
      </div>
      
    </div>

  )
}

export default DeskSignup
