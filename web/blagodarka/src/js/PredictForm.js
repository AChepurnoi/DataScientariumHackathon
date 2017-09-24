import React from 'react'
import SVG from 'svg.js'
import api from './Api'

export default class PredictForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: null
        };
        this.size = 512;

    }


    render() {


        return <div
            className={this.props.display ? "predict-form container block absolute" : "predict-form container block absolute right-shift"}>

            <div className="row">
                <div className="col-sm-2 col-md-offset-5 col-xs-offset-5">
                    <div className="btn" id="upload_image" onClick={() => this.imageInput.click()}>Загрузить фото</div>
                </div>
            </div>


            <div className="row mar-top">
                <div className="col-sm-4 col-md-offset-3 col-sm-offset-2">
                    <div id="svg"></div>
                    <input className="hide" id="hidden_image_input" type="file"
                           ref={(input) => this.imageInput = input}
                           onChange={() => this.readData()}/>
                </div>
            </div>

            <div className="padding-bottom"></div>


        </div>
    }


    drawPredictions(data) {

        let wk = this.size / this.img.width;
        let hk = this.size / this.img.height;

        let rectangles = data.map(obs => ({
            w: (obs.x2 - obs.x1) * wk,
            h: (obs.y2 - obs.y1) * hk,
            x: obs.x1 * wk,
            y: obs.y1 * hk,
            confidence: obs.probability
        }));

        rectangles = rectangles.map(r => ({
            confidence: r.confidence,
            points: [r.x, r.y, r.x + r.w, r.y, r.x + r.w, r.y + r.h, r.x, r.y + r.h, r.x, r.y]
        }));

        let danger = '#FF0000';
        let average = '#ff8555';
        let low = '#c0ff36';

        let colorPicker = (level) => {
            if (level > 0.8) return danger;
            else if (level > 0.5) return average;
            else return low
        };


        rectangles.forEach(r => this.svg.polyline(r.points)
            .fill('none')
            .stroke({
                width: 1,
                color: colorPicker(r.confidence)
            }))

    }

    readData() {
        this.svg.rect(512, 512).fill("#FFF");
        let reader = new FileReader();
        let file = this.imageInput.files[0];
        let self = this;

        reader.readAsDataURL(file);
        reader.onload = (event) => {
            this.img = new Image();
            this.img.src = reader.result;

            this.setState({picture: reader.result});
            self.svg.image(reader.result, self.size, self.size);
            api.predict(reader.result).then(resp => self.drawPredictions(resp.data));
        }
    }

    componentDidMount() {
        let svg = SVG('svg').size(this.size, this.size);
        this.svg = svg
    }

}

