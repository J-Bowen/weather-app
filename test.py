import requests
import datetime
import unittest

URL =  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=86ccbefb8db547e08c6be822900d77a1'
t1 = datetime.datetime.now()
r = requests.get(url = URL)
t2 = datetime.datetime.now()

delay = ((t2-t1).microseconds/(1000000))
print(str((t2-t1).microseconds/(1000000)) +' seconds to get data')
print(r.json())


assert delay == 0, 'build failed, api took too long to respond'
# if(delay > 0):
#     raise SystemExit()