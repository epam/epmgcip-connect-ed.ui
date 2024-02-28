import { Component, ErrorInfo, ReactNode } from "react";

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
          <h1>Oops, something went wrong</h1>
          <p>There are some issues while loading the page</p>
        </section>
      );
    }

    return children;
  }
}
