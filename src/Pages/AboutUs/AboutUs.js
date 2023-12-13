import React from 'react'
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <>
                <div className="about_us">
                    <h2>OUR COMPANY</h2>
                    <div className="mission">
                        <span>MISSION</span>
                        <p>
                            Our mission is to transport your cargo with high speed and good quality.{" "}
                        </p>
                    </div>
                    <span>NAME</span>
                    <p>
                        Company’s name is come from a Chinese idiom stories: 擎天架海 (Prop up the
                        sky and wear the sea).{" "}
                    </p>
                    <span>HISTORY</span>
                    <p>
                        Shanghai Sky-xing International Transportation Co., Ltd. has been
                        established since 2005. We are an international freight forwarder offering
                        import and export freight forwarding, specialized service for over 50
                        countries. We supply service base on Shanghai International Airpot. We
                        cooperate with major cargo airlines and local companies to take care of
                        your transportation needs at an acceptable rate.
                    </p>
                    <img
                        src="https://aircargoworld.com/wp-content/uploads/2019/05/PACTL-at-PVG.jpg"
                        className='w-100'
                        alt=""
                    />
                    <span>OUR COMMITMENT</span>
                    <p>
                        Thank you for considering Shanghai Sky-xing International Transportation
                        Co., Ltd. to provide your important transportation and logistics needs.
                        Our vision and commitment to our customers is to deliver quality service
                        and personal attention.
                    </p>
                </div>
            </>

        </div>
    )
}

export default AboutUs
