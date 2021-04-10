import { useState } from "react";
import React from 'react';
import "./App.css";

var emojiMeanings = {
  "😀": "Grinning Face",
  "😃": "Smiling Face With Open Mouth",
  "😄": "Smiling Face With Open Mouth And Smiling Eyes",
  "😁": "Grinning Face With Smiling Eyes",
  "😂": "Face With Tears of Joy",
  "😍": "Smiling with Heart-eyes",
  "🤗": "Hugging Face",
  "🍕":  "pizza slice",
  "🍟": "Fries",
  "🍏": "Green Apple",
  "🍎": "Red Apple"
};

var emojisWeKnow = Object.keys(emojiMeanings);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [likeCounter, setLikeCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  function likeClickHandler() {
    
    setLikeCounter(likeCounter + 1);
  }
  

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiMeanings[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiMeanings[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      
      <input onChange={emojiInputHandler}></input>
      <h2>Meaning </h2>
      <h3> {meaning} </h3>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}