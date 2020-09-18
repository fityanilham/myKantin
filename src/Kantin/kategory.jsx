import React, { Component } from 'react'
import cang from '../img/cangcimen.png'
import diskon from '../img/diskon.png'
import kenyang from '../img/kenyang.png'


class Kategory extends Component {
  render() {
    return (
      <div className="row" id="body-row">
        <div className="col">
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
          <div className="row mt-5">
            <div className="col-4 d-flex justify-content-center">
              <div className="form-group">
                <h4 className="ml-2">Kategori</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="form-group mx-sm-3 justify-content-end d-flex">
                <button type="submit" className="btn btn-primary justify-content-end">Confirm identity</button>
              </div>
            </div>
          </div>
          <div className="row ml-1 d-flex justify-content-center">
            <div className="col-2">
              <div className="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShlOuOelniTUjkrATmEhmpRXiZb5a4yVayhw&usqp=CAU" className="card-img" alt="" height="100" />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center mt-3">Semua</h5>
                </div>
              </div>
            </div>
            <div className="col-2 ml-5">
              <div className="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVrbTjsfX4wmFK2dz--8F7x4qBC661BWaCGw&usqp=CAU" className="card-img" alt="" height="100"  />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center mt-3">Makanan</h5>
                </div>
              </div>
            </div>
            <div className="col-2 ml-5">
              <div className="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQcMuvTMpB8qkzq_RpwDPsJm3f_I-hF3n8mQ&usqp=CAU" className="card-img" alt="" height="100"  />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center mt-3">Boba</h5>
                </div>
              </div>
            </div>
            <div className="col-2 ml-5">
              <div className="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-68M45EXKmUO2RCjQ5epnpDr3KRr-5CA6Wg&usqp=CAU" className="card-img" alt="" height="100"  />
                <div className="card-img-overlay">
                  <h5 className="card-title text-center mt-3">Special</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default Kategory