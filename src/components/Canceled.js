import React from 'react';
import { Link } from 'react-router-dom';

const Canceled = () => {
  return (
    <div class="sr-root">
      <div class="sr-main">
        <div class="sr-payment-summary completed-view">
          <h1>Your payment was canceled</h1>
          <h2>Please try again.</h2>
        </div>
      </div>
      <div class="sr-content">
        <div class="pasha-image-stack">
          <img
            src="https://picsum.photos/280/320?random=1"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=2"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=3"
            width="140"
            height="160"
          />
          <img
            src="https://picsum.photos/280/320?random=4"
            width="140"
            height="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Canceled;
