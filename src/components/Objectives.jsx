import React from "react";
import style from "../scss/components/objectives.module.scss";

function Objectives() {
  return (
    <div id="objectives" className={style.main}>
      <div className={style.cardsContainer}>
        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/590798/pexels-photo-590798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className={style.cardInfo}>
            <i class="uil uil-home"></i>
            <span>Objective 1</span>
          </div>
          <div className={style.cardLayout}></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className={style.cardInfo}>
            <i class="uil uil-comment-heart"></i>
            <span>Objective 2</span>
          </div>
          <div className={style.cardLayout}></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5064872/pexels-photo-5064872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className={style.cardInfo}>
            <i class="uil uil-share-alt"></i>
            <span>Objective 3</span>
          </div>
          <div className={style.cardLayout}></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/24698/pexels-photo-24698.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className={style.cardInfo}>
            <i class="uil uil-rocket"></i>
            <span>Objective 4</span>
          </div>
          <div className={style.cardLayout}></div>
        </div>
      </div>
      <div className={style.textContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra.
        </p>
        <p>
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc, a?
          <span className={style.author}>
            Jonh Doe
            <span>Founder and CEO</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Objectives;
