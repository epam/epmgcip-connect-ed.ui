import { Spinner } from "@/components/spinner/spinner.tsx";
import "./loading-section.scss";

export const LoadingSection = () => (
  <div className="loading-section">
    <Spinner />
  </div>
);
