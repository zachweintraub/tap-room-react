import React from 'react';
import Header from './Header';
import Keg from './Keg';
import EmployeeButtons from './EmployeeButtons';
import { kegList } from '../kegs';

function TapList(props) {

    if(props.location.pathname == '/tap-list/admin') {
        return(
            <div>
                <Header/>
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
                        <div key={index}>
                            <Keg
                                name={keg.name}
                                brewer={keg.brewer}
                                abv={keg.abv}
                                price={keg.pintPrice}
                                remaining={keg.remainingPints}
                            />
                            <EmployeeButtons/>
                        </div>
                    )}
                </table>
            </div>
        );
    } else return (
        <div>
            <Header/>
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
                        key={index}
                    />
                )}
            </table>
        </div>
    );
}

export default TapList;