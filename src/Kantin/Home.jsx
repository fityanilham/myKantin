import React, { Component, Fragment } from 'react'
import Kategory from './kategory'
import Order from './order'
import Populer from './populer'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
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
          <Order />     
        </div>
        </div>
      </Fragment>
    );
  }
}
export default Home