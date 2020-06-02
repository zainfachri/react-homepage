import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <h3>React Study - Zainfachri</h3>
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li>Tentang Kami</li>
            <li>Rekrut</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
