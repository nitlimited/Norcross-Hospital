import { useEffect, useState } from "react";

// Returns "loading" | "ready" | "missing" for a given image URL.
// Used to detect whether the client has dropped a real 360 photo in yet.
export default function useImageStatus(src) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    const img = new Image();
    img.onload = () => !cancelled && setStatus("ready");
    img.onerror = () => !cancelled && setStatus("missing");
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return status;
}
