import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchVideoLike, fetchVideoUnLike } from "../../features/singleVideo/SingleVideoSlice";



export default function LikeUnlike({ likes, unlikes, id }) {

    const dispatch = useDispatch();

    const likeHandler = (id) => {
        dispatch(fetchVideoLike(id))
    }
    const unLikeHandler = (id) => {
        dispatch(fetchVideoUnLike(id))
    }

    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block cursor-pointer" src={likeImage} alt="Like" onClick={()=>likeHandler(id)} />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block cursor-pointer" src={unlikeImage} alt="Unlike" onClick={()=>unLikeHandler(id)} />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
