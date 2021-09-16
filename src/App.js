import AddPaciente from "./components/AddPaciente";
import { ToastContainer } from "react-toastify";
import "./globalStyle/styles";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AddPaciente></AddPaciente>
    </div>
  );
}

export default App;
