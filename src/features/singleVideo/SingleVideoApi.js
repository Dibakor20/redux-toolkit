import axios from "../../utils/Axios";

export const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};


// export const updateReaction = async ({id,reaction}) => {
//   const { data } = await axios.get(`/videos/${id}`);

//   if (data) {
//     let reactionCount = 
//       reaction === 'like' ? {
//         likes: data.likes + 1
//       } : {
//       unlikes:data.unlikes +1 
//       }
//      const response = await axios.get(`/videos/${id}`,reactionCount);
//     return response.data
//   }
// }