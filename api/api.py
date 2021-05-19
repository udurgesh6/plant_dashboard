#!/usr/bin/env python
# coding: utf-8


# from flask import Flask, render_template, request
 
# import numpy as np
# import os
 
# from keras.preprocessing.image import load_img
# from keras.preprocessing.image import img_to_array
# from keras.models import load_model
 

# model =load_model("model/predictionEpoch5.h5")
# def pred_cot_dieas(cott_plant):
#   test_image = load_img(cott_plant, target_size = (150, 150))
#   test_image = img_to_array(test_image)/255 
#   test_image = np.expand_dims(test_image, axis = 0) 
#   result = model.predict(test_image).round(3) 
#   print('@@ result = ', result)
   
#   pred = np.argmax(result) 
#   if pred == 0:
#     return "Healthy Plant", 'healthy_leaf.html'
#   elif pred == 1:
#       return 'Diseased Plant', 'disease.html' 
#   elif pred == 2:
#       return 'Healthy Plant', 'healthy.html'
#   else:
#     return "Healthy Plant", 'healthy.html'
 

# app = Flask(__name__)
# @app.route("/", methods=['GET', 'POST'])
# def home():
#         return render_template('index.html')
     
  
# @app.route("/predict", methods = ['GET','POST'])
# def predict():
#      if request.method == 'POST':
#         file = request.files['image']
#         filename = file.filename        
#         print("@@ Input = ", filename)
#         file_path = os.path.join('static/user uploaded', filename)
#         file.save(file_path)
#         pred, output_page = pred_cot_dieas(cott_plant=file_path)
               
#         return render_template(output_page, pred_output = pred, user_image = file_path)
     

# if __name__ == "__main__":
#     app.run(threaded=False) 
