import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    return(
        <tr>
            <td>{props.brewer}</td>
            <td>{props.name}</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
        </tr>
    );
}

Keg.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    abv: PropTypes.number,
    price: PropTypes.number,
    remaining: PropTypes.number,
    key: PropTypes.number
};

export default Keg;

