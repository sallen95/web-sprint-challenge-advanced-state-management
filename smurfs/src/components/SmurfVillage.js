import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions/smurfAction';

const SmurfVillage = (props) => {
    useEffect(() => {
        props.fetchSmurf();
    }, []);

    return (
        <div>
            {props.smurfData.map(smurf => (
                <div className="smurf" key={Date.now()}>
                    <h3>{smurf.name}</h3>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurf })(SmurfVillage);