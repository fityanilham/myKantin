import React, { Component, Fragment } from 'react'
import Kategory from './kategory'
import Populer from './populer'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-9">
            <div class="wrapper">
              <nav id="sidebar">
                <div id="dismiss">
                  <i class="fas fa-arrow-left"></i>
                </div>
                <ul class="list-unstyled components">
                  <p>MyKantin</p>
                  <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Menu</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                        <a href="#">Makanan</a>
                      </li>
                      <li>
                        <a href="#">Minuman</a>
                      </li>
                      <li>
                        <a href="#">Boba</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fas fa-align-justify"></i>
                </button>
                <form className="d-flex">
                  <div class="input-group input-group-sm ml-5 mt-1">
                    <span className="input-group-text bg-search"><i className="fas fa-search" aria-hidden="true"></i></span>
                    <input type="text" placeholder="Cari makan bang?" className="form-control bg-search" />
                  </div>
                </form>
              </div>
            </nav>
            <Kategory />
            <Populer />
          </div>
          <div className="col-3">
            {/* <div class="dropdown mt-2 justify-content-end">
              <a class="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true">
                Fityan Ilham
              </a>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBp3EpvQvnrZ4SE_5u4VyQjQQacilz2Vv0yA&usqp=CAU" alt="" height="40" width="40" />
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Keluar <i class="fas fa-sign-out-alt"></i></button>
              </div>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> */}
            <div className="bg-primary">1</div>
          </div>      
        </div>
      </Fragment>
    );
  }
}
export default Home