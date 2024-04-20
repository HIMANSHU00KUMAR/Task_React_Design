import * as React from "react";
import { Link } from "react-router-dom";

interface SearchInputProps {
  icon: string;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ icon, placeholder }) => {
  return (
    <div className="flex gap-3.5 self-stretch px-3.5 py-2.5 text-sm rounded-3xl bg-zinc-100 text-zinc-600 ">
      <img src={icon} alt="" className="shrink-0 aspect-square w-[22px]" />
      <div className="flex-auto my-auto">{placeholder}</div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between items-center px-20 py-4 font-medium bg-white shadow-sm max-md:flex-wrap max-md:px-5 ">
      <img
        src="/dist/assets/whole.png"
        alt="Company logo"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[6.67] w-[163px]"
      />
      <SearchInput
        icon="/dist/icon/action/search.png"
        placeholder="Search for your favorite groups in ATG"
      />
      <div className="flex gap-0 self-stretch my-auto text-base text-right text-blue-600">
        <div className="grow my-auto">
          <Link to={"signup"}><span className="text-zinc-800">Create account. </span></Link>
          <span className="font-bold text-blue-600">It's free!</span>
        </div>
        <img src="/dist/icon/action/arrowdown.png" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </header>
  );
};

export default Header;


