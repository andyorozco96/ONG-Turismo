import React, { useEffect, useState } from "react";
import style from "../scss/components/objectives.module.scss";

function Objectives() {
  const [objective, setObjective] = useState({
    objective1: true,
    objective2: false,
    objective3: false,
    objective4: false,
  });

  function handleClick(e) {
    setObjective({
      objective1: false,
      objective2: false,
      objective3: false,
      objective4: false,
      [e.target.id]: true,
    });
  }

  useEffect(() => {
    if (
      !objective.objective1 &&
      !objective.objective2 &&
      !objective.objective3 &&
      !objective.objective4
    ) {
      setObjective({
        objective1: true,
        objective2: false,
        objective3: false,
        objective4: false,
      });
    }
  }, [objective]);

  return (
    <div id="objectives" className={style.main}>
      <div className={style.cardsContainer}>
        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/590798/pexels-photo-590798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          id="objective1"
          onMouseOver={(e) => handleClick(e)}
        >
          <div
            className={style.cardInfo}
            id="objective1"
            onMouseOver={(e) => handleClick(e)}
          >
            <i class="uil uil-home"></i>
            <span>Objective 1</span>
          </div>
          <div
            className={style.cardLayout}
            id="objective1"
            onMouseOver={(e) => handleClick(e)}
          ></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          id="objective2"
          onMouseOver={(e) => handleClick(e)}
        >
          <div
            className={style.cardInfo}
            id="objective2"
            onMouseOver={(e) => handleClick(e)}
          >
            <i class="uil uil-comment-heart"></i>
            <span>Objective 2</span>
          </div>
          <div
            className={style.cardLayout}
            id="objective2"
            onMouseOver={(e) => handleClick(e)}
          ></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5064872/pexels-photo-5064872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          id="objective3"
          onMouseOver={(e) => handleClick(e)}
        >
          <div
            className={style.cardInfo}
            id="objective3"
            onMouseOver={(e) => handleClick(e)}
          >
            <i class="uil uil-share-alt"></i>
            <span>Objective 3</span>
          </div>
          <div
            className={style.cardLayout}
            id="objective3"
            onMouseOver={(e) => handleClick(e)}
          ></div>
        </div>

        <div
          className={style.card}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/24698/pexels-photo-24698.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          id="objective4"
          onMouseOver={(e) => handleClick(e)}
        >
          <div
            className={style.cardInfo}
            id="objective4"
            onMouseOver={(e) => handleClick(e)}
          >
            <i class="uil uil-rocket"></i>
            <span>Objective 4</span>
          </div>
          <div
            className={style.cardLayout}
            id="objective4"
            onMouseOver={(e) => handleClick(e)}
          ></div>
        </div>
      </div>
      <div className={style.textSection}>
        <div className={style.textLayout}>
          {" "}
          <div className={style.textContainer}>
            <div
              className={`${style.text} ${
                objective.objective1 ? style.show : style.hidden
              }`}
              // style={
              //   objective.objective1
              //     ? { visibility: "hidden" }
              //     : { visibility: "visible" }
              // }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra.
              </p>
              <p>
                quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunca?
                <span className={style.author}>
                  Jonh Doe
                  <span>Founder and CEO</span>
                </span>
              </p>
            </div>
            <div
              className={`${style.text} ${
                objective.objective2 ? style.show : style.hidden
              }`}
            >
              <p>
                Quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
                a?
                <span className={style.author}>
                  Jonh Doe
                  <span>Founder and CEO</span>
                </span>
              </p>
            </div>
            <div
              className={`${style.text} ${
                objective.objective3 ? style.show : style.hidden
              }`}
            >
              <p>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which
                toil."
                <span className={style.author}>
                  Jonh Doe
                  <span>Founder and CEO</span>
                </span>
              </p>
            </div>
            <div
              className={`${style.text} ${
                objective.objective4 ? style.show : style.hidden
              }`}
            >
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet"
                <span className={style.author}>
                  Jonh Doe
                  <span>Founder and CEO</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
