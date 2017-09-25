import base64
from io import BytesIO

from PIL import Image
from aiohttp import web

from config import config
from fasterRCNN import FasterRCNN

async def predict(request):
    json_data = await request.json()
    img_base64 = json_data['image']
    img = Image.open(BytesIO(base64.b64decode(img_base64)))
    img.save('img.jpeg', "JPEG")

    prediction = app['model'].predict('img.jpeg')
    return web.json_response(prediction)


app = web.Application()
app.router.add_post('/predict', predict)
app['model'] = FasterRCNN(**config)

web.run_app(app, port=80)
