import "./App.css";
import { useState } from "react";
import { FormPage } from "./components/FormPage";
import { SummaryPage } from "./components/SummaryPage";

const bodyStyle =
  "flex flex-col justify-center items-center min-h-screen bg-gray-200";

  
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className={bodyStyle}>
      {isSubmitted ? (
        <SummaryPage data={formData} />
      ) : (
        <FormPage onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
