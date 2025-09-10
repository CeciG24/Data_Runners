
class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:1234@localhost:5432/baseDataRunners"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
