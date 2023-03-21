import json
import sys
from flask import Blueprint, jsonify, make_response, render_template, request
from Backend.db import get_db
from Backend.models import Food
from sqlalchemy.sql.expression import func


bp = Blueprint('home', __name__, url_prefix='/')


@bp.route('/')
def index():
    return "Hello Shep"

# route to get a random  single food item
@bp.route('/food')
def food_get():
  db = get_db()

  # get one random food (foodname and ishot)
  try:
    print('starting query')
    food = (
      db
        .query(Food)
        .order_by(func.rand())
        .first()
    )

  except:
    print('something went wrong with random query')
    print(sys.exc_info()[0])

  print('Here comes your food')
  print(food.foodname)
  print(food.ishot)

  response = {
    'foodname': food.foodname,
    'ishot': food.ishot
  }

  return make_response(response, 201)

#route to get 1 single random food that is hot
@bp.route('/food/hot')
def food_gethot():
  db = get_db()

  # get one random food (foodname and ishot)
  try:
    print('starting hot query')
    food = (
      db
        .query(Food)
        .filter(Food.ishot == True)
        .order_by(func.rand())
        .first()
    )

  except:
    print('something went wrong with random query')
    print(sys.exc_info()[0])

  print('Here comes your food')
  print(food.foodname)
  print(food.ishot)

  response = {
    'foodname': food.foodname,
    'ishot': food.ishot
  }

  return make_response(response, 201)


# route to get all the foods for See Food function
@bp.route('/allfood')
def get_allfood():
  db = get_db()
  try:
    print('starting get all food query')
    allfood = (
        db
          .query(Food)
          .all()
          
    )
  except:
    print('something went wrong with the get all food query')
    print(sys.exc_info()[0])

  
  foodList = []

  print('This is all of the food items')
  for food in allfood:
     
    response = {
        'foodname': food.foodname,
        'ishot': food.ishot,
      }
    foodList.append(response)
   
  print('foodList is...', foodList)
  
  
  return make_response(foodList, 201)




# route to add food for add food function
@bp.route('/addfood', methods=['POST'])
def add_food():
  data = request.get_json()
  db = get_db()
  print('about to do the post request')

  try:
    newFood = Food(
      foodname=data['foodname'],
      ishot=data['ishot'],
    )
    print(newFood)

    # save to database
    db.add(newFood)
    db.commit()
    print('Newfood has been added', newFood.foodname)
    print(newFood.foodname)


  except:

      # insert failed, so send error to front end
      print(sys.exe_info()[0])

      # insert failed, so rollback and send error to front end
      db.rollback()
      return jsonify(message='adding new food has failed'), 500

    # will need to figure out proper thing to return
  foodData = newFood.foodname
  response = make_response( foodData, 201)
  return response
  
# route to delete food item
@bp.route('/deletefood/<foodname>', methods =['DELETE'])
def delete_food(foodname):
  
  db = get_db()
  print('about to do the delete request')

  try:
    db.delete(db.query(Food).filter(Food.foodname ==foodname).one())
    db.commit()
    print('food was deleted')
  except:
    print(sys.exc_info()[0])
    db.rollback()

    return jsonify(message = 'food item not found'), 404

  response = make_response('', 201)

  return response


# random route
@bp.route('/help')
def get_help():
  

  return 'What is going on??'