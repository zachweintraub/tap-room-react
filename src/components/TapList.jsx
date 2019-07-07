import React from 'react';
import Keg from './Keg';
import kegList from '../kegs';

function TapList() {
    return(
        kegList.map(keg => {
            <Keg/>
        })
    );
}

export default TapList;