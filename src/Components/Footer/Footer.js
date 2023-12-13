import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="address">
                    <span className="street">Main Office Address:</span>
                    <span className="street">Room 201 No.30 Chenyang Rd.</span>
                    <span className="street">New York, USA</span>
                    <span className="street">201200</span>
                </div>
                <div className="phone">
                    <span>Phone: +86 68782806</span>
                    <span>Fax: +86 68782801</span>
                </div>
                <div className="email">
                    {/* TODO code rest of text */}
                    <span className="email">Ask your question by email</span>
                    <a className="email" href="mailto:sky-xing@263.net">
                        <i className="icon-email" />
                        sky-xing@263.net
                    </a>
                </div>
                <div className="copyright">
                    <span>
                        © 2019 Nyc Sky-xing International Transportation Co., Ltd.
                    </span>
                </div>
            </div>
        </footer>
    )
}
