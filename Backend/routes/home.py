from flask import Blueprint, jsonify, make_response, render_template, request
from Backend.db import get_db
from Backend.models import Food


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