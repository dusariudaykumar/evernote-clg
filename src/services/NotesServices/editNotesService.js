import axios from "axios";
import { toast } from "react-toastify";
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
    toast.info("Edited Notes");
    return resp;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
