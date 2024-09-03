// import React, { useContext } from "react";
// import "./Main.css";
// import { Context } from "../../src/context/Context";
// import Markdown from "react-markdown";

// function Main() {
//   const {
//     previousPrompt,
//     setPreviousPrompt,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput,
//   } = useContext(Context);

//   const MarkDownData = resultData;

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src="./img/zaki-img.jpg" alt="Profile" />
//       </div>
//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p>
//                 <span>Hello, Zaki.</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//             <div className="cards">
//               <div className="card">
//                 <p>Suggest beautiful places to see on an upcoming road trip</p>
//                 <img src="./img/compass-img.png" alt="Compass" />
//               </div>
//               <div className="card">
//                 <p>Quiz me about science fiction movies</p>
//                 <img src="./img/bulb-img.png" alt="Bulb" />
//               </div>
//               <div className="card">
//                 <p>Draft an email to my recruiter to accept a job offer</p>
//                 <img src="./img/comment-img.png" alt="Comment" />
//               </div>
//               <div className="card">
//                 <p>
//                   Give tips on how to take and manage the class notes easily
//                 </p>
//                 <img src="./img/code-img.png" alt="Code" />
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="result">
//             <div className="result-title">
//               <img
//                 className="result-title-img"
//                 src="./img/zaki-img.jpg"
//                 alt="Profile"
//               />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src="./img/gemini-img.png" alt="Gemini" />
//               {loading ? (
//                 <div className="loader">
//                   <hr />
//                   <hr />
//                   <hr />
//                 </div>
//               ) : (
//                 <Markdown>{MarkDownData}</Markdown>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt here"
//             />
//             <img src="./img/gallery_img.png" alt="Gallery" />
//             <img src="./img/recording-img.png" alt="Recording" />
//             {input ? (
//               <img onClick={onSent} src="./img/send-img.png" alt="Send" />
//             ) : null}
//           </div>
//           <div className="bottom-info">
//             <p>
//               Gemini may display inaccurate info, including about people, so
//               double-check its responses.
//               <u>Your privacy and Gemini Apps</u>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// // hanji
// export default Main;

// import React, { useContext } from "react";
// import "./Main.css";
// import { Context } from "../../src/context/Context";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/default.css"; // Import the highlight.js theme

// function Main() {
//   const {
//     previousPrompt,
//     onSent,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput,
//   } = useContext(Context);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src="./img/zaki-img.jpg" alt="Profile" />
//       </div>
//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p>
//                 <span>Hello, Zaki.</span>
//               </p>
//               <p>How can I help you today?</p>
//             </div>
//             <div className="cards">
//               <div className="card">
//                 <p>Suggest beautiful places to see on an upcoming road trip</p>
//                 <img src="./img/compass-img.png" alt="Compass" />
//               </div>
//               <div className="card">
//                 <p>Quiz me about science fiction movies</p>
//                 <img src="./img/bulb-img.png" alt="Bulb" />
//               </div>
//               <div className="card">
//                 <p>Draft an email to my recruiter to accept a job offer</p>
//                 <img src="./img/comment-img.png" alt="Comment" />
//               </div>
//               <div className="card">
//                 <p>Give tips on how to take and manage class notes easily</p>
//                 <img src="./img/code-img.png" alt="Code" />
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="result">
//             <div className="result-title">
//               <img
//                 className="result-title-img"
//                 src="./img/zaki-img.jpg"
//                 alt="Profile"
//               />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src="./img/gemini-img.png" alt="Gemini" />
//               {loading ? (
//                 <div className="loader">
//                   <hr />
//                   <hr />
//                   <hr />
//                 </div>
//               ) : (
//                 <ReactMarkdown
//                   remarkPlugins={[remarkGfm]}
//                   rehypePlugins={[rehypeHighlight]}
//                 >
//                   {resultData}
//                 </ReactMarkdown>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt here"
//             />
//             <img src="./img/gallery_img.png" alt="Gallery" />
//             <img src="./img/recording-img.png" alt="Recording" />
//             {input ? (
//               <img onClick={onSent} src="./img/send-img.png" alt="Send" />
//             ) : null}
//           </div>
//           <div className="bottom-info">
//             <p>
//               Gemini may display inaccurate info, including about people, so
//               double-check its responses.
//               <u>Your privacy and Gemini Apps</u>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;

import React, { useContext } from "react";
import "./Main.css";
import { Context } from "../../src/context/Context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/default.css"; // Import the highlight.js theme
import { FaCopy } from "react-icons/fa"; // Import the copy icon

function Main() {
  const {
    previousPrompt,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  // Function to copy the response to the clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(resultData)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="./img/zaki-img.jpg" alt="Profile" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Zaki.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src="./img/compass-img.png" alt="Compass" />
              </div>
              <div className="card">
                <p>Quiz me about science fiction movies</p>
                <img src="./img/bulb-img.png" alt="Bulb" />
              </div>
              <div className="card">
                <p>Draft an email to my recruiter to accept a job offer</p>
                <img src="./img/comment-img.png" alt="Comment" />
              </div>
              <div className="card">
                <p>Give tips on how to take and manage class notes easily</p>
                <img src="./img/code-img.png" alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                className="result-title-img"
                src="./img/zaki-img.jpg"
                alt="Profile"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <div className="result-header">
                <img src="./img/gemini-img.png" alt="Gemini" />
                <FaCopy
                  onClick={handleCopy}
                  className="copy-icon"
                  title="Copy to clipboard"
                />
              </div>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {resultData}
                </ReactMarkdown>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <img src="./img/gallery_img.png" alt="Gallery" />
            <img src="./img/recording-img.png" alt="Recording" />
            {input ? (
              <img onClick={onSent} src="./img/send-img.png" alt="Send" />
            ) : null}
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses.
              <u>Your privacy and Gemini Apps</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
