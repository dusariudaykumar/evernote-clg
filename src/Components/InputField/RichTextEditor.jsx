import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [
      {
        color: [
          "#ffffff",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#000000",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
        ],
      },
    ],
    ["link"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["video"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "link",
  "blockquote",
  "code-block",
  "list",
  "color",
];
const RichTextEditor = ({ handleNoteBodyChange, body }) => {
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      onChange={handleNoteBodyChange}
      value={body}
      placeholder="Enter Note Body"
    />
  );
};

export default RichTextEditor;
