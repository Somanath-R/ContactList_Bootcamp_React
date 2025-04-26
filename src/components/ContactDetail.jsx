import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ContactDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state.contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src="https://via.placeholder.com/150" alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="ui button blue center" onClick={() => navigate('/')}>
          Back to Contact List
        </button>
      </div>
    </div>
  );
}

export default ContactDetail;
