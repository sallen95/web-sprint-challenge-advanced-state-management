import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/smurfAction';

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const SmurfForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(formValues)
        setFormValues(initialFormValues)

    }

    return (
        <form>
            <h2>Make a new Smurf</h2>
            <label>Name
                <input
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleChange}
                />
            </label>

            <label>Age 
                <input 
                    name='age'
                    type='text'
                    value={formValues.age}
                    onChange={handleChange}
                />
            </label>

            <label>Height 
                <input 
                    name='height'
                    type='text'
                    value={formValues.height}
                    onChange={handleChange}
                />
            </label>

            <button onClick={handleSubmit}>Add Smurf</button>
        </form>
    )
}


const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)