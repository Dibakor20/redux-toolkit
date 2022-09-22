import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchVideoReaction } from "../../features/singleVideo/SingleVideoSlice";



export default function LikeUnlike({ likes, unlikes, id }) {

  
    const dispatch = useDispatch();

    const reactionHandler = (id, reaction) => {
        // dispatch(fetchVideoReaction(id,reaction))
    }

    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={likeImage} alt="Like" onClick={()=>reactionHandler(id,'like')} />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
