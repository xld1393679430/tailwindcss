import React, { useState, useEffect } from "react";
import './index.css'

const Page = () => {
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Page</p>
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img
            class="chat-notification-logo"
            src="http://placehold.it/100x100"
            alt="ChitChat Logo"
          />
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
