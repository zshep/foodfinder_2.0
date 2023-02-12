from app.db import Base
from sqlalchemy import Column, Integer, String, Boolean

class Food(Base):
    __tablename__='foods'
    id = Column(Integer, primary_key=True)
    foodname = Column(String(20), unique=True, nullable=False)
    ishot = Column(Boolean, nullable=False)