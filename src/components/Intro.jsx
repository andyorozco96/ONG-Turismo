import React from "react";
import videoBg from "../assets/videoInicio.mp4";

import style from "../scss/components/intro.module.scss";

function Intro() {
  return (
    <div className={style.main}>
      <div className={style.filter}></div>
      <div className={style.socialContainer}>
        <div className={style.socialBtn}>
          <a href="#carousel">
            <i class="uil uil-mountains"></i>
          </a>
        </div>
        <div className={style.socialBtn}>
          <a id="carousel">
            <i class="uil uil-share-alt"></i>
          </a>
        </div>
      </div>
      <video src={videoBg} autoPlay muted loop />
      <div className={style.content}>
        <h1>
          Welcome to <span className={style.primaryText}>nombre ONG</span>
        </h1>
        <div className={style.headerInfo}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            nostrum repudiandae architecto blanditiis et quod possimus.
            Reiciendis molestiae eius numquam? Magnam consequuntur recusandae
            enim exercitationem quos, officia nobis nesciunt fugiat?
          </p>
        </div>

        <div className={style.btnContainer}>
          <button>Conocer más</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
