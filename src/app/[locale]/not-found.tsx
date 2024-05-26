"use client";

import Error from "next/error";

// eslint-disable-next-line import/no-default-export,react/function-component-definition
export default function NotFound() {
  return <Error statusCode={404} />;
}
