// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

function BotpressWebchat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpress.init({
        botId: "d3aea06d-0f04-4701-bec3-b457caf79902",
        clientId: "4a509a94-22e6-41eb-8709-ea76189ff4dd",
        configuration: {
          color: "#FF5B8F",
          variant: "solid",
          themeMode: "light",
          fontFamily: "inter",
          radius: 1,          
        },
      });
    };
    document.body.appendChild(script);
  }, []);

}

export default BotpressWebchat;
