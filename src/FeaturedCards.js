import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './FeaturedCards.css'
import Card from './Card'
import { Row, Col } from 'react-grid-system';


// const cardsList = [
//   {
//     picUrl: './sample_website.png',
//     title: 'User1',
//     userPhoto: './anonphoto.jpg',
//     numberViews: 3,
//     numberComments: 5,
//     numberLikes: 9
//   },
//   {
//     picUrl: './sample_website.png',
//     title: 'User2',
//     userPhoto: './anonphoto.jpg',
//     numberViews: 2,
//     numberComments: 4,
//     numberLikes: 900
//   },
//   {
//     picUrl: './sample_website.png',
//     title: 'User3',
//     userPhoto: './anonphoto.jpg',
//     numberViews: 2,
//     numberComments: 99,
//     numberLikes: 20
//   },
//   {
//     picUrl: './sample_website.png',
//     title: 'User4',
//     userPhoto: './anonphoto.jpg',
//     numberViews: 22,
//     numberComments: 433,
//     numberLikes: 900
//   },
// ]

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // StarWars: false,
      Pokemon: false
    };

    // fetch('https://swapi.co/api/people/').then(res => res.json()).then(data => {
    //   console.log(data);
    //   this.setState({
    //     StarWars: data.results
    //   })
    // }); 

    fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json()).then(data => {
      console.log(data);
      this.setState({
        Pokemon: data.results
      })
    }); 
  }

  render () {
    const placeholderCards = data => (
      <div class="cards-row">
        <Row>
          {data.map (one => (
          <Col sm={6} md={4} lg={3}>
            <Card picUrl="http://via.placeholder.com/300x200" title={one.name} userPhoto={one.userPhoto} numberViews={one.numberViews} numberLikes={one.numberLikes} numberComments={one.numberComments} />
          </Col>
            ))
          }
        </Row>
      </div>
    )

    return (
      <div className="cards-background">
        {this.state.Pokemon ? placeholderCards(this.state.Pokemon) : ('Now Loading...')}
      </div>
    )
  }
}