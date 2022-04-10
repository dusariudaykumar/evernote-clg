import axios from "axios";
export const editNotesService = async (editnotes, encodedToken) => {
  try {
    const resp = await axios.post(
      `/api/notes/${editnotes._id}`,
      { note: editnotes },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return resp;
  } catch (error) {
    console.log(error.message);
  }
};
