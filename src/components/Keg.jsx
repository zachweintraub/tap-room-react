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
                <EmployeeButtons/>
            </tr>
        );
    } else {
        return(
            <tr>
                <td>{props.brewer}</td>
                <td>{props.name}</td>
                <td>{props.abv}%</td>
                <td>${props.price}</td>
                {/* <td>{props.remaining}</td> */}
            </tr>
        );
    }
}

Keg.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    abv: PropTypes.number,
    price: PropTypes.number,
    remaining: PropTypes.number,
    isAdmin: PropTypes.bool
};

export default Keg;

