import bg from "./assets/img/bg.jpg";
import avatar from "./assets/img/avatar.jpg";
import mail from "./assets/img/mail.png";
import phone from "./assets/img/phone.png";

function App() {
  return (
    <>
      <header className="h-64 relative">
        <img src={bg} alt="" className="h-48 object-cover w-full" />
        <div className="w-[1028px] h-32 absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end pl-8 pr-8 gap-5">
          <img
            src={avatar}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-white"
          />
          <div className="w-[812px] h-[42px] border-white flex justify-between">
            <h1 className="w-[569px] h-8 text-left text-2xl font-bold text-gray-900 mt-[3px]">
              Ricardo Cooper
            </h1>
            <div className="w-[219px] h-[38px] flex justify-between">
              <button className="bg-white w-[119px] border border-gray-300 shadow-sm rounded-md flex items-center ">
                <img src={mail} alt="" className="h-3 w-4 ml-[13px] mr-2" />
                Message
              </button>
              <button className="bg-white w-[84px] border border-gray-300 shadow-sm rounded-md flex items-center">
                <img
                  src={phone}
                  alt=""
                  className="h-4 w-4 ml-[15px] mr-[10px]"
                />
                Call
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mt-[46px] grid grid-cols-3 gap-8">
        <div className="border h-[244px]">
          <img src={bg} alt="" className="h-[216px] w-full object-cover" />
          <p className="mt-2 text-sm font-medium text-gray-900">
            id: вывести id
          </p>
        </div>
        <div className="border h-[244px]">
          <img src={bg} alt="" className="h-[216px] w-full object-cover" />
          <p className="mt-2 text-sm font-medium text-gray-900">
            id: вывести id
          </p>
        </div>
        <div className="border h-[244px]">
          <img src={bg} alt="" className="h-[216px] w-full object-cover" />
          <p className="mt-2 text-sm font-medium text-gray-900">
            id: вывести id
          </p>
        </div>
        <div className="border h-[244px]"></div>
        <div className="border h-[244px]"></div>
        <div className="border h-[244px]"></div>
        <div className="border h-[244px]"></div>

        <div className="border h-[244px]"></div>

        <div className="border h-[244px]"></div>
      </main>
    </>
  );
}

export default App;
