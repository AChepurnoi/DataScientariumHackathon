import base64
from io import BytesIO

import numpy as np
from PIL import Image
from aiohttp import web

from config import config
from fasterRCNN import FasterRCNN


async def predict(request):
    json_data = await request.json()
    img_base64 = json_data['image']
    img = Image.open(BytesIO(base64.b64decode(img_base64)))
    img_numpy_array = np.asarray(img)

    prediction = app['model'].predict(img_numpy_array)
    return web.json_response(prediction)


app = web.Application()
app.router.add_post('/predict', predict)
app['model'] = FasterRCNN(**config)

web.run_app(app, port=80)
