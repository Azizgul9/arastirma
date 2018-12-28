
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
    render() {
        return (
          <div className="container">
          <div className="slider-list">
            <div className="slider-slide">
              <span>myFamily</span>
                  <Carousel>
                    <img height={300} alt="300x300" src="assets/1.jpg" />
                    <img height={300} alt="300x300" src="assets/2.jpg" />
                    <img height={300} alt="300x300" src="assets/3.jpg" />
                  </Carousel>
            </div>
          </div>
      <Grid>
        <Jumbotron>
          <h2>Советы по воспитанию детей</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-1.jpg" circle className="picture"/>
              <Link to="/info">
              <h3>Мой ребёнок</h3>
              </Link>
            </Col>
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-3.jpg" circle className="picture"/>
              <Link to="/docs">
              <h3>Советы</h3>
              </Link>
            </Col>
            <Col xs={12} sm={4} className="cat-wrapper">
              <Image src="assets/image-2.jpg" circle className="picture"/>
              <Link to="/test">
              <h3>Секреты счастливой семьи</h3>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
      </div>
    )
  }
}
