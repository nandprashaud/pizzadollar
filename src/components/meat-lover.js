import React from 'react';
import meat from './images/plain.jpg';
import './css/slice.css';

function MeatLover() {
  return(
    <div className="MeatLover col-4">
      <div className="card">
        <img src={ meat } class="https://970-b7e4e8e2-4b62-4b6d-b7a9-fb4d6677458f.cs-us-east1-vpcf.cloudshell.dev/mini-browser/home/nprashaud0943/pizzadollar/src/components/images/meat.jpg" alt="meat"/>
        <div className="card-body">
          <h5 className="card-title">Plain Slice</h5>
          <p className="card-text">It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $10.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;
