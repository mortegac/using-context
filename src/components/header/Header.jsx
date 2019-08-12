import React from 'react';

// import lo go from './logo.svg';


function Header(props){
    const {children, title} = props;

    console.log(props);

return(
    <div className="App-header">
        <p>{title}</p>
        {children}
    </div>

);
}

export default Header;