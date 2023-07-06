import "./AgentImg.css";

export interface AgentImgProps {
  alt: string;
  src: string;
  /**
   * Blur the image
   */
  secretMode?: boolean;
}

export function AgentImg(props: AgentImgProps) {
  const { src, alt } = props;

  return (
    <div className="w-72">
      <img
        className="w-full object-center rounded-sm agent-img"
        src={src}
        alt={alt}
      />
    </div>
  );
}
