import React from 'react';
import Header from './Header';

function Home() {
    return(
        <div>
            <Header/>
            <img src="./img/homer.gif" alt="homer simpson drinks beer"/>
            <p>Welcome to Zach's taproom.</p>
        </div>
    );
}

export default Home;