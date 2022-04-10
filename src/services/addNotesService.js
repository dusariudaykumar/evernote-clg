import axios from "axios";
export const addNotesService = async (note, encodedToken) => {
  try {
    const res = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
