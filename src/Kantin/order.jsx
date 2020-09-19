import React, { Component } from 'react'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      console.log(this.props.item.pesan);
      console.log(this.props.item.harga);

      const total = this.props.item.pesan * this.props.item.harga;

      this.setState({
        list: [...this.state.list, this.props.item],
        total: this.state.total + total
      });
      console.log(this.state.total);
    }
  }
  render () {
    return (
      <div className="col-3">
        <div className="d-flex justify-content-end mt-3">
          <span className><i className="fas fa-heart mr-1 jarak"></i></span>
          <h6><span className="badge bg-notif mr-3">3</span></h6>
          <a href="">
            <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png" height="35" className="rounded-circle" alt=""/>
          </a>
        </div>
        <h4 className="pesan">Pesanan Saya</h4>
        <div className="card text-white bg-card">
          <div className="ml-3 mt-2">
            <h5 className="card-title">Fityan Ilham</h5>
            <h6 className="card-text text-white">Rp. 10.000.000,-</h6>
            <h6 className="card-text text-white mb-2">32198392192913912</h6>
          </div>
        </div>
        <div className="wrapper order">
          <div className="calculate p-3">
            {
              this.state.list ? this.state.list.map((item, i) =>
                <div key={i} className="items d-flex justify-content-between align-items-center mb-3">
                  <img src={item.image} width="50" />
                  <h6 className="mb-0">{item.pesan}</h6>
                  <h6 className="mb-0">x</h6>
                  <h6 className="mb-0">Rp. {item.harga * item.pesan}</h6>
                </div>
              ) : ''
            } 
            <div className="items d-flex justify-content-between align-items-center mb-3">
              <div className="wrapper">
                <i class="fas fa-truck"></i>
              </div>
              <h6 className="mb-0">Bekasi</h6>
              <h6 className="mb-0">Free ongkir</h6>
            </div>
          </div>
          <div className="total p-3 d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Total: {this.state.total}</h6>
            <h6 className="mb-0 total-rp">Rp. </h6>
          </div>
          <div className="wrapper-btn p-3 w-100">
            <button className="btn w-100 psn">Pesan</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Order