import React from 'react'
import "./Reviews.css";

const Reviews = () => {
    return (
        <div className='Reviews'>
            <>
                <div className="accordion testimonial">
                    <h2 className='py-3'>
                        Reviews
                    </h2>
                    <div className="pane">
                        <div className="lb">
                            <div className="rating-t">
                                <img src="https://cdn.jsdelivr.net/gh/linuxguist/greviews@main/rating-star-yellow.png" alt="Rating" /> |{" "}
                                <strong>Chris Coyier</strong>
                            </div>
                            <div className="testi-image dfw-FontResize" style={{ fontSize: 15 }}>
                                {" "}
                                <img src="https://i.imgur.com/Vzox3O3.jpg" alt="Testimonial9" />
                            </div>
                            <div className="testi-text">
                                <span className="quote-l" />
                                CodePen is a social development environment. At its heart, it allows
                                you to write code in the browser, and see the results of it as you
                                build. A useful and liberating online code editor for developers of
                                any skill, and particularly empowering for people learning to code. We
                                focus primarily on front-end languages like HTML, CSS, JavaScript, and
                                preprocessing syntaxes that turn into those things.
                                <span className="quote-r" />
                            </div>
                        </div>
                        <div className="db">
                            <div className="rating-t">
                                <img src="https://cdn.jsdelivr.net/gh/linuxguist/greviews@main/rating-star-yellow.png" alt="Rating" /> |{" "}
                                <strong>Alex Vazquez</strong>
                            </div>
                            <div className="testi-image dfw-FontResize" style={{ fontSize: 15 }}>
                                {" "}
                                <img src="https://i.imgur.com/nHZQTnW.jpg" alt="Testimonial9" />
                            </div>
                            <div className="testi-text">
                                <span className="quote-l" />
                                We say social, because CodePen is a community. Most creations on
                                CodePen are public and open source. They are living things that other
                                people and the community can interact with, from a simple hearting, to
                                leaving a comment, to forking and changing for their own needs.
                                <span className="quote-r" />
                            </div>
                        </div>
                        <div className="lb">
                            <div className="rating-t">
                                <img src="https://cdn.jsdelivr.net/gh/linuxguist/greviews@main/rating-star-yellow.png" alt="Rating" /> |{" "}
                                <strong>Stephen Shaw</strong>
                            </div>
                            <div className="testi-image dfw-FontResize" style={{ fontSize: 15 }}>
                                {" "}
                                <img src="https://i.imgur.com/zfTioar.jpg" alt="Testimonial9" />
                            </div>
                            <div className="testi-text">
                                <span className="quote-l" />
                                We're trying to make CodePen a happy and healthy place for front-end
                                designers and developers and the people looking for them, while also
                                being a damn fine place to code.
                                <span className="quote-r" />
                            </div>
                        </div>
                        <div className="db">
                            <div className="rating-t">
                                <img src="https://cdn.jsdelivr.net/gh/linuxguist/greviews@main/rating-star-yellow.png" alt="Rating" /> |{" "}
                                <strong>Robert Kieffer</strong>
                            </div>
                            <div className="testi-image dfw-FontResize" style={{ fontSize: 15 }}>
                                {" "}
                                <img src="https://i.imgur.com/UM9OsIB.jpg" alt="Testimonial9" />
                            </div>
                            <div className="testi-text">
                                <span className="quote-l" />
                                People use CodePen for all sorts of things: prototyping new ideas,
                                reduced test cases for bugs, sending clients things to look at,
                                evaluating potential hires, to finding inspiration. People also use
                                CodePen as a sort of resume and portfolio, showing off their best
                                design and development work.
                                <span className="quote-r" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Reviews
