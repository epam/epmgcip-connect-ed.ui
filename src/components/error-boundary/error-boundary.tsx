import { Component, ErrorInfo, ReactNode } from "react";
import { Title } from "@/components/title/title.tsx";
import { Typography } from "@/components/typography/typography.tsx";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const {
      state: { hasError },
      props: { children },
    } = this;

    if (hasError) {
      return (
        // TODO: Ask designer about component
        <section>
          <Title as="h1">Oops, something went wrong</Title>
          <Typography>There are some issues while loading the page</Typography>
        </section>
      );
    }

    return children;
  }
}
