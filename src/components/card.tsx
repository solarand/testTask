interface IProps {
  img: string;
  id: number;
}

const ImageCard = ({ img, id }: IProps) => {
  return (
    <div className="max-h-[244px] min-w-0 w-full cursor-pointer hover:scale-105">
      <img
        src={img}
        alt=""
        className="h-[216px] w-full object-cover rounded-lg"
      />
      <p className="mt-2 text-sm font-medium text-gray-900">id: {id}</p>
    </div>
  );
};

export default ImageCard;
