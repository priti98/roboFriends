import React, { Component } from 'react';
import CardList from '../Components/CardList';
//import { robots } from './Robot';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        //console.log(filteredRobots);
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        if (this.state.robots.length === 0) {
            return <h1>Loading..</h1>
        }
        else {
            return (
                <>
                    <h1 className='center'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </>
            );
        }

    }
}

export default App;