import React from "react";
import CustomLink from "../../componentes/Common/CustomLink";
import { AiOutlineNotification } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { GiPencilBrush, GiPerson } from "react-icons/gi";
import { SiBlockchaindotcom, SiTaichigraphics } from "react-icons/si";
import { TbSocial } from "react-icons/tb";
import CustomIcon from "../../componentes/Common/CustomIcon";
import { topCategories } from "../../fakeData/topCategories";

const icons = [
  <AiOutlineNotification />,
  <GoBrowser />,
  <GiPencilBrush />,
  <GiPerson />,
  <SiBlockchaindotcom />,
  <TbSocial />,
  <SiTaichigraphics />,
];
const TopCatagories = () => {
  return (
    <section className="section__container">
      <div className="top__categories__container">
        <div className="top__categories__heding__container">
          <h2>Top Categories</h2>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </div>
        <div className="categories__container">
          {topCategories.map((c, i) => (
            <div className="category" key={i}>
              <CustomLink>
                <div
                  className={`category__icon__container ct${c.iconClasName}`}
                >
                  <CustomIcon className={`ci${c.iconClasName}`}>
                    {icons[i]}
                  </CustomIcon>
                </div>
                <div className="category__body__container">
                  <h4 className="category__title">{c.title}</h4>
                  <span className="category__details">{c.totalCourse}</span>
                </div>
              </CustomLink>
            </div>
          ))}
          {/* <div className="category">
            <CustomLink>
              <div className="category__icon__container ct__digital__marketing">
                <CustomIcon className="ci_digital_marketing">
                  <SiTaichigraphics />
                </CustomIcon>
              </div>
              <div className="category__body__container">
                <h4 className="category__title">Digital Marketing</h4>
                <span className="category__details">2 Courses</span>
              </div>
            </CustomLink>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopCatagories;
