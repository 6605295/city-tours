import React, { Component } from "react";
import Tour from "../Tour/Tour";
import tourData from "../../tourData";
class Tourlist extends Component {
  state = {
    tours: tourData,
  };
  removetour = (id) => {
    const sortedtours = this.state.tours.filter((c) => c.id !== id);
    this.setState({ tours: sortedtours });
  };
  render() {
    const { tours } = this.state;
    return (
      <React.Fragment>
        {tours.map((data) => (
          <Tour key={data.id} tour={data} removetour={this.removetour} />
        ))}
      </React.Fragment>
    );
  }
}

export default Tourlist;
