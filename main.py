from flask import Flask, render_template
import datetime,unittest,requests
from google.appengine.api import memcache

use_memcache = True

# try: 
#     from google.appengine.api import memcache
# except ModuleNotFoundError:
#     use_memcache = True
#     print('memcache module not found')



app = Flask(__name__)


def setDataInMemcache():
    print(type(memcache))
    if use_memcache:
        memcache.add(key="key1", value="test123", time=3600)

    return None

def getDataFromMemcache():


    return None

def getDataFromAPI():
    uk = requests.get(url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=86ccbefb8db547e08c6be822900d77a1')
    fr = requests.get(url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=86ccbefb8db547e08c6be822900d77a1')
    de = requests.get(url = 'https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&APPID=86ccbefb8db547e08c6be822900d77a1')
    dk = requests.get(url = 'https://api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&APPID=86ccbefb8db547e08c6be822900d77a1')
    
    result = {
        'UK': uk.json(),
        'FR': fr.json(),
        'DE': de.json(),
        'DK': dk.json()
    }

    setDataInMemcache()

    return result





@app.route('/')
def homepage():
    _weather_data = getDataFromAPI()

    return render_template('main.html.j2', weather_data=_weather_data)

if __name__ == '__main__':
    app.run(debug=True)
    a_website = "http://127.0.0.1:5000/"
    webbrowser.get('chrome').open_new(a_website)


    
# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys

# driver = webdriver.Chrome()
# driver.get("http://www.python.org")
# assert "Python" in driver.title
# elem = driver.find_element_by_name("q")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)
# assert "No results found." not in driver.page_source
# driver.close()