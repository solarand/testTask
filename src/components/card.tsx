import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Gallery from "../services/service";
import { openModal } from "../store/slices/modalSlice";

interface IProps {
  img: string;
  id: number;
}

const ImageCard = ({ img, id }: IProps) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  async function handleClick() {
    const data = (await Gallery.getImage(id)).data;
    dispatch(openModal(data));
  }

  return (
    <div
      className={`${
        isOpen && "pointer-events-none"
      } max-h-[244px] min-w-0 w-full cursor-pointer hover:scale-105`}
      onClick={() => handleClick()}
    >
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
