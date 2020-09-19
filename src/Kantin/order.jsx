import React, { Component } from 'react'

class Order extends Component {
  render () {
    return (
      <div className="col-3">
        <div className="d-flex justify-content-end mt-3">
          <span className><i className="fas fa-heart mr-4 jarak"></i></span>
          <h6><span className="badge bg-notif mr-4 jarak">3</span></h6>
          <a href="">
            <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png" height="35" className="rounded-circle" alt=""/>
          </a>
        </div>
        <h4 className="pesan">Pesanan Saya</h4>
        <div className="card text-white bg-card">
          <div className="ml-3 mt-2">
            <h6 className="card-title">Fityan Ilham</h6>
            <p className="card-text text-white">Rp. 10.000.000,-</p>
            <p className="card-text text-white mb-2">32198392192913912</p>
          </div>
        </div>
        <div className="card order">
          <div className="card-body">
          <table className="font-weight-bold ukurantable">
                <tbody>
                    <tr>
                        <th><img src="https://scootersjungle.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Cheese-Pizza-589x414-2.jpg" className="edgeimage mt-4" height="50" alt=""/></th>
                        <td><span className="ml-3 mr-3 mt-2">3</span></td>
                        <td><span className="mr-3 mt-2">x</span></td>
                        <td><span className="mt-2">Cheese Pizza Enak Abiez</span></td>
                        <td><span className="text-muted ml-2 mt-2">Rp 120k</span></td>
                    </tr>
                    <tr>
                        <th><img src="https://s0.bukalapak.com/uploads/content_attachment/0bfe2ac083a1f0bed65e87b5/w-744/foto_ending_jus_mangga.jpg" className="edgeimage mt-4" height="50" alt=""/></th>
                        <td><span className="ml-3 mr-3 mt-2">2</span></td>
                        <td><span className="mr-3 mt-2">x</span></td>
                        <td><span className="mt-2">Jus Mangga</span></td>
                        <td><span className="text-muted ml-2 mt-2">Rp 14k</span></td>
                    </tr>
                    <tr>
                        <th><img src="https://img-global.cpcdn.com/recipes/7369e12b717fc0e6/751x532cq70/salad-sayur-foto-resep-utama.jpg" className="edgeimage mt-4" height="50" alt=""/></th>
                        <td><span className="ml-3 mr-3 mt-2">1</span></td>
                        <td><span className="mr-3 mt-2">x</span></td>
                        <td><span className="mt-2">Salad Sayur</span></td>
                        <td><span className="text-muted ml-2 mt-2">Rp 13k</span></td>
                    </tr>
                    <tr>
                        <th><img className="edgeimage mt-2 mb-2 ml-2" height="50" alt=""/></th>
                        <td colSpan="3"><span className="ml-3 mr-3">Jl. Bangke No. 13, Bekasi</span></td>
                        <td><span className="text-muted ml-2 mt-2">Gratis</span></td>
                    </tr>
                    <tr>
                        <th><div className="container totaljarak"></div></th>
                    </tr>
                    <tr>
                        <th><span className="mb-2 ml-2">Total :</span></th>
                        <td colSpan="4"><h3 className="font-weight-bold text-right">Rp 147.000</h3></td>
                    </tr>
                    <tr>
                        <td colSpan="5">
                            <button className="btn btn-warning bg-notif btn-block mt-3 pt-3 pb-3">
                                <span className="sizepesan">Pesan<i class="fas fa-chevron-right ml-5"></i></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Order