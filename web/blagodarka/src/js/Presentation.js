import React from "react";

export default class Presentation extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {

        return <div className={this.props.display ? "container block absolute" : "container block absolute left-shift"}>


            <div className="col-sm-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et facilis impedit iusto labore odit,
                reiciendis soluta? Amet autem deleniti et explicabo fugiat omnis quidem? Accusamus dolorem minima
                perferendis praesentium.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea eligendi eos hic itaque laborum quia
                sint, voluptate. Accusamus at deleniti facere ipsum labore nobis, obcaecati quae sunt veritatis
                voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis, culpa est harum, id illum
                in incidunt iure magni minima obcaecati odit, quas quasi quidem repudiandae sapiente velit voluptas
                voluptatum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero praesentium quo rem soluta unde? Et eum
                excepturi facere facilis ipsa mollitia nobis placeat, quae quasi quibusdam, quo ullam veniam voluptates.


            </div>
            <div className="padding-bottom"></div>

        </div>

    }

}