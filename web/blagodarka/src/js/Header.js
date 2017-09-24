import React from "react";

export default class Header extends React.Component {


    constructor(props) {
        super(props)
    }

    render() {
        return <div className="container">
            <div className="row logo-bar">
                <div className="col-md-12 text-center">
                    <div className="logo-text"> Благодарочка</div>
                    <img src="https://avatanplus.com/files/resources/mid/56b6961261ed4152b93a37e1.png" className="like"/>

                    <img className="logo"
                         src="https://cdn4.iconfinder.com/data/icons/medical-icons-normal/1000/modules_radiology.png"/>
                </div>
            </div>

        </div>
    }


}
