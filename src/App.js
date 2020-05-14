import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            person: []
        });
    }
    componentDidMount() {
        fetch("https://swapi.dev/api/people/?page=2")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        person: result.results
                    });
                }
            )
    }
    render() {
        const list = this.state.person.map((i) => (
          <div id={i.name} key={i.name+1}>
            <p>{i.name}, who has {i.hair_color==="n/a" ? "no": i.hair_color} hair. </p>
          </div>
        ));
        return (
            <div className="container">
              {list}
            </div>
        );
    }
}

export default App;