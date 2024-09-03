"use client";
import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const loadScript = () => {
      // Create a script element
      const script = document.createElement("script");

      // Set the JivoChat script source
      script.src = "//code.tidio.co/bjq9wyuabntsqicx0rjk3muidb3v7y1r.js";
      script.async = true;

      // Append the script to the body of the document
      document.body.appendChild(script);
    };

    // Load the JivoChat script synchronously
    loadScript();
  }, []); // Empty dependency array to run the effect only once on mount

  return null; // JivoChat widget will be injected into the DOM, so this component doesn't need to render anything
};

