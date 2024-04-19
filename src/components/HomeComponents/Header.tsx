import * as React from "react";

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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18dfc9c3aa3114a0e0385d7dcf110f2c521429a580ce8cb639399ac20bca5ec1?apiKey=240a3564ebc049d98414cf55e6ed763c&"
        alt="Company logo"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[6.67] w-[163px]"
      />
      <SearchInput
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ff6d9700f3a724b9f912b0cf80e51d26afeb7f68ca09c78c3370b7d6e942ed?apiKey=240a3564ebc049d98414cf55e6ed763c&"
        placeholder="Search for your favorite groups in ATG"
      />
      <div className="flex gap-0 self-stretch my-auto text-base text-right text-blue-600">
        <div className="grow my-auto">
          <span className="text-zinc-800">Create account. </span>
          <span className="font-bold text-blue-600">It's free!</span>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/599adac2e5c01a1005c41b85e90850d581d9ccabed4aa883da3d5907c0123223?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </header>
  );
};

export default Header;


