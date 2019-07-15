import React from 'react';
import PropTypes from 'prop-types';
import EmployeeButtons from './EmployeeButtons';

function Keg(props) {
    if(props.isAdmin) {
        return(
            <tr>
                <td>{props.brewer}</td>
                <td>{props.name}</td>
                <td>{props.abv}%</td>
                <td>${props.price}</td>
                <td>{props.remaining}</td>
                <EmployeeButtons
                    onClickSell={props.onClickSell}
                    onClickDelete={props.onClickDelete}
                    thisId={props.thisId}
                    remaining={props.remaining}/>
            </tr>
        );
    } else {
        return(
            <tr>
                <td>{props.brewer}</td>
                <td>{props.name}</td>
                <td>{props.abv}%</td>
                <td>${props.price}</td>
            </tr>
        );
    }
}

Keg.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    abv: PropTypes.any,
    price: PropTypes.any,
    remaining: PropTypes.number,
    isAdmin: PropTypes.bool,
    onClickSell: PropTypes.func,
    onClickDelete: PropTypes.func,
    thisId: PropTypes.number
};

export default Keg;

