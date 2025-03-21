import { useState } from "react";
import { SelectedMovie } from "./SelectedMovie";

const formPage =
  "flex flex-col w-min-content w-120 h-min-content rounded-b-5xl bg-white shadow-xl my-10";
const movieSurveyHeader =
  "text-3xl font-bold bg-purple-600 text-white w-full p-6";
const formContainer = "flex flex-col gap-8 p-6 bg-white";
const inputContainer = "flex flex-col gap-2";
const primaryInputBox = "border border-gray-300 rounded-md p-2";
const textareaInputBox =
  "resize-y border border-gray-300 rounded-md p-2 w-full";
const resetButton =
  "bg-white border border-gray-300 hover:bg-gray-100 text-black py-2 px-4 rounded";
const submitButton = "bg-purple-500 text-white py-2 px-4 rounded";
const buttonContainer = "flex justify-between border-t border-gray-300 pt-6";

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

    if (name === "") {
      setError("โปรดใส่ชื่อของคุณ");
    } else {
      setError("");
    }

    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
      setError("โปรดใส่อีเมลของคุณ");
    } else if (!emailValidation.test(email)) {
      setError("รูปแบบอีเมลไม่ถูกต้อง");
    } else {
      setError("");
    }

    if (selectedOption === "") {
      setError("กรุณาเลือกหนังที่คุณชอบ");
    } else {
      setError("");
    }

    if (name !== "" && email !== "" && selectedOption !== "") {
      onSubmit({ name, email, comment, selectedOption });
    }
  };

  return (
    <div className={formPage} onSubmit={handleSubmit} onReset={handleReset}>
      <h1 className={movieSurveyHeader}>Movie Survey</h1>
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
          {error && <p className="text-red-600">{error}</p>}
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
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <div className={inputContainer}>
          {/* ส่ง selectedMovie และฟังก์ชันอัปเดตไปยัง SelectedMovie */}
          <SelectedMovie
            selectedOption={selectedOption}
            onChange={handleSelectedMovieChange}
          />
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
              รีเซ็ต
            </button>
          </div>
          <div>
            <button type="submit" className={submitButton}>
              ส่งแบบสำรวจ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
