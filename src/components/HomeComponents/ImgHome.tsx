

interface MyComponentProps {
    imageSrc: "dist/assets/Rectangle 2 (1).png";
    imageAlt: "HomelaptopImg";
}

function ImgHome({ imageSrc, imageAlt }: MyComponentProps) {
    return (
        <div className="min-h-[440px] relative overflow-hidden w-full aspect-[3.23]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      

    );
}

export default ImgHome;