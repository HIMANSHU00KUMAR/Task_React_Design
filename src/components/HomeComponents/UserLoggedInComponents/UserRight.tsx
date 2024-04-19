import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'

const UserRight = () => {
    return (
        <div>

            <div className="flex gap-5">
                <button className="flex gap-3 py-2 pr-1.5 pl-3 text-base font-medium text-black bg-gray-100 rounded">
                    <span className="my-auto">Write a Post</span>
                    <span className="shrink-0 aspect-square w-[22px]"><FontAwesomeIcon icon={faCaretDown} /></span>
                </button>
                <button className="flex gap-1.5 px-2.5 py-2 text-base font-medium text-gray-400 bg-gray-100 rounded">
                    <img src={"https://cdn.builder.io/api/v1/image/assets/TEMP/077819701e1a7be01d1bd1a07105206b58784da22e2d99f4e5334a96fb3d2b13?apiKey=240a3564ebc049d98414cf55e6ed763c&"} alt="" className="shrink-0 aspect-square w-[22px]" />
                    Leave Group
                </button>
            </div>

            <div className="p-10">
                <span className="flex gap-3"><FontAwesomeIcon icon={faLocationDot} />

                    <input type="text" placeholder="Enter Your Location" /><FontAwesomeIcon icon={faXmark} />

                </span>
                <p className="text-wrap text-sm py-5">
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>

            <div className="mb-10">
                <span>RECOMMENDED GROUPS</span>
                <div className="flex mt-5 ">
                    <div className="flex gap-3">
                        <img src="dist/assets/Rectangle 6.png" alt="" className="shrink-0 aspect-square w-[28px]" />
                        <span className="font-semibold">Leisure</span>
                    </div>
                    <span className="bg-black rounded-2xl max-w-[700px] min-h-[24px] text-white text-sm py-1 px-7 ml-14">Followed</span>
                </div>
                <div className="flex  mt-5">
                    <div className="flex gap-3">
                        <img src="dist/assets/Rectangle 6 (1).png" alt="" className="shrink-0 aspect-square w-[28px]" />
                        <span className="font-semibold">Activism</span>
                    </div>
                    <span className="bg-gray-300 rounded-2xl max-w-[700px] min-h-[24px] text-black text-sm py-1 px-7 ml-14">Follow</span>
                </div>
                <div className="flex  mt-5">
                    <div className="flex gap-3">
                        <img src="dist/assets/Rectangle 6 (2).png" alt="" className="shrink-0 aspect-square w-[28px]" />
                        <span className="font-semibold">MBA</span>
                    </div>
                    <span className="bg-gray-300 rounded-2xl max-w-[700px] min-h-[24px] text-black text-sm py-1 px-7 ml-20">Follow</span>
                </div>
                <div className="flex  mt-5 mb-10">
                    <div className="flex gap-3">
                        <img src="dist/assets/Rectangle 6 (3).png" alt="" className="shrink-0 aspect-square w-[28px]" />
                        <span className="font-semibold">Philosophy</span>
                    </div>
                    <span className="bg-gray-300 rounded-2xl max-w-[700px] min-h-[24px] text-black text-sm py-1 px-7 ml-10">Follow</span>
                </div>

                <span className="text-blue-800  ml-52">See More...</span>
            </div>
            



        </div>
    )
}

export default UserRight
