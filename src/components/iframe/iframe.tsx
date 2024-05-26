import { IframeHTMLAttributes, useEffect, useRef } from "react";
import cc from "classcat";
import "./iframe.scss";

export interface IframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {}

export const Iframe = ({ className, ...delegatedProps }: IframeProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // useEffect(() => {
  //   const target = iframeRef.current?.contentDocument?.documentElement;
  //   const resizeObserver = new ResizeObserver(entries => {
  //     for (let entry of entries) {
  //       if (iframeRef.current) {
  //         iframeRef.current.style.height = `${entry.contentRect.height}px`;
  //       }
  //     }
  //   });
  //
  //   if (target) {
  //     resizeObserver.observe(target);
  //   }
  //
  //   // Cleanup on unmount
  //   return () => {
  //     resizeObserver.disconnect()
  //   }
  // }, []);

  useEffect(() => {
    const onMessageReceived = (
      event: MessageEvent<{ frameHeight: number }>,
    ) => {
      if (event.data.frameHeight && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.frameHeight}px`;
      }
    };

    window.addEventListener("message", onMessageReceived, false);

    // Clean up on un-mount
    return () => {
      window.removeEventListener("message", onMessageReceived, false);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className={cc(["iframe", className])}
      {...delegatedProps}
    />
  );
};
