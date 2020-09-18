import React, { Component } from 'react'

class Populer extends Component {
  render() {
    return (
      <div className="row mt-5" id="body-row">
        <div className="col">
          <h4 className="ml-5">Populer</h4>
          <div className="row ml-1">
            <div className="col-3">
              <div class="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShlOuOelniTUjkrATmEhmpRXiZb5a4yVayhw&usqp=CAU" class="card-img" alt="" height="100" />
                <div class="card-img-overlay">
                  <h5 class="card-title text-center mt-3">Semua</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVrbTjsfX4wmFK2dz--8F7x4qBC661BWaCGw&usqp=CAU" class="card-img" alt="" height="100" />
                <div class="card-img-overlay">
                  <h5 class="card-title text-center mt-3">Makanan</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQcMuvTMpB8qkzq_RpwDPsJm3f_I-hF3n8mQ&usqp=CAU" class="card-img" alt="" height="100" />
                <div class="card-img-overlay">
                  <h5 class="card-title text-center mt-3">Boba</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card bg-dark text-white">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-68M45EXKmUO2RCjQ5epnpDr3KRr-5CA6Wg&usqp=CAU" class="card-img" alt="" height="100" />
                <div class="card-img-overlay">
                  <h5 class="card-title text-center mt-3">Special</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default Populer