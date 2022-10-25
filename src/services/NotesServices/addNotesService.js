import axios from "axios";
import { toast } from "react-toastify";
const NOTES_BASE_URL = process.env.REACT_APP_NOTES_APP_BASE_URL;
export const addNotesService = (note, encodedToken) => {
  const { title, body, bgcolor } = note;
  console.log(encodedToken);
  try {
    const res = axios.post(
      `${NOTES_BASE_URL}/notes/create`,
      { title, bgcolor, body },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
  }
};
export const getAllNotesSevice = async (encodedToken) => {
  try {
    const response = await axios.get(`${NOTES_BASE_URL}/notes`, {
      headers: {
        authorization: encodedToken,
      },
    });
    return response;
  } catch (error) {
    toast.error(error.response);
  }
};

export const editNotesService = async (editnotes, encodedToken) => {
  const { title, body, bgcolor } = editnotes;
  try {
    const resp = await axios.patch(
      `${NOTES_BASE_URL}/notes/${editnotes._id}`,
      { title, body, bgcolor },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    toast.info("Edited Notes");
    console.log(resp, "resp");
    return resp;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteNotesService = async (notesId, encodedToken) => {
  console.log(notesId);
  try {
    const { data } = await axios.delete(`${NOTES_BASE_URL}/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    if (data.success) {
      toast.success("Note deleted");
    }
    return data;
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const addToArchiveNotesService = async (notesId, encodedToken) => {
  try {
    const { data } = await axios.get(`${NOTES_BASE_URL}/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    if (data.success) {
      toast.success("Notes archived");
    }
    return data;
  } catch (error) {
    toast.error(error.response.data);
  }
};
