import React from 'react';
import Header from './Header';
import Keg from './Keg';
import ReplaceSoon from './ReplaceSoon';
import { kegList } from '../kegs';

function TapList(props) {

    if(props.location.pathname == '/tap-list/admin') {
        return(
            <div>
                <Header/>
                <h2>Currently On Tap</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Brewer</th>
                            <th>Name</th>
                            <th>ABV</th>
                            <th>Price</th>
                            <th>Pints Remaining</th>
                            <th>Actions</th>
                        </tr>
                        {kegList.map((keg, index) =>
                            <Keg
                                name={keg.name}
                                brewer={keg.brewer}
                                abv={keg.abv}
                                price={keg.pintPrice}
                                remaining={keg.remainingPints}
                                isAdmin={true}
                                key={index}
                            />
                        )}
                    </tbody>
                </table>
                <ReplaceSoon
                    replaceList = {kegList.filter(keg => 
                        keg.remainingPints <= 10
                    )}
                />
            </div>
        );
    } else return (
        <div>
            <Header/>
            <h2>Currently On Tap</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Brewer</th>
                        <th>Name</th>
                        <th>ABV</th>
                        <th>Price</th>
                        {/* <th>Pints Remaining</th> */}
                    </tr>
                    {kegList.map((keg, index) =>
                        <Keg
                            name={keg.name}
                            brewer={keg.brewer}
                            abv={keg.abv}
                            price={keg.pintPrice}
                            remaining={keg.remainingPints}
                            isAdmin={false}
                            key={index}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TapList;