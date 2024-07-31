import { relative } from "path";
import { CSSProperties } from "react";

export default function Page({ params }: { params: { videosId: string } }) {
  const divStyle: CSSProperties = {
    position: "relative",
    paddingBottom: "56.25%",
    height: "0",
    overflow: "hidden",
  };

  let iframeStyle: CSSProperties = {
    width: "70%",
    height: "70%",
    position: "absolute",
    left: "50%",
    top: "0px",
    overflow: "hidden",
    margin: "0 auto",
    transform: "translateX(-50%)",
  };

  return (
    <div style={divStyle} className="">
      <iframe
        style={iframeStyle}
        src="https://www.dailymotion.com/embed/video/x92wmj2?autoplay=1"
        allowFullScreen
        title="ShowReell"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
