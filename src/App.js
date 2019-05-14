// import React from 'react';
import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import CelebDetail from './CelebDetail';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      celebrities: []
    }
  }
  render() {
    return (
      <div className="country-list">
      <h1> Movie celebrities</h1>
        {this.state.celebrities.map(celebrities =>
          <table className="table">
            <thead>
              <tr>
              <NavLink to="/Celeb/{celebrities.id}"> <p key={celebrities.id}> <img src={"https://image.tmdb.org/t/p/w185" + celebrities.profile_path} alt="" /> </p>
              <p> {celebrities.name}</p>
              </NavLink> 
              </tr>
              </thead>
              </table>)}

        <Switch>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/Celeb/:id" component={CelebDetail} />
            </Switch>
      </div>
        );
        }
  componentDidMount() {
          axios.get('https://api.themoviedb.org/3/person/popular?page=1&api_key=e8a40b68a2a8cb9557b735fe97002f41')
            .then(celebrities => {
              console.log("celebrities", celebrities.data.results)
              this.setState({
                celebrities: celebrities.data.results
              })
            })
        }
        }
        
        
        export default App;
