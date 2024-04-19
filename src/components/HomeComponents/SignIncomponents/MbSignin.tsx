import * as React from "react";
import Mbheader from "../Mbheader";
import MbImg from "../MbImg";

interface SignInButtonProps {
  text: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ text }) => (
  <button className="justify-center px-14 py-3 font-semibold text-center text-white bg-blue-600 rounded-3xl leading-[123%]">
    {text}
  </button>
);

interface SocialSignInButtonProps {
  icon: string;
  text: string;
}

const SocialSignInButton: React.FC<SocialSignInButtonProps> = ({ icon, text }) => (
  <button className="flex gap-2.5 px-20 py-3 mt-3 text-black bg-white rounded-sm border border-solid border-zinc-300 leading-[123%]">
    <img src={icon} alt="" className="shrink-0 w-4 aspect-square" />
    <span className="flex-auto">{text}</span>
  </button>
);

const MbSignin: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-sm bg-white max-w-[360px]">
      <div className="flex flex-col  w-full ">
      <Mbheader imageUrl={"src/assets/Group 3.png"}/>
        <MbImg imageSrc={"src/assets/Rectangle 2 (1).png"} />
        <div className="flex flex-col px-5 pt-6 pb-20  w-full bg-white rounded-lg shadow-lg">
          <header className="flex gap-5 text-lg font-bold text-black">
            <h1 className="flex-auto my-auto">Welcome back!</h1>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/704c0fe50ef217c1f94e5f57bf18007a588d74d2767d54c4f67ec37208adf606?apiKey=240a3564ebc049d98414cf55e6ed763c&"
              alt="Welcome back icon"
              className="shrink-0 w-6 aspect-square"
            />
          </header>
          <form>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="z-10 justify-center items-start px-3 py-4 mt-5 font-medium whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500 w-full"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="flex gap-5 justify-between p-3 font-medium whitespace-nowrap rounded-none border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="my-auto bg-transparent outline-none w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f5a72f5c54389b99fcacc5851b3afc7213bfb427c2d3d0112d80f6b5d10e9c?apiKey=240a3564ebc049d98414cf55e6ed763c&"
                alt="Password visibility toggle"
                className="shrink-0 w-4 aspect-square"
              />
            </div>
            <div className="flex gap-5 mt-6">
              <SignInButton text="Sign In" />
              <a href="#" className="flex-auto my-auto font-medium text-right underline text-zinc-600">
                or, Create Account
              </a>
            </div>
          </form>
          <div className="mt-6 space-y-3">
            <SocialSignInButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=240a3564ebc049d98414cf55e6ed763c&" text="Sign in with Facebook" />
            <SocialSignInButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/40c01c0d21377a922d4479926eb34257d0520d7f0381a0a9d916065e3daee5b5?apiKey=240a3564ebc049d98414cf55e6ed763c&" text="Sign in with Google" />
          </div>
          <a href="#" className="self-center mt-7 mb-3 text-xs font-medium tracking-normal leading-4 text-center text-neutral-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default MbSignin;