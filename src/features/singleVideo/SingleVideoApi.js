import axios from "../../utils/Axios";

export const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};


export const updateLike = async (id) => {
  const { data } = await axios.get(`/videos/${id}`);

  if (data) {
    const response = await axios.patch(`/videos/${id}`, {
      likes: data.likes + 1,
     });
    return response.data
  }
}

export const updateUnLikes = async (id) => {
  const { data } = await axios.get(`/videos/${id}`);

  if (data) {
    const response = await axios.patch(`/videos/${id}`, {
      unlikes: data.unlikes + 1,
     });
    return response.data
  }
}