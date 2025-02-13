import storyVideo from "../assets/story.mp4";

const VideoPlayer = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <video
        width="100%"
        height="auto"
        autoPlay
        muted
        loop
        playsInline
        style={{ display: "block" }}
      >
        <source src={storyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
