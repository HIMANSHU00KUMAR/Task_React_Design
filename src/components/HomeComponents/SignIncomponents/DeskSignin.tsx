import * as React from "react";
import { Link } from "react-router-dom";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <div className={`justify-center px-2.5 py-2 my-auto text-xs text-center whitespace-nowrap rounded-2xl ${className}`}>
    {children}
  </div>
);

interface UserProps {
  imageSrc: string;
  name: string;
  buttonText: string;
  buttonClassName: string;
}

const User: React.FC<UserProps> = ({ imageSrc, name, buttonText, buttonClassName }) => (
  <div className="flex gap-5 justify-between text-black">
    <div className="flex gap-3 px-5 text-sm">
      <Image src={imageSrc} alt={`${name}'s profile picture`} className="shrink-0 w-9 aspect-square" />
      <Text className="my-auto">{name}</Text>
    </div>
    <Button className={buttonClassName}>{buttonText}</Button>
  </div>
);

const users = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0cf5657ac46318df88c6e43871899ac70cd608fd954ea685cc0cf1d9d7a5880?apiKey=240a3564ebc049d98414cf55e6ed763c&",
    name: "Joy Lawson",
    buttonText: "Connected",
    buttonClassName: "bg-black text-white",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f77f506829fd5585820f73d412de0c826b664d087929afc0aa8af80ed2df003?apiKey=240a3564ebc049d98414cf55e6ed763c&",
    name: "John Doe",
    buttonText: "Connect",
    buttonClassName: "bg-gray-100",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e44ac1f638d85ad7cbafe530feab46cebc4df1c6f0f4a628c12998d8754553d2?apiKey=240a3564ebc049d98414cf55e6ed763c&",
    name: "Siddharth Goyal",
    buttonText: "Connect",
    buttonClassName: "bg-gray-100",
  },
];

function DeskSignin() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col w-full bg-gray-00 max-md:max-w-full">
        <header className="flex gap-5 justify-between items-center px-20 py-4 w-full font-medium bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f58d41d7b3edb94126920116a910caf38b327662c49e30fd109a207ef369d165?apiKey=240a3564ebc049d98414cf55e6ed763c&"
            alt="Logo"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[6.67] w-[163px]"
          />
          <div className="flex gap-3.5 self-stretch px-3.5 py-2.5 text-sm rounded-3xl bg-zinc-100 text-zinc-600">
            <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb0d7292384d130a45ec344f758046976c004d38c9f6148245c44d93665a76ba?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Search icon" className="shrink-0 aspect-square w-[22px]" />
            <Text className="flex-auto my-auto">Search for your favorite groups in ATG</Text>
          </div>
          <div className="flex gap-0 self-stretch my-auto text-base text-right text-blue-600">
            <Text className="grow my-auto">
              <span className="text-zinc-800">Create account. </span>
              <span className="font-bold text-blue-600">It's free!</span>
            </Text>
            <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/203329fbda8bf1da24556e810bd377f6e1548f0e036af794981ca2722b1c086b?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Arrow icon" className="shrink-0 w-6 aspect-square" />
          </div>
        </header>
        <div className="flex flex-col self-center mt-5 w-full max-w-[1040px] max-md:max-w-full">
          <nav className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 px-5 my-auto text-base text-zinc-500">
              <Text className="grow text-black">All Posts(32)</Text>
              <Text>Article</Text>
              <Text>Event</Text>
              <Text>Education</Text>
              <Text>Job</Text>
            </div>
            <div className="flex gap-4 text-base font-medium">
              <Link to={"/userloged"}><div className="flex gap-1.5 px-2.5 py-2 bg-white rounded border border-solid border-zinc-400 text-zinc-500">
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/852d94d3706f6cc3719acbd9ff28e06351eba2182a021ceab6dc97ee735cb810?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Leave group icon" className="shrink-0 aspect-square w-[22px]" />
                <Text>Leave Group</Text>
              </div></Link>
              <div className="flex gap-1 text-black">
                <div className="flex gap-1.5 px-2.5 py-2 bg-gray-100 rounded">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1a67092f84ff00b573bfe7659a80bbfb6e8c225c5723a4cb442812a04f40e52?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Write post icon" className="shrink-0 aspect-square w-[22px]" />
                  <Text className="my-auto">Write a Post</Text>
                </div>
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/4440350576dbc1fada032c2d3ccdcf01dcefbc9778e349b70a5db2d0e69813dc?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Join group icon" className="shrink-0 w-9 aspect-square" />
              </div>
            </div>
          </nav>
          <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
          <div className="z-10 shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3030b1e5d46dbb4489184fcc4834b37575e7752f5ba2cedd8c6d99e7e02db24c?apiKey=240a3564ebc049d98414cf55e6ed763c&"
            alt="Banner image"
            className="mt-1.5 w-full rounded-lg shadow-lg aspect-[2.08] max-md:max-w-full"
          />
          <main className="mt-3 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-px w-full text-black bg-white rounded border border-solid border-neutral-200 max-md:mt-10 max-md:max-w-full">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25026b25bef222fe1adb43d575ca7025c667a7cc98305e5d028d55ae4603491?apiKey=240a3564ebc049d98414cf55e6ed763c&"
                    alt="Article image"
                    className="w-full aspect-[3.23] max-md:max-w-full"
                  />
                  <div className="flex flex-col px-5 mt-5 max-md:pl-5 max-md:max-w-full">
                    <Text className="text-lg max-md:max-w-full">
                      <span className="font-medium">🔬️</span>
                      <span className="font-medium"> Educatio</span>n
                    </Text>
                    <div className="flex gap-5 mt-4 text-2xl font-semibold leading-8 max-md:flex-wrap max-md:max-w-full">
                      <Text className="flex-auto max-md:max-w-full">
                        Tax Benefits for Investment under National Pension Scheme launched by Government
                      </Text>
                      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee34a27793abdfa8c5788a59056c9e725a9a5b93740d2c40b591893c58fa3107?apiKey=240a3564ebc049d98414cf55e6ed763c&" alt="Menu icon" className="shrink-0 self-start w-7 aspect-square" />
                    </div>
                    <Text className="mt-5 text-xl leading-6 text-zinc-600 max-md:max-w-full">
                      I've worked in UX for the better part of a decade. From now on, I plan to rei…
                    </Text>
                  </div>
                </div>
              </article>
              <aside className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  {users.map((user, index) => (
                    <User key={index} {...user} />
                  ))}
                  <div className="flex gap-2.5 self-end px-5 mt-12 text-sm text-blue-600 max-md:mt-10">
                    <Text className="my-auto">See More...</Text>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bebf53cfa7b9ec11140f03974a147b1c0f6ff13edbea5974f80b20d4c2ab540c?apiKey=240a3564ebc049d98414cf55e6ed763c&"
                      alt="Arrow icon"
                      className="shrink-0 w-3.5 aspect-[0.78] fill-[linear-gradient(196deg,#9A9A9A_9.74%,rgba(82,82,82,0.00)_113.33%)]"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default DeskSignin