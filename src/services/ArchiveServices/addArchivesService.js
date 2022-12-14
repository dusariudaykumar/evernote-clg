import axios from "axios";
import { toast } from "react-toastify";
const ARCHIVE_BASE_URL = process.env.REACT_APP_NOTES_APP_BASE_URL;

export const getAllArchiveNotesService = async (encodedToken) => {
  try {
    const { data } = await axios.get(`${ARCHIVE_BASE_URL}/archive`, {
      headers: {
        authorization: encodedToken,
      },
    });

    return data;
  } catch (error) {
    toast.error(error.response);
  }
};

export const deleteFromArchiveService = async (noteId, encodedToken) => {
  try {
    const { data } = await axios.delete(
      `${ARCHIVE_BASE_URL}/archive/${noteId}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const unArchiveService = async (noteId, encodedToken) => {
  try {
    const { data } = await axios.get(`${ARCHIVE_BASE_URL}/archive/${noteId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
