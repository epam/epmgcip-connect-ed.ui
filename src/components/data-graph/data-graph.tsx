import cc from "classcat";
import "./data-graph.scss";

export interface DataGraphProps {
  url: string;
  className?: string;
}

export const DataGraph = ({ url, className }: DataGraphProps) => {
  return (
    <div className={cc(["data-graph", className])}>
      <iframe
        className="data-graph-frame"
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};
