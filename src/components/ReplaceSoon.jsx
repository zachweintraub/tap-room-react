import React from 'react';
import PropTypes from 'prop-types';

function ReplaceSoon(props) {
    if(props.replaceList.length > 0) {
        return(
            <div>
                <h4>Replace Soon</h4>
                {props.replaceList.map((keg, index) =>
                    <div key={index}>
                        <p>{keg.brewer} {keg.name} ({keg.remainingPints} pints remaining)</p>
                    </div>
                )}
            </div>
        );
    } else {
        return <p>No kegs need replacing!</p>;
    }
}

ReplaceSoon.propTypes = {
    replaceList: PropTypes.array
};

export default ReplaceSoon;