import React, {Component} from "react"; 
import "./SinglePage.css";
import axios from "axios";
import FutureProof from "../FutureProof/FutureProof";
import background from "../../images/background/background.png";

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios.get('https://brainsterboxapi.herokuapp.com/games') 
      .then(res => {
        this.setState({
           games : res.data [(this.props.match.params.id)]
        });
      })
  }
   
  render(){
    return (
      <div>
        <div className='sp-img'>
          <img  src={background} alt="img"/>
        </div>

        <div className='bg-skewed container-fluid'>
          <div className='row'>
            <div className='skewed-content col-md-8 col-md-offset-2'>
              <h1>{this.state.games.title}</h1>  <br />

              <div className="infobox row">
                <div className="col-md-12 col-xs-12 ">

                  <div className="col-md-3"> 
                    <p className="time-p"> <i class="far fa-clock"></i> Time Frame<br/>
                      <span className="span-data">{this.state.games.timeFrame}</span>
                    </p>
                  </div>  

                  <div className="col-md-3">
                    <p className="time-p"> <i class="fas fa-user-friends"></i> Group Size<br/> <span className="span-data">{this.state.games.groupSize}</span></p>
                  </div>

                  <div className="col-md-3">
                    <p className="time-p"> <i class="fas fa-university"></i> Facilitation level<br/> <span className="span-data">{this.state.games.level}</span></p>
                  </div>

                  <div className="col-md-3">
                    <p className="time-p"> <i class="fab fa-modx"></i> Materials<br/>
                      <span className="span-data">{this.state.games.materials}</span>
                    </p>
                  </div>
                </div> 
              </div> <br/>
              <p className="style">{this.state.games.description}</p>
              <hr/>
              {this.state.games.steps ?
                <div className="style">{this.state.games.steps.map(object => <p><b>{object.step}</b> <br/> {object.stepDescription} <hr/></p>)} </div> : null
              }
            </div>
          </div>
        </div>

        <div className="purple-skewed container-fluid">
          <div className="row">
            <div className="col-md-8 col-xs-8 col-md-offset-2 center-div purple-content">  
              <FutureProof />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SinglePage;