import React from 'react';
import Header from './Header';
import Keg from './Keg';
import ReplaceSoon from './ReplaceSoon';
import PropTypes from 'prop-types';

function TapList(props) {
    console.log(props.user);
    if(props.user == 'employee') {
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
                        {props.kegList.map((keg, index) =>
                            <Keg
                                name={keg.name}
                                brewer={keg.brewer}
                                abv={keg.abv}
                                price={keg.pintPrice}
                                remaining={keg.remainingPints}
                                isAdmin={true}
                                onClickSell={props.onClickSell}
                                key={index}
                                thisId={index}
                            />
                        )}
                    </tbody>
                </table>
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
                        <th>Brewer</th>
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
    user: PropTypes.string
};

export default TapList;

// class TapList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             kegList: [
//                 {
//                     name: 'Pale Ale',
//                     brewer: 'Fake Brewing Co.',
//                     abv: 5.2,
//                     pintPrice:5.00,
//                     remainingPints: 98
//                 },
//                 {
//                     name: 'IPA',
//                     brewer: 'Fake Brewing Co.',
//                     abv: 6.3,
//                     pintPrice:5.50,
//                     remainingPints: 9
//                 },
//                 {
//                     name: 'Pilsner',
//                     brewer: 'Fake Brewing Co.',
//                     abv: 4.9,
//                     pintPrice:5.25,
//                     remainingPints: 120
//                 },
//                 {
//                     name: 'Cider',
//                     brewer: 'Fake Brewing Co.',
//                     abv: 6.0,
//                     pintPrice:5.50,
//                     remainingPints: 8
//                 },
//                 {
//                     name: 'Stout',
//                     brewer: 'Fake Brewing Co.',
//                     abv: 6.2,
//                     pintPrice:5.40,
//                     remainingPints: 124
//                 }
//             ]
//         };
//         this.onClickSell = this.onClickSell.bind(this);
//     }

//     onClickSell(id) {
//         let newKegList = this.state.kegList;
//         // newKegList.map((keg) => {
//         //     if(keg.id == id) {
//         //         keg.remainingPints--;
//         //     }
//         // });
//         newKegList[id].remainingPints--;
//         console.log(newKegList[id].remainingPints);
//         this.setState({kegList: newKegList});
//     }

//     render() {
//         if(this.props.location.pathname == '/tap-list/admin') {
//             return(
//                 <div>
//                     <Header/>
//                     <h2>Currently On Tap</h2>
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <th>Brewer</th>
//                                 <th>Name</th>
//                                 <th>ABV</th>
//                                 <th>Price</th>
//                                 <th>Pints Remaining</th>
//                                 <th>Actions</th>
//                             </tr>
//                             {this.state.kegList.map((keg, index) =>
//                                 <Keg
//                                     name={keg.name}
//                                     brewer={keg.brewer}
//                                     abv={keg.abv}
//                                     price={keg.pintPrice}
//                                     remaining={keg.remainingPints}
//                                     isAdmin={true}
//                                     onClickSell={this.onClickSell}
//                                     key={index}
//                                     thisId={index}
//                                 />
//                             )}
//                         </tbody>
//                     </table>
//                     <ReplaceSoon
//                         replaceList = {this.state.kegList.filter(keg => 
//                             keg.remainingPints <= 10
//                         )}
//                     />
//                 </div>
//             );
//         } else return (
//             <div>
//                 <Header/>
//                 <h2>Currently On Tap</h2>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <th>Brewer</th>
//                             <th>Name</th>
//                             <th>ABV</th>
//                             <th>Price</th>
//                             {/* <th>Pints Remaining</th> */}
//                         </tr>
//                         {this.state.kegList.map((keg, index) =>
//                             <Keg
//                                 name={keg.name}
//                                 brewer={keg.brewer}
//                                 abv={keg.abv}
//                                 price={keg.pintPrice}
//                                 remaining={keg.remainingPints}
//                                 isAdmin={false}
//                                 key={index}
//                             />
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }