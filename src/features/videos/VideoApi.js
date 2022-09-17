import axios from "../../utils/Axios";

export const getVideos = async () => {
    const response = await axios.get("/videos");

    return response.data;
};