import send from "./../assets/img/arrow-up.png";
import CommentDiv from "./comment";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addComment, closeModal } from "../store/slices/modalSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import Gallery from "../services/service";

interface FormData {
  comment: string;
}

const Modal = () => {
  const dispatch = useAppDispatch();
  const response = useAppSelector((state) => state.modal.response);
  const { register, handleSubmit, watch } = useForm<FormData>();

  const commentLength = watch("comment");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await Gallery.postComment(data.comment, response?.id);
      if (res.status === 204) {
        dispatch(addComment(data.comment));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-2/3 border h-3/4 fixed bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-2xl">
      <button
        className="absolute cursor-pointer hover:bg-blue-700 bg-blue-500 text-white px-4 bottom-[-25px] right-[-1px]"
        onClick={() => dispatch(closeModal())}
      >
        Закрыть
      </button>
      <img
        src={response?.largeImage}
        alt=""
        className="h-1/3 w-full object-cover shadow-2xl"
      />
      <div className="relative min-h-2/3 pt-4">
        <h1 className="font-bold ml-4 text-2xl">Комментарии</h1>
        <div className=" h-80 overflow-y-auto">
          {response.comments.map((comment) => (
            <CommentDiv key={comment.id} {...comment} />
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className=" absolute bottom-0 w-full flex justify-center pb-5"
        >
          <div className="sm:w-2/3 w-3/4 relative h-7 sm:h-10">
            <textarea
              {...register("comment")}
              placeholder="Введите комментарий"
              className="resize-none border-b w-full h-7 placeholder:text-sm sm:placeholder:text-md transition focus:outline-none focus:border-blue-700"
            ></textarea>
            <button>
              <img
                src={send}
                alt=""
                className={`${
                  !commentLength && "pointer-events-none opacity-50 "
                } absolute bottom-5 right-0 sm:right-2 h-4 w-4 cursor-pointer hover:scale-110 transition`}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
