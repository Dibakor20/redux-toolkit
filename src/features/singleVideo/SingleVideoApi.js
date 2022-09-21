import axios from "../../utils/Axios"

 export const getSingleVideo = async(id) => {
     const response = await axios.get(`/videos/${id}`)
     
     return response.data;
}

