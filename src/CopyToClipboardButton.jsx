// CopyToClipboardButton.jsx
import React, { useRef } from "react";

const CopyToClipboardButton = () => {
  const textToCopyRef = useRef(null);

  const handleCopyClick = async () => {
    try {
      // Use the Clipboard API to write text to the clipboard
      await navigator.clipboard.writeText(textToCopyRef.current.value);
      console.log("Text copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
    }
  };

  return (
    <div className="clipboard">
      <p>Click to copy</p>
      <img
        className="copy-icon"
        src="./buttons/clipboard.png"
        alt=""
        onClick={handleCopyClick}
      />
    </div>
  );
};

export default CopyToClipboardButton;
