import React from 'react'
import crypto from '../assets/images/cryptonews.54869ee3.png'
import wazirX from '../assets/images/wazirX.png'
import bitbns from '../assets/images/bitbns.dcee6cf4.png'
import giotus from '../assets/images/giotus.png'
import Colodax from '../assets/images/Colodax.png'
import Zebpay from '../assets/images/Zebpay.png'
import CoinDCX from '../assets/images/CoinDCX.png'
import Banner from '../assets/images/BannerFTXNews.d0cd974b.png'

export default function MainPage() {
    return (
        <div className='pb-50'>
            <div className="Container-fluid " style={{ padding: "0px 30px" }}>
                <div className="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px" }}>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">0.62 %</div>
                        <div className="average-header-subHeading">5 Mins</div>
                    </div>

                    <div className="text-center">
                        <div className="average-header-maintext color-green">1.29 %</div>
                        <div className="average-header-subHeading">1 Hour</div>
                    </div>

                    <div style={{ maxWidth: '40%' }}>
                        <div className="text-center font-32 average-block">
                            <div className="average-subText"><span className="subText-heading">Best Price to Trade</span></div>
                            <div className="average-heading" style={{ paddingBottom: "10px" }}>₹ 35,36,164</div>
                            <div className="average-subText">Average BTC/INR net price including commission</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="average-header-maintext color-green">7 %</div>
                        <div className="average-header-subHeading">1 Day</div>
                    </div>

                    <div className="text-center">
                        <div className="average-header-maintext color-green">10.71 %</div>
                        <div className="average-header-subHeading">7 Days</div>
                    </div>

                </div>
                <a href="http://fintreet.in" target="_blank" rel="noopener noreferrer">
                    <img src={crypto} alt="" srcset="" style={{ width: "100%", padding: "0px 0px 20px" }} />
                </a>
            </div>

            <div className="fiat-crypto-table table-responsive" style={{ margin: '0 auto' }} >
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>
                                <h4><span class="pointer">#</span></h4>
                            </th>

                            <th>
                                <h4><span class="pointer">Platform</span></h4>
                            </th>

                            <th>
                                <h4><span class="pointer">Last Traded Price</span></h4>
                            </th>

                            <th>
                                <h4><span class="pointer">Buy / Sell Price</span></h4>
                            </th>

                            <th>
                                <h4><span class="pointer">Difference</span></h4>
                            </th>

                            <th>
                                <h4><span class="pointer">Savings</span></h4>
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="align-middle">
                                <h4 class="table-text">1</h4>
                            </td>

                            <td className='align-middle'>
                                <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={wazirX} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">WazirX</span>
                                    </h4>
                                </a>
                            </td>

                            <td class="align-middle"><h4 class="table-text">₹ 37,29,490</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 37,29,489 / ₹ 37,29,490</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">0.18 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 6,746</h4></td>
                        </tr>

                        <tr>
                            <td class="align-middle"><h4 class="table-text">2</h4></td>
                            <td className='align-middle'>
                                <a href="https://bitbns.com/trade/?utm_source=refID_35_2021-08-26&utm_medium=referral_link&utm_campaign=referral#/signup" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={bitbns} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">Bitbns</span>
                                    </h4>
                                </a>
                            </td>

                            <td class="align-middle"><h4 class="table-text">₹ 37,15,127</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 37,11,372 / ₹ 37,15,127</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">5.36 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 1,88,905</h4></td>
                        </tr>

                        <tr>
                            <td class="align-middle"><h4 class="table-text">3</h4></td>
                            <td className='align-middle'>
                                <a href="_" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={giotus} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">Giotus</span>
                                    </h4>
                                </a>
                            </td>
                            <td class="align-middle"><h4 class="table-text">₹ 37,00,950</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 37,00,950 / ₹ 37,79,999</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">-0.58 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">▼ ₹ 21,712</h4></td>
                        </tr>

                        <tr>
                            <td class="align-middle"><h4 class="table-text">4</h4></td>
                            <td className='align-middle'>
                                <a href="_" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={Colodax} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">Colodax</span>
                                    </h4>
                                </a>
                            </td>
                            <td class="align-middle"><h4 class="table-text">₹ 25,83,138</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 25,75,167 / ₹ 26,08,984</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">-26.79 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">▼ ₹ 9,47,102</h4></td>
                        </tr>

                        <tr>
                            <td class="align-middle"><h4 class="table-text">5</h4></td>
                            <td className='align-middle'>
                                <a href="_" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={Zebpay} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">Zebpay</span>
                                    </h4>
                                </a>
                            </td>
                            <td class="align-middle"><h4 class="table-text">₹ 37,06,025</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 37,14,800 / ₹ 37,06,050</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">-0.39 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 1,61,478</h4></td>
                        </tr>

                        <tr>
                            <td class="align-middle"><h4 class="table-text">6</h4></td>
                            <td className='align-middle'>
                                <a href="_" target="_blank" rel="noopener noreferrer">
                                    <h4 className="table-text">
                                        <img src={CoinDCX} alt="" srcset="" className='exchange-logo' />
                                        <span class="exchange-name ">CoinDCX</span>
                                    </h4>
                                </a>
                            </td>
                            <td class="align-middle"><h4 class="table-text">₹ 37,29,730</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 37,30,056 / ₹ 37,35,259</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">5.11 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 1,81,377</h4></td>
                        </tr>
                    </tbody>
                </table>

                <div className="padding-header">
                    <a href="https://ftx.com/#a=finstreet" target="_blank" rel="noopener noreferrer">
                        <img src={Banner} alt="" srcset="" style={{ width: '100%' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}
