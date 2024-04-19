import * as React from "react";
import { Link } from "react-router-dom";

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
  onFacebookSignIn: () => void;
  onGoogleSignIn: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  onFacebookSignIn,
  onGoogleSignIn,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex flex-col grow px-5 text-sm font-medium leading-4 text-black max-md:mt-10">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="z-10 justify-center items-start px-3 py-5 mt-6 text-base leading-4 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-300 text-zinc-500 max-md:pr-5"
          placeholder="Email"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="flex gap-5 justify-between py-3.5 pr-6 pl-3 text-base leading-4 whitespace-nowrap rounded-none border border-solid bg-slate-50 border-zinc-300 text-zinc-500 max-md:pr-5">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-auto"
            placeholder="Password"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed19c7c1708ba88a08321b986c00bedc6d9b8ee6d701533956509bd0192e8ec5?apiKey=240a3564ebc049d98414cf55e6ed763c&"
            alt="Password visibility toggle"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <Link to={"/userloged"}><button
          type="submit"
          className="justify-center items-center px-16 py-3.5 mt-5 font-semibold text-center text-white bg-blue-600 rounded-3xl max-md:px-5"
        >
          Sign In
        </button>
        </Link>
      </form>
      <button
        type="button"
        onClick={onFacebookSignIn}
        className="flex gap-2.5 px-20 py-3 mt-6 bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3b0e2ce438ec302b97dfdbf2c83199eaec1133df6c9a0857ec981926049e5c?apiKey=240a3564ebc049d98414cf55e6ed763c&"
          alt="Facebook logo"
          className="shrink-0 w-4 aspect-square"
        />
        <span className="flex-auto">Sign in with Facebook</span>
      </button>
      <button
        type="button"
        onClick={onGoogleSignIn}
        className="flex gap-2.5 px-20 py-3 mt-2 bg-white rounded-sm border border-solid border-zinc-300 max-md:px-5"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d888f95952769c1e672f9b62e0284efda65d16d34c9c535296bcf453c3765520?apiKey=240a3564ebc049d98414cf55e6ed763c&"
          alt="Google logo"
          className="shrink-0 w-4 aspect-square"
        />
        <span className="flex-auto">Sign in with Google</span>
      </button>
      <p className="self-center mt-7 text-xs tracking-normal leading-4 text-center">
        Forgot Password?
      </p>
    </div>
  );
};

const SigninForm: React.FC = () => {
  const handleSignIn = () => {
    // Handle sign in logic
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in logic
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
  };

  return (
    <div className="flex flex-col max-w-[750px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc41c319477decc27e60daabf983f317f528e0adc945749529b764d392b09ea1?apiKey=240a3564ebc049d98414cf55e6ed763c&"
        alt=""
        className="self-end w-7 aspect-square"
      />
      <div className="flex flex-col pb-8 mt-3 w-full bg-white rounded-lg shadow-lg max-md:max-w-full">
        <div className="justify-center px-16 py-4 text-sm font-medium leading-4 text-center text-green-700 bg-green-50 rounded-lg max-md:px-5 max-md:max-w-full">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="self-center mt-8 w-full max-w-[676px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <SignInForm
                onSubmit={handleSignIn}
                onFacebookSignIn={handleFacebookSignIn}
                onGoogleSignIn={handleGoogleSignIn}
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 text-sm text-right text-blue-600 max-md:mt-10">
                <p>
                  Don't have an account yet?{" "}
                  <span className="font-semibold text-blue-600">
                    Create new for free!
                  </span>
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fedc2339765aed7e971865cdde6af240949a4e52cf5912079702e9d5feea0bf?apiKey=240a3564ebc049d98414cf55e6ed763c&"
                  alt="Create account illustration"
                  className="self-start mt-14 w-full aspect-[0.99] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;