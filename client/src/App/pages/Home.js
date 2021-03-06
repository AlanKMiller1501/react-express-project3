import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

  
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>

      {/* <Link to={'./users'}>
        <button variant="raised">
            Users
        </button>
      </Link> */}

      <Link to={'./movies'}>
        <button variant="raised">
            Movies
        </button>
      </Link>
      <Link to={'./profile'}>
        <button variant="raised">
            Profile
        </button>
      </Link>

      <Link to={'./drinks'}>
        <button variant="raised">
            Drinks
        </button>
      </Link>

    </div>
    );
  }
}
export default Home;