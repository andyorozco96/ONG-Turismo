import React, { useEffect } from "react";
import style from "../scss/components/socialmedia.module.scss";

function SocialMedia() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={style.main}>
      <h4 className={style.socialTitle}>
        ¡Dale un vistazo a <b>nuestra actividad</b> en redes!
      </h4>
      <div className={style.feedsContainer}>
        <div className={style.twitterCont}>
          <h4>Twitter</h4>
          <a
            class="twitter-timeline"
            href="https://twitter.com/TeamMessi?ref_src=twsrc%5Etfw"
            data-width="500px"
            data-height="500px"
            data-tweet-limit="10"
          >
            Tweets by OrozcoAndres1
          </a>{" "}
        </div>
        <div className={style.instagramContainer}>
          <h4>Instagram</h4>
          <figure data-behold-id="37En3C3l4j1ewyUdwW3s"></figure>
        </div>
      </div>
    </div>
  );
}
export default SocialMedia;
