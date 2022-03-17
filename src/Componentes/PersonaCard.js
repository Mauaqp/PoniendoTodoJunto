import React, {Component} from 'react';

class PersonaCard extends React.Component {
    constructor ( props ){
        super(props);
        this.state = {
            addAge : this.props.age,
        };
    }
    // Render
    render () {
        const {firstName, lastName, age, hairColor} = this.props;

        return (
            <>
                <div>
                    <h1>{lastName} , {firstName}</h1>
                </div>
                <p>Age : {age}</p>
                <p>Hair Color : {hairColor}</p>
            </>
        )
    }
}

export default PersonaCard;