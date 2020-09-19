import React, { Component, Fragment } from 'react'
import cang from '../img/cangcimen.png'
import diskon from '../img/diskon.png'
import kenyang from '../img/kenyang.png'

class Slide extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-11">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cang} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={diskon} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={kenyang} className="d-block w-100" alt=""/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Slide