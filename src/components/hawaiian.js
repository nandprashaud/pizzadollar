import React from 'react';
import hawaiian from './images/hawaiian.jpg';
import './css/slice.css';

function Hawaiian() {
  return(
    <div className="Hawaiian col-4">
      <div className="card">
        <img src={ hawaiian } class="https://970-b7e4e8e2-4b62-4b6d-b7a9-fb4d6677458f.cs-us-east1-vpcf.cloudshell.dev/mini-browser/home/nprashaud0943/pizzadollar/src/components/images/hawaiian.jpg" alt="hawaiian"/>
        <div className="card-body">
          <h5 className="card-title">Hawaiian Slice</h5>
          <p className="card-text">We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Hawaiian;
