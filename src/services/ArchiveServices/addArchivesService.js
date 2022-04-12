import axios from "axios";
import { toast } from "react-toastify";

export const addArchiveService = async (note, encodedToken) => {
  try {
    const resp = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    toast.success("Note archived");
    return resp;
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
