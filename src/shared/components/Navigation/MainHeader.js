import React from 'react';

import './MainHeader.css';

const mainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default mainHeader;
