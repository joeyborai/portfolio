import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import './home.css';

export const Home = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div>
      <h1>JOE BORAI</h1>
      <div className="bio">alskdjfalksdjfla</div>
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="yoseph-borai-4a2181147" data-version="v1"><a className="my-badge badge-base__link LI-simple-link" href="https://www.linkedin.com/in/yoseph-borai-4a2181147?trk=profile-badge"></a></div>
    </div>
  )
}
