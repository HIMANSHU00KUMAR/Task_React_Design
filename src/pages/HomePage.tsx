import Header from "../components/HomeComponents/Header"
import ImgHome from "../components/HomeComponents/ImgHome"
import Label from "../components/HomeComponents/Label"
import MbImg from "../components/HomeComponents/MbImg"
import Mbheader from "../components/HomeComponents/Mbheader"
import Post from "../components/HomeComponents/Post"
import RightCard from "../components/HomeComponents/RightCard"


const HomePage = () => {
    return (
        <div>
            <div className="hidden md:block">
                <Header />
                <ImgHome imageSrc={"/assets/Rectangle 2 (1).png"} imageAlt={"HomelaptopImg"} />
            </div>
            <div className="flex flex-col md:hidden ">
                <Mbheader imageUrl={"src/assets/Group 3.png"} />
                <MbImg imageSrc={"/assets/Rectangle 2 (1).png"} />
            </div>


            <div className="flex justify-between py-4 md:mx-36 ">
                <div>
                    <Label />
                    <Post />
                </div>

                <div className="hidden lg:block">
                    <RightCard />

                </div>
            </div>
        </div>
    )
}

export default HomePage
