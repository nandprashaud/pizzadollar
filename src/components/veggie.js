import React from 'react';
import veggie from './images/plain.jpg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="Veggie col-4">
      <div className="card">
        <img src={ veggie } class="https://970-b7e4e8e2-4b62-4b6d-b7a9-fb4d6677458f.cs-us-east1-vpcf.cloudshell.dev/mini-browser/home/nprashaud0943/pizzadollar/src/components/images/veggie.jpeg" alt="veggie"/>
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">you trying to be healthy but you still can't resist pizza? Well then the veggie slice is for you! Guilt free pizza at its finest. </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;
