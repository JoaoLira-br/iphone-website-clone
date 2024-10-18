
import gsap from "gsap";
import { hightlightsSlides } from "../constants";
import { useEffect, useState, useRef} from "react";

const VideoCarousel = () => {
    // like a state hook but does not trigger re-rendering
const videoRef = useRef([]);
const videoSpanRef = useRef([]);
const videoDivRef = useRef([]);

const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
})
const [loadedData, setLoadedData] = useState([])
// this makes it easy to access video props without having to video.prop everytime
const {
    isEnd, isLastVideo, startPlay, videoId,isPlaying
} = video

useEffect(() => {
    if(loadedData.length > 3){
        if(!isPlaying) {
            videoRef.current[video.id].pause()
        }else{
            startPlay && videoRef.current[videoId].play()
        }
    }
}, [startPlay, videoId, isPlaying, loadedData])
useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if(span[videoId]){
        //animate
        let anim = gsap.to(span[videoId], {
            onUpdate: () => {

            },
            onComplete: () => {

            }
        })
    }
}, [videoId, startPlay])
  return (
    <>
      <div className="flex items-center">
         {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  src={list.video}
                  ref={(el) => {
                    videoRef.current[i] = el
                  }}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                        ...prevVideo, isPlaying: true
                    }))
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>

         ))} 
      </div>
      <div ></div>
    </>
  );
};

export default VideoCarousel;
