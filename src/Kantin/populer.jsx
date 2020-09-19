import React, { Component, Fragment } from 'react'

class Populer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      popular: '',
      item: '',
    };
  }

  getAllPopular() {
    return fetch(`${this.state.base_url}populer/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ popular: responseJson.data });
      })
      .catch(error => 'error')
  }

  onClickHandler = e => {
    this.props.onShowModal(e);
  }


  componentDidMount() {
    this.getAllPopular();
  }

  componentDidUpdate(props) {
    if (props.popular !== this.props.popular) {
      this.setState({ popular: this.props.popular });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row mt-5" id="body-row">
        <div className="col">
          <h4 className="ml-5">Populer</h4>
          <div className="row ml-1">
            {
            this.state.popular ? this.state.popular.map((item, i) =>
              <div className="col-3 mb-5" key={i}>
                <a href="" className="a-popular" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                  <div className="isimakan">
                    <img src={item.image} className="card card-img-top edgeimage d-block" style={{ width: '100%' }} height="100" alt=""/>
                    <div className="card-img-overlay">
                      <button disabled="disabled" className="bottom-left">{item.waktu}</button>
                    </div>
                  </div>
                </a>
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <div className="row">
                    <div className="col-8">
                      <p className="card-text">Rp. {item.harga}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      <p className="card-text">{item.rating}⭐</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : ''
            }
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}
 export default Populer