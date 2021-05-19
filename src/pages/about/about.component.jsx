import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from "../../assets/img/profile/profile.jpg"
import "./about.style.css";

const About = () => {
    return (
        <div id='about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About</h1>
            <Container>
                <Row  className=" pt-3 pb-5 align-items-center ">
                    {/* Description */}
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 my-details rounded">
                            {/* Description */}
                             We all are surrounded by full of technology and most of the works are done by using tools and technology and without any physical effort, we able to complete our quality works on time. Technologies are used in almost every sector and one of these is the agriculture sector.
                            <br /><strong>Monitoring Crop and soil:</strong> Using AI is an effective way to monitor potential soil defects and nutrients deficiencies. With the image recognization approach, AI identifies the possible defects of crops.
                            <br />
                            <strong>Predictive analysis:</strong> AI is being developed to track and predict the various environmental impact of crop yield such as changes in weather conditions. AI is helping the farmers in advance ways to keep updated with the data related to weather forecasting and help farmers to increase production and profits.
                            <br/>
                            <strong>Drones:</strong> Drone technology is used to improve the yield of their crops. Drones provide a high quality of the image that can help to monitor crops while scanning and analyzing fields to collect the required agricultural data.
                            </Row>
                        
                          </Col>

                          <Col xs={12} md={6}>
                              <Row className="justify-content-center mb-2 mr-2 ">
                                  <Image className="profile justify-content-end" alt="profile"  src={Profile} thumbnail/>
                              </Row>
                          </Col>

                        </Row>
                      </Container>
                    </div>
                  </div>
    )
}

export default About;
