import React from 'react'
import {connect} from "react-redux"
import PredictForm from "./PredictForm";
import Header from "./Header";
import Presentation from "./Presentation";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            demo: false
        }
    }


    render() {
        return <div className="max-height">
            <Header/>

            <button className="btn btn-success switch-btn"
                    onClick={() => this.setState((prev, props) => ({demo: !prev.demo}))}>
                {this.state.demo ? "Presentation" : "Demo"}
            </button>
            <div className="container wrapper">
                <Presentation display={!this.state.demo}/>
                <PredictForm display={this.state.demo}/>
            </div>
            {this.props.children}
        </div>
    }

}