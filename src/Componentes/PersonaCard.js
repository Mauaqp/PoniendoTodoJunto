import React, {Component} from 'react';
import './PersonaCard.css';

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
            <div className="persona-div">
                <div>
                    <h1>{lastName} , {firstName}</h1>
                </div>
                {/* para que refleje los cambios, debe tener estado */}
                <p>Age : {this.state.addAge}</p>
                <p>Hair Color : {hairColor}</p>
                <button
                    onClick={() => {
                    console.log("clic");
                    this.setState({ addAge: this.state.addAge + 1 });
                    }}
                >Birthday Button for {firstName} {lastName}
                </button>
            </div>
        )
    }
}

export default PersonaCard;