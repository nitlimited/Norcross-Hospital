import { useEffect, useState } from "react";
import { contact as fallbackContact } from "../data/content.js";
import { loadPublicContent } from "../lib/api.js";

const fallback = {
  contact: fallbackContact,
  announcement: {
    enabled: false,
    title: "",
    body: "",
  },
};

export function usePublicContent() {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    let cancelled = false;

    loadPublicContent()
      .then((data) => {
        if (!cancelled) {
          setContent({ ...fallback, ...data });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContent(fallback);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return content;
}
