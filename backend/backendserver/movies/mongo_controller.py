import pymongo

client = pymongo.MongoClient('localhost', 27017)
movies_db = client.movies

def find(collection_name):
    collection = movies_db[collection_name]
    res = collection.find()
    return res
def insert_one(collection_name, doc):
    collection = movies_db[collection_name]
    res = collection.insert_one(doc)
    return res