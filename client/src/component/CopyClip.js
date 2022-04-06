import React, { useState } from "react";
import CopyLinkIcon from "./CopyLinkIcon";

const CopyClip = (props) => {
  const [copySuccess, setCopySuccess] = useState("");

  // your function to copy here

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div>
      <CopyLinkIcon onClick={() => copyToClipBoard(props.url)}>
        Cliped Link
      </CopyLinkIcon>
      {/* after copying see the message here */}
      {copySuccess}
    </div>
  );
};

export default CopyClip;
