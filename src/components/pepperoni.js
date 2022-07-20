import React from 'react';
import pepperoni from './images/plain.jpg';
import './css/slice.css';

function Pepperoni() {
  return(
    <div className="Pepperoni col-4">
      <div className="card">
        <img src={ pepperoni } class="https://970-b7e4e8e2-4b62-4b6d-b7a9-fb4d6677458f.cs-us-east1-vpcf.cloudshell.dev/mini-browser/home/nprashaud0943/pizzadollar/src/components/images/pepperoni.jpg" alt="pepperoni"/>
        <div className="card-body">
          <h5 className="card-title">Pepperoni Slice</h5>
          <p className="card-text">A classic slice of cheese, sauce, and guess what else.... that's right pepperoni.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Pepperoni;
