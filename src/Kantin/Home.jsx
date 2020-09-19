import React, { Component, Fragment } from 'react'
import Order from './order'
import Populer from './populer'
import Modal from './modal'
import Kategori from './kategori';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '0',
      popular: [],
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      item: null,
      order: {},
    }
  }

  popularOnChange = (e) => {
    return fetch(`${this.state.base_url}populer?category_id=${e}`,
      {
        method: 'POST',
      })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          popular: responseJson.data
        })
      })
      .catch(error => 'error')
  }

  handlerModal = (item) => {
    this.setState({
      item: item,
    })
  }

  onOrderHandler = data => {
    this.setState({
      order: data
    });
    console.log();
  }

  render() {
    return (
        <div className="container-fluid">
        <Modal item={this.state.item} onOrderHandler={this.onOrderHandler}/>
          <div className="row">
            <div className="col-9">
              <div className="wrapper">
                <nav id="sidebar">
                  <div id="dismiss">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <ul className="list-unstyled components">
                    <p>Kantin Ku</p>
                    <li className="active">
                      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Menu</a>
                      <ul className="collapse list-unstyled" id="homeSubmenu">
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
                <div className="row">
                  <div className="col-2">
                    <div className="container-fluid">
                      <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-justify"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="cari">
                      <div className="input-group input-group-sm ml-5 mt-1">
                        <input type="text" placeholder="Cari makan bang?" className="form-control bg-search" />
                        <span><i className="fas fa-search mt-2 ml-2"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <Kategori popular={this.popularOnChange}/>
              <Populer popular={this.state.popular} onShowModal={this.handlerModal}/>
            </div>
            <Order item={this.state.order}/>     
          </div>
        </div>
    );
  }
}
export default Home