import React from 'react';
import ReactDOM from 'react-dom';
import './card.css'
import {FaHeart, FaEye, FaComment} from 'react-icons/lib/fa';

const cap = str => str[0].toUpperCase() + str.slice(1);

const Icon = (props) => (
  <span>
    {props.children}
    <span className="icon-counter">{props.count}</span>
  </span>
);

export default (props) => (
  <div className="card">
    <div className="card-white">
      <img src={"https://rankedboost.com/wp-content/plugins/ice/pokemon-go/" + cap(props.title) + "-Pokemon-Go.png"} />

      <div className="icon-row">
        <Icon count="5"><FaHeart /></Icon>
        <FaEye /> <span className="icon-counter">{props.numberViews}</span>
        <FaComment /> <span className="icon-counter">{props.numberComments}</span>
      </div>
    </div>
    <div className="card-footer">
      <img src={props.userPhoto} />
      <p>{props.title}</p>
    </div>
  </div>
  )