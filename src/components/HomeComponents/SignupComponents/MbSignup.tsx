import * as React from "react";
import MbImg from "../MbImg";
import Mbheader from "../Mbheader";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return <div className={`justify-center px-8 py-3.5 font-semibold text-white bg-blue-600 rounded-3xl leading-[123%] ${className}`}>{text}</div>;
};

interface SocialButtonProps {
  icon: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-2.5 px-20 py-3 mt-3 text-black bg-white rounded-sm border border-solid border-zinc-300 leading-[123%]">
      <img src={icon} alt="" className="shrink-0 w-4 aspect-square" />
      <div className="flex-auto">{text}</div>
    </div>  
  );
};

const MbSignup: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-sm bg-white max-w-[360px]">
      <div className="flex flex-col  w-full bg-neutral-100">
        <Mbheader imageUrl={"/dist/assets/Group 3.png"}/>
        <MbImg imageSrc={"/dist/assets/Rectangle 2 (1).png"} />
        <div className="flex flex-col px-5 py-5  w-full bg-white rounded-lg shadow-lg">
          <header className="flex gap-5 text-lg font-bold text-black">
            <h1 className="flex-auto my-auto">Create Account</h1>
            <img src="/dist/icon/action/cross.png" alt="" className="shrink-0 w-6 aspect-square" />
          </header>
          <div className="flex z-10 gap-5 pr-20 pl-3 mt-5 w-full font-medium rounded-sm border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500">
            <div className="my-auto">First Name</div>
            <div className="flex flex-1 gap-3">
              <div className="shrink-0 w-px h-10 border border-solid bg-zinc-300 border-zinc-300" />
              <div className="my-auto">Last Name</div>
            </div>
          </div>
          <div className="justify-center items-start px-3 py-4 font-medium whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500">Email</div>
          <div className="flex z-10 gap-5 justify-between px-3 py-3 font-medium whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500">
            <div className="my-auto">Password</div>
            <img src="/dist/icon/action/eye.png" alt="" className="shrink-0 w-4 aspect-square" />
          </div>
          <div className="justify-center items-start px-3 py-4 font-medium rounded-none border border-solid bg-slate-50 border-zinc-300 leading-[123%] text-zinc-500">Confirm Password</div>
          <div className="flex gap-5 justify-between mt-6 text-center">
            <Button text="Create Account" />
            <div className="my-auto font-medium underline text-zinc-600">or, Sign In</div>
          </div>
          <SocialButton icon="/dist/icon/action/facebook.png" text="Sign up with Facebook" />
          <SocialButton icon="/dist/icon/action/google.png" text="Sign up with Google" />
          <div className="self-center mt-7 w-60 text-xs tracking-normal leading-4 text-center text-neutral-800">By signing up, you agree to our Terms & conditions, Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default MbSignup;