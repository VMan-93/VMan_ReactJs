import React from 'react';

class UserClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2 : 1
        }
    }

    componentDidMount() {
        //Similar to use Effect
    }

    render () {
        const { name, location } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="user-card">
            <h1>Count = {count} <button className='count-btn'
                onClick={ () => {
                    //Never update state variables directly
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 1
                    }) 
                    //Even if we have multiple state variables in the big object,
                    // React will only update these 2 counts without touching other variables
                }}
                >Increate count</button></h1>
            <h1>Count = {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @vman_93</h4>
            </div>
        );
    };
}

export default UserClassComp;

//Same stuff using functional Component
import { useState } from "react";

const UserComp = ({name}) => {
    //React creats a big object with all state variables even if we declare individually
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <h2>Name : { name }</h2>
        <h3>Location : Chennai</h3>
        <h4>Contact : @vman_93</h4>
    </div>
    )
};