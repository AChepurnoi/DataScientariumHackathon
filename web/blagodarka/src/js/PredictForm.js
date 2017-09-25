import React from 'react'
import SVG from 'svg.js'
import api from './Api'

export default class PredictForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: null
        };
        this.width = 768;
        this.height = 768;

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
                <div className="col-sm-6 col-md-offset-2 col-sm-offset-2">
                    <canvas id="svg" ref={(canvas) => this.canvas = canvas} height={this.height}
                            width={this.width}></canvas>
                    <input className="hide" id="hidden_image_input" type="file"
                           ref={(input) => this.imageInput = input}
                           onChange={() => this.readData()}/>
                </div>
            </div>

            <div className="padding-bottom"></div>


        </div>
    }


    drawPredictions(data) {
        let self = this;
        let wk = this.width / this.img.width;
        let hk = this.height / this.img.height;

        let rectangles = data.map(obs => ({
            w: (obs.x2 - obs.x1) * wk,
            h: (obs.y2 - obs.y1) * hk,
            x: obs.x1 * wk,
            y: obs.y1 * hk,
            confidence: obs.probability
        }));

        rectangles = rectangles.map(r => ({
            confidence: r.confidence,
            points: [[r.x, r.y], [r.x + r.w, r.y], [r.x + r.w, r.y + r.h], [r.x, r.y + r.h], [r.x, r.y]]
        }));

        let danger = '#FF0000';
        let average = '#ff8555';
        let low = '#c0ff36';

        let colorPicker = (level) => {
            if (level > 0.8) return danger;
            else if (level > 0.5) return average;
            else return low
        };


        rectangles.forEach(obj => {
            let pts = obj.points;
            let ctx = self.canvas.getContext("2d");
            ctx.beginPath();
            pts.forEach(p => ctx.lineTo(p[0], p[1]));
            ctx.strokeStyle = colorPicker(obj.confidence);
            ctx.stroke();
        });

    }

    readData() {
        let reader = new FileReader();
        let file = this.imageInput.files[0];
        let self = this;

        reader.readAsDataURL(file);
        reader.onload = (event) => {
            self.img = new Image();
            self.img.src = reader.result;
            self.img.onload = () => self.canvas.getContext("2d").drawImage(self.img, 0, 0, self.width, self.height);
            self.setState({picture: reader.result});
            api.predict(reader.result).then(resp => self.drawPredictions(resp.data));
        }
    }

}

