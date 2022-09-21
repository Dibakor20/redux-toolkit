import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter} from "../../features/filter/FilterSlice";
import { fetchTags } from "../../features/tags/TagSlice";
import Tag from "./Tag";

export default function Tags() {
    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.tag)

    useEffect(() => {
       dispatch(fetchTags()) 
    }, [dispatch])
    
    const resetHandler = () => {
        dispatch(resetFilter())
    }

    return tags.length >0 ?(
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {
                    tags.map((tag) => <Tag key={tag.id} tag={tag} />)
                }
                <p className="cursor-pointer mx-auto px-5 lg:px-0 flex gap-2 border-b overflow-y-auto" onClick={resetHandler}>Reset Filter</p>
            </div>
            
        </section>
    ): null
}
