import axios from "axios";
export const deleteNotesService = async (notesId, encodedToken) => {
  try {
    const resp = await axios.delete(`/api/notes/${notesId}`, {
      headers: { authorization: encodedToken },
    });
    return resp;
  } catch (error) {
    console.log(error.message);
  }
};
