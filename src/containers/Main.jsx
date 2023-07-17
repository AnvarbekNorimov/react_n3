import { Sort, Filter } from "../assets/css/icon";
import {
  Dropdown,
  Moreimg,
  Arrovleft,
  Arrovright,
} from "../components/Mainboximg";
import {} from "../containers/main.scss";

import Tom from "../assets/images/img/tom.png";
import Matt from "../assets/images/img/matt.png";
import Robert from "../assets/images/img/robert.png";
import Christian from "../assets/images/img/christian.png";
import Henry from "../assets/images/img/henry.png";
import Chris from "../assets/images/img/chris.png";
import Sam from "../assets/images/img/sam.png";
import Steve from "../assets/images/img/steve.png";

import High from "../assets/images/icon/high.svg";
import Low from "../assets/images/icon/low.svg";
import Normal from "../assets/images/icon/normal.svg";

const Main = () => {
  return (
    <div className="card_boxs">
      <div className="tickets">
        <h3 className="tickets__text">All tickets</h3>
        <div className="tickets__title">
          <Sort />
          <span className="tickets__title-title">Sort</span>
          <Filter />
          <span className="tickets__title-subtitle">Filter</span>
        </div>
      </div>
      <div className="mainboxs__title">
        <p className="Mainbox__subtitle title1">Ticket details</p>
        <p className="Mainbox__subtitle title2 ">Customer name</p>
        <p className="Mainbox__subtitle title3 ">Date</p>
        <p className="Mainbox__subtitle title4">Priority</p>
      </div>
      <div className="cardbox">
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Tom} alt="" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">Contact Email not Linked</h3>
              <p className="Mainbox__title">Updated 1 day ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Tom Cruise</h3>
            <p className="Mainbox__title">on 24.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 26, 2019</h3>
            <p className="Mainbox__title">6:30 PM</p>
          </div>

          <span className="main__icon">
            <img src={High} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Matt} alt="" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">
                Adding Images to Featured Posts
              </h3>
              <p className="Mainbox__title">Updated 1 day ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Matt Damon</h3>
            <p className="Mainbox__title">on 24.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 26, 2019</h3>
            <p className="Mainbox__title">8:00 AM</p>
          </div>

          <span className="main__icon">
            <img src={Low} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Robert} alt="" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">
                When will I be charged this month?
              </h3>
              <p className="Mainbox__title">Updated 1 day ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Robert Downey</h3>
            <p className="Mainbox__title">on 24.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 26, 2019</h3>
            <p className="Mainbox__title">7:30 PM</p>
          </div>

          <span className="main__icon">
            <img src={High} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Christian} alt="Christian" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">Payment not going through</h3>
              <p className="Mainbox__title">Updated 2 days ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Christian Bale</h3>
            <p className="Mainbox__title">Christian Bale</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 25, 2019</h3>
            <p className="Mainbox__title">5:00 PM</p>
          </div>

          <span className="main__icon">
            <img src={Normal} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Henry} alt="Christian" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">Unable to add replies</h3>
              <p className="Mainbox__title">Updated 2 days ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Henry Cavil</h3>
            <p className="Mainbox__title">on 24.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 25, 2019</h3>
            <p className="Mainbox__title">4:00 PM</p>
          </div>

          <span className="main__icon">
            <img src={High} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Chris} alt="Christian" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">Downtime since last week</h3>
              <p className="Mainbox__title">Updated 3 days ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Chris Evans</h3>
            <p className="Mainbox__title">on 23.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 25, 2019</h3>
            <p className="Mainbox__title">2:00 PM</p>
          </div>

          <span className="main__icon">
            <img src={Normal} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Sam} alt="Christian" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">Referral Bonus</h3>
              <p className="Mainbox__title">Updated 4 day ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Sam Smith</h3>
            <p className="Mainbox__title">on 22.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 25, 2019</h3>
            <p className="Mainbox__title">11:30 AM</p>
          </div>

          <span className="main__icon">
            <img src={Low} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="mainbox">
          <div className="mainbox__avatar">
            <img src={Steve} alt="Christian" />
            <div className="Mainbox__avatar-text">
              <h3 className="Mainbox__textera">How do I change my password?</h3>
              <p className="Mainbox__title">Updated 6 days ago</p>
            </div>
          </div>

          <div className="name_text">
            <h3 className="Mainbox__textera">Steve Rogers</h3>
            <p className="Mainbox__title">on 21.05.2019</p>
          </div>

          <div>
            <h3 className="Mainbox__textera">May 24, 2019</h3>
            <p className="Mainbox__title">1:00 PM</p>
          </div>

          <span className="main__icon">
            <img src={Normal} alt="highimg" />
          </span>

          <Moreimg />
        </div>
        <div className="box__button">
          <p className="box__button-text">Rows per page:</p>
          <span>
            8
            <Dropdown />
          </span>
          <p className="box__button-text">1-8 of 1240</p>
          <div >
            <Arrovleft />
            <Arrovright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
