import axios from "axios";
const TRASH_NOTES_BASE_URL = process.env.REACT_APP_NOTES_APP_BASE_URL;
export const getAllTrashNotes = async (encodedToken) => {
  try {
    const { data } = await axios.get(`${TRASH_NOTES_BASE_URL}/trash`, {
      headers: {
        authorization: encodedToken,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteFromTrashService = async (encodedToken, noteId) => {
  try {
    const { data } = await axios.delete(
      `${TRASH_NOTES_BASE_URL}/trash/${noteId}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const restoreFromTrashService = async (encodedToken, noteId) => {
  try {
    const { data } = await axios.get(
      `${TRASH_NOTES_BASE_URL}/trash/${noteId}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
