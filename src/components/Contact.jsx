import React from "react";
import contactImg from "../assets/contact us.png";
import style from "../scss/components/contact.module.scss";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div id="contact" className={style.main}>
      <div className={style.left}>
        <h3>¡Contáctanos!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quae
          nesciunt aspernatur quas ullam explicabo, asperiores voluptatem
          officia nam esse quibusdam earum sequi! Aperiam perferendis doloremque
          tempore iure earum repellat.
        </p>

        <ContactForm />
        <div className={style.socialCont}>
          <h4>Nuestras redes sociales</h4>
          <a className={style.socialItem} href="" target="_blank">
            <div>
              <span>@Usuario</span>
              <i class="uil uil-instagram"></i>
            </div>
          </a>
          <a className={style.socialItem} href="" target="_blank">
            <div>
              <span>/usuario</span>
              <i class="uil uil-youtube"></i>
            </div>
          </a>
          <a className={style.socialItem} href="" target="_blank">
            <div>
              <span>/usuario.apellido</span>
              <i class="uil uil-facebook"></i>
            </div>
          </a>
          <a className={style.socialItem} href="" target="_blank">
            <div>
              <span>@Usuario.ej</span>
              <i class="uil uil-twitter"></i>
            </div>
          </a>

          <a
            className={style.socialItem}
            href="https://walink.co/52e2d5"
            target="_blank"
          >
            <div>
              <span>¡Escríbenos!</span>
              <i class="uil uil-whatsapp"></i>
            </div>
          </a>
        </div>
      </div>

      <div className={style.right}>
        <div className={style.imgBg}></div>
        <img
          className={style.rightImg}
          src={contactImg}
          alt="contact-us image"
        />
      </div>
    </div>
  );
}

export default Contact;
