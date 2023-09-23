import React, { useEffect, useState } from "react";
import crypto from "../assets/images/cryptonews.54869ee3.png";
import wazirX from "../assets/images/wazirX.png";
import bitbns from "../assets/images/bitbns.dcee6cf4.png";
import giotus from "../assets/images/giotus.png";
import Colodax from "../assets/images/Colodax.png";
import Zebpay from "../assets/images/Zebpay.png";
import CoinDCX from "../assets/images/CoinDCX.png";
import Banner from "../assets/images/BannerFTXNews.d0cd974b.png";

export default function MainPage() {
  const [data, setData] = useState([]);
  
  const tableHead = [
    "#",
    "Platform",
    "Last Traded Price",
    "Buy / Sell Price",
    "Difference",
    "Savings",
  ];

  const logos = [
    crypto,
    wazirX,
    bitbns,
    giotus,
    Colodax,
    Zebpay,
    CoinDCX,
    Banner,
  ];

  useEffect(() => {
    fetch("/get-data")
      .then((result) => result.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const BestPrice = ({ rate, time }) => (
    <div className="text-center">
      <div className="average-header-maintext color-green">{rate}</div>
      <div className="average-header-subHeading">{time}</div>
    </div>
  );

  const Cell = ({ title }) => (
    <td class="align-middle">
      <h4 class="table-text color-green">{title}</h4>
    </td>
  );

  return (
    <div className="pb-50">
      <div className="Container-fluid " style={{ padding: "0px 30px" }}>
        <div
          className="d-flex justify-content-around align-items-center average-header"
          style={{ padding: "10px 0px" }}
        >
          <BestPrice rate="0.62%" time="5 Mins" />
          <BestPrice rate="1.29%" time="1 Hour" />

          <div style={{ maxWidth: "40%" }}>
            <div className="text-center font-32 average-block">
              <div className="average-subText">
                <span className="subText-heading">Best Price to Trade</span>
              </div>
              <div
                className="average-heading"
                style={{ paddingBottom: "10px" }}
              >
                ₹ 35,36,164
              </div>
              <div className="average-subText">
                Average BTC/INR net price including commission
              </div>
            </div>
          </div>

          <BestPrice rate="7 %<" time="1 Day" />
          <BestPrice rate="10.71%" time="7 Days" />
        </div>
        <a href="http://fintreet.in" target="_blank" rel="noopener noreferrer">
          <img
            src={crypto}
            alt=""
            srcset=""
            style={{ width: "100%", padding: "0px 0px 20px" }}
          />
        </a>
      </div>

      <div
        className="fiat-crypto-table table-responsive"
        style={{ margin: "0 auto" }}
      >
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              {tableHead.map((item) => (
                <th>
                  <h4>
                    <span class="pointer">{item}</span>
                  </h4>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data?.map((item, index) => (
              <tr>
                <Cell title={index + 1} />

                <td className="align-middle">
                  <a
                    href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="table-text">
                      <img
                        src={logos[Math.floor(Math.random() * logos.length)]}
                        alt=""
                        srcset=""
                        className="exchange-logo"
                      />
                      <span class="exchange-name ">{item.name}</span>
                    </h4>
                  </a>
                </td>

                <Cell title={`₹ ${item.last}`} />
                <Cell title={`₹ ${item.buy} / ₹ ${item.sell}`} />
                <Cell title="0.18 %" />
                <Cell title={`▲ ₹ ${item.volume}`} />
              </tr>
            ))}
          </tbody>
        </table>

        <div className="padding-header">
          <a
            href="https://ftx.com/#a=finstreet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Banner} alt="" srcset="" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
