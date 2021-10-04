import {Component} from "react";
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [
                {
                    name: 'Frankestein',
                    email: 'email1@gmail.com',
                    id: '1'
                },
                {
                    name: 'Dracula',
                    email: 'email1@gmail.com',
                    id: '2'
                },
                {
                    name: 'Zombie',
                    email: 'email1@gmail.com',
                    id: '3'
                }
            ],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;

        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='Search monster'
                           handleChange={this.handleChange}/>
                <CardList list={filteredMonsters}/>
            </div>)
    }
}

export default App;
