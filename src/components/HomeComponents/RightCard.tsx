import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faLocationDot, faPencil } from '@fortawesome/free-solid-svg-icons'


const RightCard = () => {
    return (
        <div className="flex flex-col justify-center px-4 md:flex-wrap">  <div className="flex gap-5 ml-5">
            <button className="flex gap-3 py-2 pr-1.5 pl-3 text-base font-medium text-black bg-gray-100 rounded">
                <span className="my-auto">Write a Post</span>
                <span className="shrink-0 aspect-square w-[22px]"><FontAwesomeIcon icon={faCaretDown} /></span>
            </button>
            <button className="flex gap-1.5 px-2.5 py-2 text-base font-medium text-white bg-blue-600 rounded">
                <img src={"/dist/icon/action/baseline-group_add-24px (1).png"} alt="" className="shrink-0 aspect-square w-[22px] bg-white" />
                Join Group
            </button>
        </div>
            <div className="p-10">
                <span><FontAwesomeIcon icon={faLocationDot} />    Noida,India    <FontAwesomeIcon icon={faPencil} /> </span>
                <p className="text-wrap text-sm py-5">
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>
        </div>

    )
}

export default RightCard
