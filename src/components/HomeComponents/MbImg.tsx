

interface MyComponentProps {
  imageSrc: string;
}

function MbImg({ imageSrc }: MyComponentProps) {
  return (
    <div className=" relative">
      <img
        loading="lazy"
        src={imageSrc}
        className="h-full object-cover  aspect-[2.0]"
        alt="Descriptive alt text for the image"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
    </div>

  );
}

export default MbImg;