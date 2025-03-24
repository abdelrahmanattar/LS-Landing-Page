import React, { useRef, useEffect } from "react";
import "./VideoBackground.css"; // Ensure you have this CSS file

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.error("Video play error:", error));
    }
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop 
        muted
        playsInline
        className="background-video"
      >
        <source src="videos/DataStream.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
