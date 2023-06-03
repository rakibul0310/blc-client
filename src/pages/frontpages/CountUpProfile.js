import React from "react";
import CountUp from "react-countup";
import CustomIcon from "../../componentes/Common/CustomIcon";
import { BiBookReader } from "react-icons/bi";
import {
  MdOutlineCoPresent,
  MdOutlineSentimentVerySatisfied,
  MdPeople,
} from "react-icons/md";

const CountUpProfile = () => {
  return (
    <section className="countup__section__container">
      <div className="countup__container">
        <div className="countup__item">
          <div className="item__icon__container">
            <CustomIcon className="react-icons-countup">
              <BiBookReader />
            </CustomIcon>
          </div>
          <div className="item__details__container">
            <h4 className="item__title">
              <CountUp
                startVal={0}
                end={7500}
                duration={5}
                delay={2}
                separator=","
                enableScrollSpy={true}
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              />
              +
            </h4>
            <span className="item__details">Courses</span>
          </div>
        </div>

        <div className="countup__item">
          <div className="item__icon__container">
            <CustomIcon className="react-icons-countup">
              <MdOutlineCoPresent />
            </CustomIcon>
          </div>
          <div className="item__details__container">
            <h4 className="item__title">
              <CountUp
                startVal={0}
                end={1500}
                duration={5}
                delay={2}
                separator=","
                enableScrollSpy={true}
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              />
              +
            </h4>
            <span className="item__details">Instructor</span>
          </div>
        </div>

        <div className="countup__item">
          <div className="item__icon__container">
            <CustomIcon className="react-icons-countup">
              <MdPeople />
            </CustomIcon>
          </div>
          <div className="item__details__container">
            <h4 className="item__title">
              <CountUp
                startVal={0}
                end={165000}
                duration={5}
                delay={2}
                separator=","
                enableScrollSpy={true}
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              />
              +
            </h4>
            <span className="item__details">Students</span>
          </div>
        </div>

        <div className="countup__item">
          <div className="item__icon__container">
            <CustomIcon className="react-icons-countup">
              <MdOutlineSentimentVerySatisfied />
            </CustomIcon>
          </div>
          <div className="item__details__container">
            <h4 className="item__title">
              <CountUp
                startVal={0}
                end={100}
                duration={5}
                delay={2}
                separator=","
                enableScrollSpy={true}
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              />
              %
            </h4>
            <span className="item__details">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountUpProfile;
