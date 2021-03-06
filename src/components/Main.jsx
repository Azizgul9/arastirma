import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
    render() {
        return (
          <div className="content">
          <span>myFamily</span>
          <p>Краткое описание сайта</p>
          <div className="slider-list">
            <div className="slider-slide">
                  <Carousel>
                    <img width={900} height={600} alt="900x600" src="assets/1.jpg"/>
                    <img width={900} height={600} alt="900x600" src="assets/2.jpeg" />
                    <img width={900} height={600} alt="900x600" src="assets/3.jpg" />
                  </Carousel>
            </div>
          </div>
      <div className="menu">
      <Grid>
        <Jumbotron>
          <h2>Заголовок</h2>
          <h3>Краткое описание</h3>
          <h2>Основное меню</h2>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle1.jpg" circle className="picture"/>
              <Link to="/adopt">
              <h4>Советы по воспитанию детей</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle2.jpg" circle className="picture"/>
              <Link to="/AboutParents">
              <h4>Мой ребёнок</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle3.jpg" circle  className="picture"/>
              <Link to="/test">
              <h4>Советы по воспитанию</h4>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="cat-wrapper">
              <Image src="assets/circle4.jpg" circle  className="picture"/>
              <Link to="/test">
              <h4>Секреты счастливой семьи</h4>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
      </div>
      </div>
    )
  }
}
