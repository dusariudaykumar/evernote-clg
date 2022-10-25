import { Box, Modal } from "@mui/material";

import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#202124",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const InputModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <ReactTextareaAutosize
            className="notes-body"
            name="body"
            placeholder="Notes....."
            // rows={isExpanded ? 3 : 1}
            // value={body}
            // onClick={expandHandler}
            // onChange={changeHandler}
          />
        </Box>
      </Modal>
    </>
  );
};

export default InputModal;
