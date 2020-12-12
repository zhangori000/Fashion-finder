import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { robots } from '../GodObjects';
//import { robots } from './GodObjects'; // if manually




class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
            return response.json();
        }).then(users => {
            this.setState({ robots: users})
        });
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(!robots.length) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2"> Choose New Styles </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll> 
                </div>
            );
        }
    }
    
}

export default App;