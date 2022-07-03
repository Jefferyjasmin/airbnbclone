import Card from "./Card";
import React, { useEffect } from "react";
import Banner from "./Banner";
import { useSelector, useDispatch } from "react-redux";
import { selectbutton } from "./features/button.Slice";

import "./Home.css";
const Home = () => {
  const clicked = useSelector(selectbutton);
  console.log("this is clicked in home page", clicked);
  useEffect(() => {}, []);

  return (
    <div className="home">
      <Banner />
      {clicked == true ? <div style={{ height: "300px" }} /> : ""}
      <div className="home_section">
        <Card
          src="https://www.mymove.com/wp-content/uploads/2014/05/GettyImages-147205632.jpg"
          title="Online Experiences"
          description="beautiful home in the middle of novware"
        />
        <Card
          title="Unique Stays"
          description="spaces that are more then just a place to sleep"
          src="https://www.gannett-cdn.com/presto/2020/07/24/PNAS/b6698e6b-0637-4261-af41-048c57659d69-Trace_Construction_Outdoor_Living_Photo_by_Reed_Brown.jpg"
        />
        <Card
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/12/931/523/iStock-1150278000-1.jpg?ve=1&tl=1"
        />
      </div>
      <div className="home_section">
        <Card
          title="3 Bedroom home in Flatbush"
          price="$130/night"
          description="Superhost with stunning view of the parkside in Sunny Flatbush"
          src="https://ocbj.media.clients.ellingtoncms.com/img/photos/2020/10/22/PGTK_DATA_RESIDENTIAL_1026_8408_Hillside_8_12_19-96_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d"
        />
        <Card
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
          src="https://scholarlyoa.com/wp-content/uploads/2021/02/luxury-home.jpg"
        />
        <Card
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
          src="https://exclusive.multibriefs.com/images/exclusive/0513luxuryhome.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
