import React, { Component, Fragment } from 'react'
import Slide from './slide';

class Kategori extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      categories: '',
    };
  }

  getAllCategories() {
    return fetch(`${this.state.base_url}category/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson.data });
      })
      .catch(error => 'error')
  }


  componentDidMount() {
    this.getAllCategories();
    console.log(this.state.categories);
  }

  onClickHandler = (e) => {
    this.props.popular(e);
  }
  render() {
    return (
      <Fragment>
        <div className="row" id="body-row">
        <div className="col">
          <Slide />
          <div className="row mt-5">
            <div className="col-4 d-flex justify-content-center">
              <div className="form-group">
                <h4 className="ml-2">Kategori</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="form-group mx-sm-3 justify-content-end d-flex">
                <button type="submit" className="btn btn-primary justify-content-end ll">Lebih Lengkap</button>
              </div>
            </div>
          </div>
          <div className="row ml-1 d-flex justify-content-center">
            {
              this.state.categories ? this.state.categories.map(category =>
              <div className="col-3">
                <button className="card text-white" key={category.id} onClick={_ => this.onClickHandler(category.id)}>
                  <img src={category.img} className="card-img" alt="" height="100" />
                  <div className="card-img-overlay">
                    <h5 className="card-title text-center mt-3">{category.name}</h5>
                  </div>
                </button>
              </div>
            ) : <br/>
          }
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}
 export default Kategori