import tensorflow as tf
import numpy as np
from PIL import Image
import eel
import numpy as np
eel.init("")


img_height = 28
img_width = 28

model = tf.keras.models.load_model('my_model.keras')
def load_image(arr):
    img = np.array(arr)
    img = img.reshape(-1, img_height, img_width, 1)
    print(img)
    return img

def predict_digit(arr):
    img = load_image(arr)
    prediction = model.predict(img)
    return np.argmax(prediction)


@eel.expose
def get_array(n):
    predicted_digit_num = predict_digit(n)
    print(f'Цифра на изображении: {predicted_digit_num}')
    return int(predicted_digit_num)


eel.start("main.html", size=(2560, 1440))