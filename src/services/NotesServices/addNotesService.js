import axios from "axios";
import { toast } from "react-toastify";
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
    toast.success("Created new note");
    return res;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
