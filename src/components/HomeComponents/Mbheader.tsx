

interface MyComponentProps {
  imageUrl: string;
}

function Mbheader({ imageUrl }: MyComponentProps) {
  return (
    <div className="flex flex-col  items-end px-5 py-2 bg-gray-50  ">
      <img src={imageUrl} alt="" className="aspect-[5] w-[51px]" />
    </div>
  );
}

export default Mbheader;