import axios from "axios";
import { toast } from "react-toastify";
export const addNotesService = (note, encodedToken) => {
  try {
    const res = axios.post(
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
    toast.error(error.response.data.errors[0]);
  }
};
