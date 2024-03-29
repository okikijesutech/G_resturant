import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molesite. Condimentum volutpat
        morbi facillisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type='button' className='custom__buttom'>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='' />
    </div>
  </div>
);

export default Header;
