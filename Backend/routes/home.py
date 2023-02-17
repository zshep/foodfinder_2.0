import sys
from flask import Blueprint, jsonify, make_response, render_template, request
from Backend.db import get_db
from Backend.models import Food
from sqlalchemy.sql.expression import func


bp = Blueprint('home',__name__, url_prefix='/')


@bp.route('/')
def index():
    
    return "Hello Shep"

# route to get a random  single food item
@bp.route('/food')
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

# route to get all the foods
@bp.route('/allfood')
def get_allfood():
  db = get_db()
  try:
    allfood = (
        db
          .query(Food.foodname)
          .order_by(id=id)
          .first()
    )
  except:
    print('something went wrong with the get all food query')
    print(sys.exc_info()[0])
    
    print('This is all of the food items')
    """ print(allfood) """

  
  return jsonify(allfood=allfood[0])


@bp.route('/addfood', methods=['GET','POST'])
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

    #will need to figure out proper thing to return
    return render_template('main.html')
  else:
    return render_template('addfood.html')

@bp.route('/help')
def get_help():
  

  return 'What is going on??'