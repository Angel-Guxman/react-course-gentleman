import { CustomForm } from "./components";
import { GlobalProvider } from "./context";
import { BookReader } from "./hooks";
import { InputFocus } from "./hooks";
import { ListOfItems } from "./hooks";
function App() {
  return (
    <GlobalProvider>
      <div className="text-red-500">hola</div>
      <CustomForm />
      <BookReader />
      <InputFocus />
      <ListOfItems />
    </GlobalProvider>
  );
}

export default App;
