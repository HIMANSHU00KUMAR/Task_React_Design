import Header from "../Header"
import Label from "../Label"
import Post from "../Post"
import UserRight from "../UserLoggedInComponents/UserRight"
import SigninForm from "./SigninForm"


const DeskSignin = () => {
  return (
    <div className="flex flex-col justify-center bg-[#495057] ">
      <div className="opacity-45">
        <Header />
        <div className="flex">
          <div className="mx-36">
            <Label />
            <Post />
          </div>
          <div className="">
            <UserRight/>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-screen shrink-0 mt-3 flex justify-center items-center border border-solid  border-neutral-200 max-md:max-w-full" >
          <SigninForm/>
      </div>

    </div>
  )
}

export default DeskSignin
