import React from "react";

export default class Presentation extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {

        return <div className={this.props.display ? "container block absolute" : "container block absolute left-shift"}>


            <div className="col-sm-12">
                <h3>Анализы X-ray снимков на наличие переломов</h3>

                <div className="present-text">
                    <em>Цель на хакатон была: Локализация переломов на рентген снимке руки/предплечья</em>
                </div>

                <div className="present-text">
                    Зачем?
                    <br/>

                    <ol>
                        <li>Ассистирующая система для анализа снимков, позволит сэкономить время рентгенолога</li>
                        <li>Уменьшить вероятность человеческой ошибки</li>
                        <li>Возможность заменить работу рентгенолога по ночам</li>

                    </ol>

                </div>
                <div className="present-text">

                    <h3>Опробованные методы решения</h3>
                    <ul>
                        <li>Autoencoder (не сработало)</li>
                        Исправление кисти + поиск diff c исходным снимком
                        Проблема: мало данных, замыленное изображение, не восстанавливает большие дефекты

                        <li>2. GAN (не сработало)</li>
                        Генерация здоровых/поврежденных костей рук.
                        Проблема: Долго тренируется, нужно много данных.

                        <li>3. Faster RCNN (~)</li>
                        Простая, показала +- работоспособность на минимальном наборе данных
                    </ul>

                </div>


            </div>

            <h3>Данные для теста (не train)</h3>
            <ul>
                <li><a href="test/test4.jpg"><img height="128px" width="128px" src="test/test4.jpg"/></a></li>
                <br/>
                <li><a href="test/test5.jpg"><img height="128px" width="128px" src="test/test5.jpg"
                                                  href="test/test5.jpg"/></a></li>
                <br/>
                <li><a href="test/test6.jpg"><img height="128px" width="128px" src="test/test6.jpg"
                                                  href="test/test6.jpg"/></a></li>
                <br/>
                <li><a href="test/test7.jpg"><img height="128px" width="128px" src="test/test7.jpg"
                                                  href="test/test7.jpg"/></a></li>
                <br/>
                <li><a href="test/test8.jpg"><img height="128px" width="128px" src="test/test8.jpg"
                                                  href="test/test8.jpg"/></a></li>
                <br/>
                <li><a href="test/test9.jpg"><img height="128px" width="128px" src="test/test9.jpg"
                                                  href="test/test9.jpg"/></a></li>


            </ul>


            <div className="padding-bottom"></div>


        </div>

    }

}