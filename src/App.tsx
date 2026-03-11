import { CustomForm } from "./components";
import { GlobalProvider } from "./context";
import { BookReader } from "./hooks";
import { InputFocus } from "./hooks";
import { ListOfItems } from "./hooks";
import { ListOfUsers } from "./hooks";
import { ModalProvider } from "./context/modal.provider";
import { SectionComponent } from "./components/others/Section";
function App() {
  return (
    <GlobalProvider>
      <ModalProvider>
        <div className="text-red-500">hola</div>
        <CustomForm />
        <BookReader />
        <InputFocus />
        <ListOfItems />
        <ListOfUsers />
        <SectionComponent />
      </ModalProvider>
    </GlobalProvider>
  );
}

export default App;
