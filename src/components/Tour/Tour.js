import React, { Component } from "react";
import "./tour.scss";
class Tour extends Component {
  state = {
    showinfo: false,
  };
  handleinfo = () => {
    this.setState({ showinfo: !this.state.showinfo });
  };
  render() {
    const { id, city, name, img, info } = this.props.tour;
    const { removetour } = this.props;
    return (
      <React.Fragment>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-4 left">
              <img src={img} alt="" className="img" />
              <span onClick={() => removetour(id)}>
                <i className="fa fa-window-close"></i>
              </span>
            </div>
            <div className="col-md-8 right">
              <h3>{city}</h3>
              <h5>{name}</h5>

              <h6>
                Info{" "}
                <span onClick={this.handleinfo}>
                  <i className="fa fa-caret-square-o-down"></i>
                </span>
              </h6>
              {this.state.showinfo && <p>{info}</p>}
            </div>
          </div>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Tour;
