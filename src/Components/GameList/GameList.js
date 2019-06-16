import React, {Component} from "react"; 
import Games from "../Games/Games";
import axios from "axios";
import './GameList.css';
import FutureProof from "../FutureProof/FutureProof";

class GameList extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    }
  }

  componentDidMount() {
    console.log("doslo do tuka");
    axios.get('https://brainsterboxapi.herokuapp.com/games') 
    .then(res => {
      console.log(res);
      this.setState({ games : res.data});
    })
  }

  render(){
    return (
      <div className="game-list">

        <div className="center-div">

          <div className="content">
            <br/>
            <h5 className="brainster">Изработено од студенти на академијата на <a href="https://brainster.co/" target="_blank" >Brainster</a></h5>

            <FutureProof />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
       
              <div className="row cards-center">
                {this.state.games.map((element) => {
                  return(
                    <Games title={element.title}
                      img={element.image}
                      cover={require(`../../images/${element.id}.jpg`)}
                      category={element.category}
                      id={element.id}
                      timeFrame={element.timeFrame}
                      description={element.description}
                      groupSize = {element.groupSize}
                      materials={element.materials}
                      steps={element.steps}
                      level={element.level}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="center-div center-footer">
          <FutureProof/>
        </div>
      </div>
    );
  }
}

export default GameList;