import React, { Component } from "react";
import NavBar from "./components/NavBar";
import './App.css';
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsPostcard } from "react-icons/bs";
import {Chrono} from 'react-chrono'


import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const loaderStatus = {
  initial: "INITIAL",
  progress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}



class App extends Component {
  state = {
    date: new Date(),
    array: [],
    apiStatus: loaderStatus.initial
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.fetchingTheDataCalls()
  }

  fetchingTheDataCalls = async () => {
    this.setState({ apiStatus: loaderStatus.progress })

    const url = "https://apis.ccbp.in/blogs"

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        this.setState({ array: data, apiStatus: loaderStatus.success })
      } else {
        this.setState({ apiStatus: loaderStatus.failure })
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({ apiStatus: loaderStatus.failure })
    }
  }

  time = () => {
    const { date } = this.state;
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const finalMinutes = minutes > 9 ? minutes : `0${minutes}`
    const finalhrs = hours > 9 ? hours : `0${hours}`

    return (
      <div className="adjustOne">
        <p>{finalhrs}</p> :
        <p>{finalMinutes}</p>
      </div>
    );
  }

  successCalling = () => {
    const { array } = this.state
    const settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    }

    return <Slider {...settings}>
      {array.map(eachOne => (
        <div key={eachOne.id}>
          <img src={eachOne.image_url} alt="" className="image" />
        </div>
      ))}
    </Slider>
  }

  callFailSection = () => {
    return (
      <div>
        <p>Failed to fetch data</p>
      </div>
    );
  }

  callingTheApi = () => {
    const { apiStatus } = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case loaderStatus.progress:
        return (
          <div className="">
          <p className="fetchPara"> ...Loading... </p> 
          </div>
        )
      case loaderStatus.success:
        return this.successCalling()
      case loaderStatus.failure:
        return this.callFailSection()
      default:
        return null
    }
  }

  render() {
    const { date } = this.state;
    const day = date.getDay();
    const today = date.getDate();
    const monthIndex = date.getMonth();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[monthIndex];
    const weekDay = days[day];

    return (
      <div className="overallContainer">
        <div className="sideBarContainer">
          <NavBar />
        </div>
        <div className="con">
          <div className="headerSection">
            <div className="greetingCon">
              <h1 className="greetHeading">Good Afternoon, Akshay</h1>
              <p className="greetingPara">You're Subscribed to Retail Plan</p>
            </div>
            <div className="allDatesAndTimes">
              <div className="horri">
                <div className="adjustOne">
                  <FaRegCalendarCheck className="cal" />
                  <p className="week"> {weekDay}, </p>
                </div>
                <div className="timeCon">
                  <p>{today}</p>
                  <p className="monthName">{monthName}</p>
                </div>
                <div className="timeConTwo">
                  <IoMdTime className="timer" />
                  {this.time()}
                </div>
              </div>
              <div className="adjustOne">
                <FaBell />
              </div>
            </div>
          </div>
          <div className="cardsContainer">
            <div className="whiteCard">
              <BsPostcard className="one"/>
              <p> My Saved Librabry 1 </p>
              <p> dd-mm-yyyy </p>
            </div>
            <div className="whiteCard">
              <BsPostcard className="two"/>
              <p> My Saved Librabry 2 </p>
              <p> dd-mm-yyyy </p>
            </div>
            <div className="whiteCard">
              <BsPostcard className="three"/>
              <p> My Saved Librabry 3 </p>
              <p> dd-mm-yyyy </p>
            </div>
            <div className="whiteCard">
              <BsPostcard className="four"/>
              <p> My Saved Librabry 4 </p>
              <p> dd-mm-yyyy </p>
            </div>
            <div className="whiteCard">
              <BsPostcard className="five"/>
              <p> My Saved Librabry 5 </p>
              <p> dd-mm-yyyy </p>
            </div>
          </div>
          <div className="sliderPlusTime">
          <div className="sliderCon">
            {this.callingTheApi()}
            <button className="button" type="button">
              View More
            </button>
          </div>
          <div className="timeLine">
           <div>
            <h1> Recent Released </h1> 
            <select>
              <option> India </option>
              <option> USA </option>
            </select>
           </div>
           <Chrono mode="VERTICAL">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
                  className="image"
                  alt="chennai-super-kings"
                />
              </div>
              <div>
                <h1>Mumbai Indians</h1>
                <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
              </div>
           </Chrono>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
