import { useState } from "react";

export const TextInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Text Input"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};
