import "boxicons";
import { useState } from "react";
import { SelectedMovie } from "./SelectedMovie";

export function FormPage({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateComment = (e) => setComment(e.target.value);
  const handleSelectedMovieChange = (value) => {
    setSelectedOption(value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setComment("");
    setSelectedOption("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let newErrors = { name: "", email: "", selectedOption: "" };
  
    let emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    newErrors.name = name?.trim() ? "" : "โปรดใส่ชื่อของคุณ";
    newErrors.email = email?.trim()
      ? emailValidation.test(email.trim())
        ? ""
        : "รูปแบบอีเมลไม่ถูกต้อง"
      : "โปรดใส่อีเมลของคุณ";
    newErrors.selectedOption = selectedOption ? "" : "กรุณาเลือกหนังที่คุณชอบ";
  
    setError(newErrors);
  
    if (!newErrors.name && !newErrors.email && !newErrors.selectedOption) {
      onSubmit({ name, email, comment, selectedOption });
    }
  };
    

  const formPage =
    "flex flex-col w-min-content w-120 h-min-content rounded-b-5xl bg-white shadow-xl my-10";
  const movieSurveyHeader =
    "flex flex-row items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-3xl font-bold bg-purple-600 text-white w-full p-6";
  const formContainer = "flex flex-col gap-8 p-6 bg-white";
  const inputContainer = "flex flex-col gap-2";
  const primaryInputBox = "border border-gray-300 rounded-md p-2";
  const textareaInputBox =
    "resize-y border border-gray-300 rounded-md p-2 w-full min-h-[100px]";
  const resetButton =
    "flex flex-row items-center gap-1 justify-center bg-white border border-gray-300 hover:bg-gray-100 text-black py-2 px-4 rounded";
  const submitButton =
    "flex flex-row items-center gap-2 justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded";
  const buttonContainer = "flex justify-between border-t border-gray-300 pt-6";

  return (
    <div className={formPage} onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <h1 className={movieSurveyHeader}>
          <box-icon name="film" color="white" size="md"></box-icon>Movie Survey
        </h1>
      </div>
      <form className={formContainer}>
        <div className={inputContainer}>
          <label htmlFor="name">
            ชื่อ <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="กรุณากรอกชื่อของคุณ"
            className={primaryInputBox}
            value={name}
            onChange={updateName}
          />
          {error && <p className="text-red-600">{error.name}</p>}
        </div>
        <div className={inputContainer}>
          <label htmlFor="email">
            อีเมล <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className={primaryInputBox}
            value={email}
            onChange={updateEmail}
          />
          {error && <p className="text-red-600">{error.email}</p>}
        </div>
        <div className={inputContainer}>
          {/* ส่ง selectedMovie และฟังก์ชันอัปเดตไปยัง SelectedMovie */}
          <SelectedMovie
            selectedOption={selectedOption}
            onChange={handleSelectedMovieChange}
          />
          {error && <p className="text-red-600">{error.selectedOption}</p>}
        </div>
        <div className={inputContainer}>
          <label>ความคิดเห็นเกี่ยวกับหนัง</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
            rows="4"
            cols="50"
            className={textareaInputBox}
            value={comment}
            onChange={updateComment}
          />
        </div>
        <div className={buttonContainer}>
          <div>
            <button type="reset" className={resetButton}>
              <box-icon name="repost"></box-icon>รีเซ็ต
            </button>
          </div>
          <div>
            <button type="submit" className={submitButton}>
              <box-icon name="send" flip="vertical" color="white"></box-icon>
              ส่งแบบสำรวจ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function SummaryPage({ data }) {
  const formPage =
    "flex flex-col w-min-content w-120 h-min-content rounded-b-5xl bg-white shadow-xl my-10";
  const movieSurveyHeader =
    "flex flex-row items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-3xl font-bold bg-purple-600 text-white w-full p-6";
  const summaryContainer =
    "flex flex-col gap-4 p-4 bg-green-50 border border-green-200 rounded-xl m-6";
  const buttonStyle =
    "bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition mx-6 mb-6";

  return (
    <>
      <div className={formPage}>
        <h1 className={movieSurveyHeader}>
          <box-icon name="film" color="white" size="md"></box-icon>Movie Survey
        </h1>
        <div className={summaryContainer}>
          <h4 className="flex flex-row gap-2 items-center text-lg text-green-900">
            <box-icon name="check-circle" color="green-900"></box-icon>
            ส่งแบบสำรวจสำเร็จ!
          </h4>
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-2 text-gray-500">
              <p>ชื่อ:</p>
              <p>อีเมล:</p>
              <p>หนังที่เลือก:</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p className="text-purple-700">{data.selectedOption}</p>
            </div>
          </div>
          {data.comment && (
            <div className="flex flex-col gap-2 border-t border-gray-300 pt-4">
              <p className="text-gray-500">ความคิดเห็น:</p>
              <p className="bg-gray-50 p-4">{data.comment}</p>
            </div>
          )}
        </div>
        <button
          className={buttonStyle}
          onClick={() => window.location.reload()}
        >
          <box-icon name="repost" color="white"></box-icon>ทำแบบสำรวจใหม่
        </button>
      </div>
    </>
  );
}
