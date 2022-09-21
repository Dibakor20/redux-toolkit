import { useDispatch, useSelector } from "react-redux";
import { tagSelected,tagRemoved } from "../../features/filter/FilterSlice";


export default function Tag({ tag }) {
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector((state) => state.filter);
    const isSelected = selectedTags.includes(tag.title) ? true : false;

    const style = isSelected
        ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(tag.title));
        } else {
            dispatch(tagSelected(tag.title));
        }
    };


    return (
        <div className={style} onClick={handleSelect}>
        {tag.title}
    </div>
    );
}

{
    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
