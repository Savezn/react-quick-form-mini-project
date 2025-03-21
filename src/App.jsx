import "./App.css";
import { FormPage } from "./components/FormPage";
import { SummaryPage } from "./components/SummaryPage";

const bodyStyle = "flex flex-col justify-center items-center h-screen bg-gray-200";

function App() {
  return (
    <div className={bodyStyle}>
      <FormPage />
      <SummaryPage />
    </div>
  );
}

export default App;
