import * as React from "react";
import { Link } from "react-router-dom";



const SocialButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex gap-2.5 px-20 py-3 mt-2 text-sm leading-4 text-black bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5">
    <img loading="lazy" src={icon} className="shrink-0 w-4 aspect-square" alt="" />
    <div className="flex-auto">{label}</div>
  </div>
);

function SignupForm() {
  return (
    <div className="flex flex-col max-w-[750px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74b3933ee797f62f7bd52974242ec64d5c65d7efd6d95737a3015621322f625b?apiKey=240a3564ebc049d98414cf55e6ed763c&" className="self-end w-7 aspect-square" alt="" />
      <div className="flex flex-col pb-9 mt-3 w-full bg-white rounded-lg shadow-lg max-md:max-w-full">
        <div className="justify-center px-16 py-4 text-sm font-medium leading-4 text-center text-green-700 bg-green-50 rounded-lg max-md:px-5 max-md:max-w-full">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className="self-center mt-8 w-full max-w-[676px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-base font-medium leading-4 text-zinc-500 max-md:mt-6 ">
                <h1 className="text-2xl font-bold text-black">Create Account</h1>
                <form>
                  <input type="text" placeholder="First Name" className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5 " />
                  <input type="text" placeholder="Last Name" className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5" />
                  <input type="email" placeholder="Email" className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5" />
                  <input type="password" placeholder="Password" className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5" />
                  <input type="password" placeholder="Confirm Password" className="justify-center items-start px-3 py-5 whitespace-nowrap border border-solid bg-slate-50 border-zinc-300 max-md:pr-5" />
                  <button className="justify-center items-center px-16 py-4 mt-5 text-sm font-semibold leading-4 text-center text-white bg-blue-600 rounded-3xl max-md:px-5">
                    Create Account
                  </button>
                </form>
                <SocialButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=240a3564ebc049d98414cf55e6ed763c&" label="Sign up with Facebook" />
                <SocialButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/36963a59ea06306c09a2a55f13b21d8a79ea35f7aa2aaa593fa17d5dc9e733a3?apiKey=240a3564ebc049d98414cf55e6ed763c&" label="Sign up with Google" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-right max-md:mt-7">
                <div className="self-end text-sm text-blue-600">
                  Already have an account?{" "}
                  <Link to={"/signin"}><span className="font-semibold text-blue-600">Sign In</span></Link>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d09b2153fa3383af995032d1444995eae7bf65d837d2d68599ea9d6bc4edaf96?apiKey=240a3564ebc049d98414cf55e6ed763c&" className="mt-8 w-full aspect-[1.02]" alt="" />
                <p className="mt-4 text-xs tracking-normal leading-4 text-black">
                  By signing up, you agree to our Terms & conditions, Privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupForm