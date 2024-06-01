"use client"; // Error components must be Client Components

import { Button } from "@/components/button/button.tsx";
import { Title } from "@/components/title/title.tsx";

// eslint-disable-next-line import/no-default-export,react/function-component-definition
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <Title as="h2">Something went wrong!</Title>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
