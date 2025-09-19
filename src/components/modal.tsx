import bg from "./../assets/img/bg.jpg";
import send from "./../assets/img/arrow-up.png";
import Comment from "./comment";

const Modal = () => {
  return (
    <div className="w-2/3 border h-3/4 absolute bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-2xl">
      <button className="absolute cursor-pointer hover:bg-blue-700 bg-blue-500 text-white px-4 bottom-[-25px] right-[-1px]">
        Закрыть
      </button>
      <img src={bg} alt="" className="h-1/3 w-full object-cover shadow-2xl" />
      <div className="relative min-h-2/3 pt-4">
        <h1 className="font-bold ml-4 text-2xl">Комментарии</h1>
        <div className=" h-80 overflow-y-scroll">
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>

        <form
          action=""
          className=" absolute bottom-0 w-full flex justify-center pb-5"
        >
          <div className="sm:w-2/3 w-3/4 relative h-7 sm:h-10">
            <textarea
              name=""
              id=""
              placeholder="Введите комментарий"
              className="resize-none border-b w-full h-7 sm:h-10 placeholder:text-sm sm:placeholder:text-xl transition focus:outline-none focus:border-blue-700"
            ></textarea>
            <img
              src={send}
              alt=""
              className="absolute bottom-2.5 right-0 sm:right-2 h-4 w-4 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
