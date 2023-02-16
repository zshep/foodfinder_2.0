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
  allfood = (
      db
        .query(Food)
        .order_by(Food.foodname.all_)
        
    )
  print(allfood)

  
  return jsonify(allfood = allfood[0])