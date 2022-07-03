import React, { Component, useState } from "react";
// import PropTypes from "prop-types";
import Logo from "../../assets/get in my belly.gif";
import Nathans from "../../assets/Nathans.webp";
import Countdown from "react-countdown";
import contests from "../../utils/contests";
import './Contests.css';

export default function Contest(props) {
  // use state hooks here as needed
  const [contest, setContest] = useState("hot dog contest");
  // const [, setContest] = useState("");

  return (
    <div className="Contests">
      {/* {setContest("potato fest")} */}
      <h1>Contests</h1>
      <div className="Logo">
        <img src={Logo} alt="Logo Image" style={{ width: "500px" }} />
      </div>
      <p>See a list of upcoming eating contests, let us know what you think.</p>
      <div>
        <p>Nathans Famous fourth of July Hot Dog Eating Contest</p>
        <ul>
          <li>
            <a href="http://www.twitter.com/eatingcontest">Nathans winner</a>
          </li>
        </ul>

        <img src={Nathans} alt="nathans" style={{ width: "150px" }} />
      </div>
      <div className="contest-description">{contest}</div>
      <div
        className="link home-link"
        // onClick={this.state.contestListClick}
      ></div>
      <Countdown date={Date.parse("29 sep 2025 00:4:00 GMT")} />

      <div>
        {contests.map((contest, i) => (
          <div key={`contest${i}`}>
            <h2 className="contest-heading">{contest.name}</h2>
            <Countdown date={Date.parse(contest.time)} />
          </div>
        ))}
      </div>
    </div>
  );
}
