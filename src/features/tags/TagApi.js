import axios from "../../utils/Axios";

export const getTags = async () => {
    const response = await axios.get("/tags");

    return response.data;
};