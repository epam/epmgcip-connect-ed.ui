"use client";

import { useLayoutEffect } from "react";

export const HtmlLang = ({ lang }: { lang: string }) => {
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return null;
};
