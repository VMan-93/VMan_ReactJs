import React from 'react';

class UserClassComp extends React.Component {

    constructor(props) {
        super(props);
        //Default value for state variable
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default"
            }
        }
    }

    async componentDidMount() {
        //Called after the render happens for the first time
        const data = await fetch("https://api.github.com/users/VMan-93");
        const json = await data.json();

        this.setState({
            userInfo : json
        })

        console.log(json);
    }

    componentDidUpdate() {
        //Called after the re-render happens on state-variable update
    }

    componentWillUnmount() {
        //Called just before the component is unmounted
        // Example going to the new page
        // Clear setTimeOuts/Loops as well - Page is not reloading so timer is running
    }

    render () {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
            <img src={avatar_url} style={{ width : "300px", height : "300px"}}/>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @vman_93</h4>
            </div>
        );
    };
}

export default UserClassComp