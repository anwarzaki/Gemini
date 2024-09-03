import { createContext, useState } from "react";
import run from "../config/gemini";

const Context = createContext(); // Call createContext as a function

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    // let response;
    // if (prompt != null) {
    //   response = await run(prompt);
    //   setRecentPrompt(prompt);
    // } else {
    //   setPreviousPrompt((prev) => [...prev, input]);
    //   setRecentPrompt(input);
    //   response = await run(input);
    // }
    setRecentPrompt(input);
    setPreviousPrompt((prev) => [...prev, input]);
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  // onSent("how are you?");

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  }; // Define your context value here

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export { ContextProvider, Context };
//hnji
