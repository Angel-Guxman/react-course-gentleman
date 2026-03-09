import { CustomForm } from "./components";
import { GlobalProvider } from "./context";
function App() {
  return (
    <GlobalProvider>
      <div className="text-red-500">hola</div>
      <CustomForm />
    </GlobalProvider>
  );
}

export default App;
