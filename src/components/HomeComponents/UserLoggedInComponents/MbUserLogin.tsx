import Label from "../Label"
import MbImg from "../MbImg"
import Mbheader from "../Mbheader"
import Post from "../Post"


const MbUserLogin = () => {
  return (
    <div className="flex flex-col justify-center text-sm bg-white max-w-[360px]">
      <Mbheader imageUrl={"dist/assets/Group 3.png"}/>
      <MbImg imageSrc={"dist/assets/Rectangle 2 (1).png"}/>
      <Label/>
      <Post/>
    </div>
  )
}

export default MbUserLogin
