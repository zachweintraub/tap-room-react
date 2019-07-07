import React from 'react';
import Keg from './Keg';
import { kegList } from '../kegs';

function TapList() {
    return(
        <div>
            <h2>Currently On Tap</h2>
            <table>
                <tr>
                    <th>Brewer</th>
                    <th>Name</th>
                    <th>ABV</th>
                    <th>Price</th>
                    <th>Pints Remaining</th>
                </tr>
                {kegList.map((keg, index) =>
                    <Keg
                        name={keg.name}
                        brewer={keg.brewer}
                        abv={keg.abv}
                        price={keg.pintPrice}
                        remaining={keg.remainingPints}
                        key={index}/>
                )}
            </table>
        </div>
    );
}

export default TapList;