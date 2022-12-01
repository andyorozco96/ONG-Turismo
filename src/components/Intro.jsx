import React from "react";
import videoBg from "../assets/videoInicio2.mp4";
import logo from "../assets/logo.png";
import style from "../scss/components/intro.module.scss";

function Intro() {
  return (
    <div className={style.main}>
      <div className={style.socialContainer}>
        <div className={style.socialBtn}>
          <a href="#carousel">
            <i class="uil uil-images"></i>
          </a>
        </div>
        <div className={style.socialBtn}>
          <a href="#objectives">
            <i class="uil uil-cell"></i>
          </a>
        </div>
        <div className={style.socialBtn}>
          <a href="#contact">
            <i class="uil uil-telegram-alt"></i>
          </a>
        </div>
      </div>
      <div className={style.filter}></div>
      <video src={videoBg} autoPlay muted loop />
      <div className={style.content}>
        <div className={style.logoCont}>
          <img src={logo} alt="" />
        </div>
        <h1>
          Bienvenido a <b className={style.primaryText}>Insertar Nombre</b>
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
          <a className={style.btnPrimary} href="#contact">
            Conocer más
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
