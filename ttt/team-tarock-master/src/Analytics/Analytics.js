import React from "react";
import "./Analytics.css";
import RadarChart from './RadarChart';
import DonutChart from './DonutChart';

export const AnalyticsTemplate = ({}) => {
  const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      delay: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
  return (
  <div className="wrapper">
    <div>{MainAnalytics()}</div>
    <br/>
    <div className="twocolumnsana"><RadarChart/></div>
    <div className="twocolumnsana"><DonutChart/></div>
    <br/>
    <br/>
  </div>
  );
};

  const MainAnalytics = () => {
    return (
        <div style={{align: 'center'}}>
        <p style={{margin: '20px'}}><b>This page is updated every month. Last updated on: March 30, 2019</b></p>
        <p style={{fontStyle: 'italic', fontWeight: '300', margin: '20px'}}> Here, you can view all the financials of our trust. We are always an open book and if you have any queries please feel free to contact us using any of our social media platforms or via our email: <b>teamtaraktrust@gmail.com</b>. The maximum amount of money a person can contribute is 100 INR or 50 USD. However if you are willing to contribute more, you can contribute in the form of direct supplies like food, clothing, etc.</p>
        </div>
      );
  };

const Analytics = (props) => {
  return <AnalyticsTemplate analyticsData={props.analyticsData} />;
};

export default Analytics;
