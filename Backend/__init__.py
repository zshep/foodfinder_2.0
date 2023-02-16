from flask import Flask
from Backend.routes import home 
from Backend.db import init_db

def create_app(test_config=None):
  #set up app config
  app = Flask('Backend', static_url_path='/')



  #route for server
  @app.route('/')
  def server():
    return 'the force is strong with you, but your not a jedi yet'
  
  #register routes
  app.register_blueprint(home)

  init_db(app)

  return app