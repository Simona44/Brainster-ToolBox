import React from "react";
import './Games.css';
import { Link } from 'react-router-dom';

const Games = (props) => {
  return (
    <div className="game-card col-md-4">
      <Link to={`/SinglePage/${props.id}`}>
        <div className=" thumbnail thumbnail-custom-props">

          
            <img className='cover-img' src={props.cover} alt="img" />
          

          <div className="card-content col-md-12 col-xs-12">
            <div className='row'>
              <h4 className="game-title">{props.title}</h4>
            </div>

            <div className='row'>
              <div className='left col-md-9 col-xs-9'>
                <p className="category-p">Категорија: <span className='category'>{props.category}</span></p>
                <p className="time-p"><i class="far fa-clock"></i> Времетраење: <br/><span className="time">{props.timeFrame}</span></p>
              </div>

              <div className='image-cropper col-md-3 col-xs-3'>
                <img className='icon-img' src={props.img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Games;