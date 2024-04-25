import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { IoSettings } from "react-icons/io5";
import './index.css';

const NavBar = () => (
  <div className="navElementCon">
    <img src="https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg" alt="logo" className="logo"/>
    <div className="iconCon">
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <FaSearch className="icon"/>
        </a>
        <p> Search </p>
      </div>
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <MdMonitor className="icon" />
        </a>
        <p> Monitor </p>
      </div>
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <FaRegQuestionCircle className="icon" />
        </a>
        <p> Ask Me </p>
      </div>
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <FaRegCalendarCheck className="icon"/>
        </a>
        <p> Calendar </p>
      </div>
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <MdAttachMoney className="icon"/>
        </a>
        <p> Attach Money </p>
      </div>
      <div className="anchorAndText">
        <a href="https://www.linkedin.com/in/shaik-abdul-rouf-aa4795254">
          <SlEarphones className="icon"/>
        </a>
        <p> Headset </p>
      </div>
    </div>
    
    <IoSettings className="settingsIcon" />

  </div>
);

export default NavBar;
