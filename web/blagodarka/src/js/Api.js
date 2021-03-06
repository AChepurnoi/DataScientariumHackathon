import axios from 'axios'


class api {
    constructor() {
        this.client = axios.create({
            baseURL: "api/",
            responseType: 'json'
        });

    }

    predict(image) {
        image = image.substring(23);
        return this.client.post('/predict', {image});
    }


}

export default (new api());
