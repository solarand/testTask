import Modal from "./components/modal";
import Header from "./components/widgets/header";
import MainContent from "./components/widgets/mainContent";
import { useAppSelector } from "./hooks/redux";

function App() {
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      {isOpen && <Modal></Modal>}
    </>
  );
}

export default App;
