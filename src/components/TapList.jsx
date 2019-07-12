import React from 'react';
import Header from './Header';
import Keg from './Keg';
import ReplaceSoon from './ReplaceSoon';
import NewKegControl from './NewKegControl';
import PropTypes from 'prop-types';

function TapList(props) {
    if(props.user == 'employee') {
        return(
            <div>
                <Header/>
                <h2>Currently On Tap</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Brewery</th>
                            <th>Name</th>
                            <th>ABV</th>
                            <th>Price</th>
                            <th>Pints Remaining</th>
                            <th>Actions</th>
                        </tr>
                        {props.kegList.map((keg, index) =>
                            <Keg
                                name={keg.name}
                                brewer={keg.brewer}
                                abv={keg.abv}
                                price={keg.pintPrice}
                                remaining={keg.remainingPints}
                                isAdmin={true}
                                onClickSell={props.onClickSell}
                                onClickDelete={props.onClickDelete}
                                key={index}
                                thisId={index}
                            />
                        )}
                    </tbody>
                </table>
                <NewKegControl addingNewKeg={props.addingNewKeg}
                    onAddNewKeg={props.onAddNewKeg}
                    onCancelAddNewKeg={props.onCancelAddNewKeg}
                    onSaveNewKeg={props.onSaveNewKeg}/>
                <ReplaceSoon
                    replaceList = {props.kegList.filter(keg => 
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
                        <th>Brewery</th>
                        <th>Name</th>
                        <th>ABV</th>
                        <th>Price</th>
                    </tr>
                    {props.kegList.map((keg, index) =>
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

TapList.propTypes = {
    kegList: PropTypes.array,
    onClickSell: PropTypes.func,
    onClickDelete: PropTypes.func,
    onAddNewKeg: PropTypes.func,
    onCancelAddNewKeg: PropTypes.func,
    onSaveNewKeg: PropTypes.func,
    user: PropTypes.string,
    addingNewKeg: PropTypes.bool
};

export default TapList;