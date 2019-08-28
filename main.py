from flask import Flask, render_template
import requests, datetime, unittest

# from test import testClass 

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('main.html.j2')

@app.route('/test')
def test():
    return render_template('main.html.j2')

if __name__ == '__main__':
    app.run(debug=True)
    a_website = "http://127.0.0.1:5000/"
    #webbrowser.get('chrome').open_new(a_website)


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