import React, {Component} from 'react';
import "../sass/Checklist.scss";
import { Grid } from '@material-ui/core';
class Checklist extends Component {

    
    // status: [現在-2], [現在-1], [現在]
    state = {
        point: 100,
        count: 0,
    };

    imagesPath = {
        unclicked: "/image/unclicked.png",
        clicked: "/image/clicked.png",
        missed: "/image/missed.png",
        days: [
            "/image/unclicked.png",
            "/image/unclicked.png",
            "/image/unclicked.png"
        ]
        //path: "/image" + this.imagesPath.unclicked 
    }


    //render之前
    componentWillMount(){

    }


    //render之後
    componentDidMount() {

    }

    toggleImage = () => {
        if(this.state.status === "unclicked") {
            this.setState(state => ({ status: "clicked" }))
        }
      }

    changeImageHandler = (status) => {
        console.log("---"+status)
        // console.log("???")
        let addedCount = this.state.count;
        if(status==0) {
            addedCount = addedCount+1;
        }


        


        this.setState({
                count: addedCount
            }
        );
        
        this.setState({
                 point: this.state.point+100
            }
        );
        
        
        this.imagesPath.days[0] = this.imagesPath.clicked;


    }

  render() {
      let status = 0
      
      return (
        <div>
            <div className='title'>線上簽到系統</div>

            <Grid container spacing={3} className="main-block">
                <Grid item xs={2}  className="day">
                    <div className="button-name">前{2}天</div>
                    <button onClick={this.changeImageHandler.bind(this, status)}>
                        <img src={this.imagesPath.days[0]} className="check-in" />
                    </button>
                </Grid>

                <Grid item xs={2}  className="day">
                    <div>前{1}天</div>
                        <button onClick={this.changeImageHandler.bind(this, status)}>
                        <img src={this.imagesPath.days[1]} className="check-in" />
                        </button>
                </Grid>

                <Grid item xs={2}  className="day">
                    <div>今天</div>
                    <button onClick={this.changeImageHandler.bind(this, status)}>
                    <img src={this.imagesPath.days[2]} className="check-in" />
                    </button>
                </Grid>

            </Grid>

            <div className="user-information">

                <div>
                    簽到總和：<span>{ this.state.count }</span>
                </div>

                <div>
                    點數：<span>{ this.state.point }</span>
                </div>

            </div>

        </div>
      );
  }
}

export default Checklist;
