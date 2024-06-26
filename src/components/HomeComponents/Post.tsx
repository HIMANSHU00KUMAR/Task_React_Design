import * as React from "react";

interface ArticleCardProps {
  imageSrc: string;
  articleType: string;
  title: string;
  description: string;
  authorImageSrc: string;
  authorName: string;
  views: string;
  shareImageSrc: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  articleType,
  title,
  description,
  authorImageSrc,
  authorName,
  views,
  shareImageSrc,
}) => {
  return (
    <div className="flex flex-col pt-px pb-5 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <img src={imageSrc} alt="" className="w-full aspect-[3.13] max-md:max-w-full" />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <div className="text-lg text-black max-md:max-w-full">
          <span className="font-medium">{articleType.slice(0, 2)}</span>
          <span className="font-medium">{articleType.slice(2)}</span>
        </div>
        <div className="flex gap-5 mt-4 text-2xl font-semibold leading-8 text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">{title}</div>
          <img src="/dist/icon/action/dot.png" alt="" className="shrink-0 self-start w-7 aspect-square" />
        </div>
        <div className="mt-5 text-xl leading-6 text-zinc-600 max-md:max-w-full">{description}</div>
        <div className="flex gap-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
            <img src={authorImageSrc} alt={`${authorName} profile`} className="shrink-0 w-12 aspect-square" />
            <div className="flex-auto my-auto">{authorName}</div>
          </div>
          <div className="flex flex-1 gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
            <div className="flex gap-2.5 my-auto">
              <img src="/dist/icon/action/eye.png" alt="" className="shrink-0 aspect-square w-[18px]" />
              <div className="my-auto">{views}</div>
            </div>
            <img src={shareImageSrc} alt="Share" className="shrink-0 aspect-[1.16] w-[42px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface MeetupCardProps {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
  websiteUrl: string;
  authorImageSrc: string;
  authorName: string;
  views: string;
  shareImageSrc: string;
}

const MeetupCard: React.FC<MeetupCardProps> = ({
  imageSrc,
  title,
  date,
  location,
  websiteUrl,
  authorImageSrc,
  authorName,
  views,
  shareImageSrc,
}) => {
  return (
    <div className="flex flex-col pt-px pb-5 mt-3.5 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <img src={imageSrc} alt="" className="w-full aspect-[3.13] max-md:max-w-full" />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <div className="text-lg text-black max-md:max-w-full">
          <span className="font-medium">🗓️</span>
          <span className="font-medium"> Meetup</span>
        </div>
        <div className="flex gap-5 mt-3 text-2xl font-semibold text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto max-md:max-w-full">{title}</div>
          <img src="/dist/icon/action/dot.png" alt="" className="shrink-0 self-start w-7 aspect-square" />
        </div>
        <div className="mt-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 max-md:max-w-full">
                <div className="flex gap-5 max-w-full text-base font-medium text-black w-[356px]">
                  <div className="flex flex-1 gap-1">
                    <img src="/dist/icon/action/date.png" alt="" className="shrink-0 w-5 aspect-square" />
                    <div className="flex-auto my-auto">{date}</div>
                  </div>
                  <div className="flex flex-1 gap-1">
                    <img src="/dist/icon/action/location.png" alt="" className="shrink-0 w-5 aspect-square" />
                    <div className="flex-auto my-auto">{location}</div>
                  </div>
                </div>
                <a
                  href={websiteUrl}
                  className="justify-center items-center px-16 py-3.5 mt-4 text-sm font-semibold leading-5 text-center text-red-500 bg-white rounded-lg border border-gray-400 border-solid max-md:px-5 max-md:max-w-full"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-3.5 pr-20 pl-3 w-full text-sm text-black bg-white rounded shadow-md max-md:pr-5">
                <div className="text-right">Edit</div>
                <div className="mt-5">Report</div>
                <div className="mt-5">Option 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
            <img src={authorImageSrc} alt={`${authorName} profile`} className="shrink-0 w-12 aspect-square" />
            <div className="my-auto">{authorName}</div>
          </div>
          <div className="flex flex-1 gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
            <div className="flex gap-2.5 my-auto">
              <img src="/dist/icon/action/eye.png" alt="" className="shrink-0 aspect-square w-[18px]" />
              <div className="my-auto">{views}</div>
            </div>
            <img src={shareImageSrc} alt="Share" className="shrink-0 aspect-[1.16] w-[42px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  applyUrl: string;
  authorImageSrc: string;
  authorName: string;
  views: string;
  shareImageSrc: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  applyUrl,
  authorImageSrc,
  authorName,
  views,
  shareImageSrc,
}) => {
  return (
    <div className="flex flex-col px-5 py-5 mt-3.5 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full font-medium text-black max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col">
            <div className="text-lg">💼️ Job</div>
            <div className="mt-6 text-2xl font-semibold leading-7">{title}</div>
            <div className="flex gap-1 mt-4 text-base">
              <img src="/dist/icon/action/bag.png" alt="" className="shrink-0 w-5 aspect-square" />
              <div className="flex-auto my-auto">{company}</div>
            </div>
          </div>
          <div className="flex gap-1 self-end mt-20 text-base max-md:mt-10">
            <img src="/dist/icon/action/location.png" alt="" className="shrink-0 w-5 aspect-square" />
            <div className="my-auto">{location}</div>
          </div>
        </div>
        <img src="/dist/icon/action/dot.png" alt="" className="shrink-0 my-auto w-7 aspect-square" />
      </div>
      <a
        href={applyUrl}
        className="justify-center items-center px-16 py-3 mt-4 text-sm font-semibold leading-5 text-center text-emerald-500 bg-white rounded-xl border border-gray-400 border-solid max-md:px-5 max-md:max-w-full"
      >
        Apply on Timesjobs
      </a>
      <div className="flex gap-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
          <img src={authorImageSrc} alt={`${authorName} profile`} className="shrink-0 w-12 aspect-square" />
          <div className="flex-auto my-auto">{authorName}</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
          <div className="flex gap-2.5 my-auto">
            <img src="/dist/icon/action/eye.png" alt="" className="shrink-0 aspect-square w-[18px]" />
            <div className="my-auto">{views}</div>
          </div>
          <img src={shareImageSrc} alt="Share" className="shrink-0 aspect-[1.16] w-[42px]" />
        </div>
      </div>
    </div>
  );
};

const articleData = [
  {
    imageSrc: "/dist/assets/Rectangle 5 (2).png",
    articleType: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    authorImageSrc: "/dist/assets/Rectangle 3 (1).png",
    authorName: "Sarthak Kamra",
    views: "1.4k views",
    shareImageSrc: "/dist/assets/share.png",
  },
  {
    imageSrc: "/dist/assets/Rectangle 5 (3).png",
    articleType: "🔬️ Education",
    title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    authorImageSrc: "/dist/assets/Rectangle 3 (2).png",
    authorName: "Sarah West",
    views: "1.4k views",
    shareImageSrc: "/dist/assets/share.png",
  },
];

const meetupData = {
  imageSrc: "/dist/assets/Rectangle 5 (4).png",
  title: "Finance & Investment Elite Social Mixer @Lujiazui",
  date: "Fri, 12 Oct, 2018",
  location: "Ahmedabad, India",
  websiteUrl: "#",
  authorImageSrc: "/dist/assets/Rectangle 3 (3).png",
  authorName: "Ronal Jones",
  views: "1.4k views",
  shareImageSrc: "/dist/assets/share.png",
};

const jobData = {
  title: "Software Developer",
  company: "Innovaccer Analytics Private Ltd.",
  location: "Noida, India",
  applyUrl: "#",
  authorImageSrc: "/dist/assets/Rectangle 3 (4).png",
  authorName: "Joseph Gray",
  views: "1.4k views",
  shareImageSrc: "/dist/assets/share.png",
};

function Post() {
  return (
    <div className="flex flex-col max-w-[692px]">
      {articleData.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
      <MeetupCard {...meetupData} />
      <JobCard {...jobData} />
    </div>
  );
}

export default Post;