import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/c3gensocxlycahdog1pnfdpha5v9sfdw.js";

    document.body.appendChild(script);
  }, []);
};
