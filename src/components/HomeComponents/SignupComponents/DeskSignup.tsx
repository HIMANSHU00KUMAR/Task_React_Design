import * as React from "react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex gap-3.5 self-stretch px-3.5 py-2.5 text-sm rounded-3xl bg-zinc-100 text-zinc-600">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19205eb1504b1ed82c587a6c3315d3c1c993e19264cde1e3505cdc9f66d83f5?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="" className="shrink-0 aspect-square w-[22px]" />
      <div className="flex-auto my-auto">{placeholder}</div>
    </div>
  );
};

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ children, active = false }) => {
  return (
    <div className={`grow ${active ? "text-black" : ""}`}>
      {children}
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  icon: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon, className = "" }) => {
  return (
    <div className={`flex gap-1.5 px-2.5 py-2 rounded ${className}`}>
      <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[22px]" />
      <div className="my-auto">{children}</div>
    </div>
  );
};

const navItems = [
  { label: "All Posts(32)", active: true },
  { label: "Article" },
  { label: "Event" },
  { label: "Education" },
  { label: "Job" },
];

function DeskSignUp() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col w-full  max-md:max-w-full">
        <header className="flex gap-5 justify-between items-center px-20 py-4 w-full font-medium bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84616369cb7b7d5892a4655566ea4258ad383811fe10ab943fea222e19193ff?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Logo" className="shrink-0 self-stretch my-auto max-w-full aspect-[6.67] w-[163px]" />
          <SearchBar placeholder="Search for your favorite groups in ATG" />
          <div className="flex gap-0 self-stretch my-auto text-base text-right text-blue-600">
            <div className="grow my-auto">
              <span className="text-zinc-800">Create account. </span>
              <span className="font-bold text-blue-600">It's free!</span>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35ab18adf9a79db1ce4547d5a6474caf6574657d05e0c4bcc54c45ad9d87165?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="" className="shrink-0 w-6 aspect-square" />
          </div>
        </header>
        <main className="flex flex-col self-center mt-5 w-full max-w-[1040px] max-md:max-w-full">
          <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 px-5 my-auto text-base text-zinc-500">
              {navItems.map((item) => (
                <NavItem key={item.label} active={item.active}>
                  {item.label}
                </NavItem>
              ))}
            </div>
            <div className="flex gap-4 text-base font-medium">
              <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c6537e67692bb82739cf555b95fc3263f361aba3b48424f72b0094e4b1568306?apiKey=240a3564ebc049d98414cf55e6ed763c&" className="bg-white border border-solid border-zinc-400 text-zinc-500">
                Leave Group
              </Button>
              <div className="flex gap-1 text-black">
                <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/18cd40d889ffef45625803768c78bf939f90e1573d3dbedc620fcc76909b41db?apiKey=240a3564ebc049d98414cf55e6ed763c&" className="bg-gray-100">
                  Write a Post
                </Button>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d54d2732d0ef1f833a2678c302bea2d4c3911244e7bc442aefc97d45d15ec5c?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="" className="shrink-0 w-9 aspect-square" />
              </div>
            </div>
          </nav>
          <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
          <div className="z-10 shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9995f80b981b1b06a5d91bc4df6b406aa7eb47f531d48a09af502ee056338f1b?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Banner" className="mt-1.5 w-full rounded-lg shadow-lg aspect-[1.18] max-md:mr-1.5 max-md:max-w-full" />
        </main>
      </div>
    </div>
  );
}
export default DeskSignUp