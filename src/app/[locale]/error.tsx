"use client"; // Error components must be Client Components

// eslint-disable-next-line react/function-component-definition,import/no-default-export
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
