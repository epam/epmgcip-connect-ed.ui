import "./not-found.scss";

export interface NotFoundProps {
  title: string;
  description: string;
}

export const NotFound = ({ title, description }: NotFoundProps) => (
  <section className="not-found">
    <h1 className="not-found-title">{title}</h1>
    <p className="not-found-description">{description}</p>
  </section>
);
