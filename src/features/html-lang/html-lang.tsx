"use client";

import { useEffect } from "react";

export const HtmlLang = ({ lang }: { lang: string }) => {
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return null;
};
