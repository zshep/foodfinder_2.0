from models import Food
from db import Session, Base, engine

#drop and rebuild tables
Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)

db = Session()

#insert foods
db.add_all([
    Food(foodname='pizza', ishot =True),
    Food(foodname='quesadillas', ishot =True),
    Food(foodname='sheet pan', ishot =True),
    Food(foodname='sandwhiches', ishot= False),
    Food(foodname='soup', ishot=True)

])

db.commit()

db.close()