import urllib
import datetime
import json

from pymongo import MongoClient
from pymongo.errors import BulkWriteError
import requests
from bs4 import BeautifulSoup as bs

url = "http://mycolect.in:8080/pages"

response = urllib.urlopen(url)
data = json.loads(response.read())

print data

# use it like this
# data["maps"][0]["id"]
# data["masks"]["id"]
# data["om_points"]