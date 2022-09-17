import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { fetchSingleVideo } from "../features/singleVideo/SingleVideoSlice";

export default function Video() {
    const dispatch = useDispatch();
    const {video,isLoading,isError,error} = useSelector((state)=>state.singleVideo)
    console.log(video)
    const {videoId} = useParams()

    const {id,title,link ,tags} = video;

    useEffect(() => {
       dispatch(fetchSingleVideo(videoId)) 
    }, [dispatch, videoId])
    
    let content = null;
    if (isLoading) content = <div className="col-span-12">Loading...</div>;
    if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;
  
    if (!isError && !isLoading && !video?.id) {
      content = <div className="col-span-12">No videos found!</div>;
    }
  
    if (!isError && !isLoading && video?.id) {
      content =  <div class="grid grid-cols-3 gap-2 lg:gap-8">
      <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer key={id} link={link} title={title} />

        <VideoDescription key={id} video={video} />
      </div>

          <RelatedVideoList currentVideoId={id} tags={tags} />
  </div>
    }
  
    

    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
               {content}
            </div>
        </section>
    );
}
