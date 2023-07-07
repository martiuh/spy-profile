import cn from "classnames";
import "./AgentImg.css";
import { useEffect, useState } from "react";

export interface AgentImgProps {
  alt: string;
  src: string;
  /**
   * Blur the image
   */
  secretMode?: boolean;
}

export function AgentImg(props: AgentImgProps) {
  const [loaded, setLoaded] = useState(false);

  const { src, alt } = props;

  function handleLoad() {
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="w-72">
      <img
        onLoad={handleLoad}
        className={cn(
          `w-full object-center rounded-sm agent-img grayscale`,
          !loaded && "loading"
        )}
        src={src}
        alt={alt}
      />
    </div>
  );
}
