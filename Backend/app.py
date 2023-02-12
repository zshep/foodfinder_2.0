# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, render_template, request
from Backend.db import get_db
from Backend.models import Food
from  sqlalchemy.sql.expression import func, select
import sys
import datetime
  
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)
  
  
# main route for home
@app.route('/')
def index():
        
    return render_template(
      'main.html'
    )

# route to get food
# route to get a single food item
@app.route('/food')
def food_get():
  db = get_db()
  
  #get all the food items (for testing purposes)
  try:
    print('starting query')
    food = (
      db
        .query(Food.foodname)
        .order_by(func.rand())
        .first()
    )
    
  except:
    print('something went wrong with random query')
    print(sys.exc_info()[0])
  
  print('Here comes your food')
  print(food)

  
  return jsonify(food = food[0])

@app.route('/addfood', methods=['GET','POST'])
def add_food():
  if request.method == 'POST':
 
    data = request.get_json()
    db = get_db()
    print('about to do the post request')
    try:
      newFood = Food(
        foodname = data['foodname'],
        ishot = data['ishot']
      )

      #save to database
      db.add(newFood)
      db.commit()
      print('Newfood has been added', newFood)

    except:

      # insert failed, so send error to front end
      print(sys.exe_info()[0])

      # insert failed, so rollback and send error to front end
      db.rollback()
      return jsonify(message = 'adding new food has failed'), 500  

    return render_template('main.html')
  else:
    return render_template('addfood.html')

  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)