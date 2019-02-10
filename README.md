# calculator
A javascript calculator all the logic loads on the client side for now. This was a fun project I took on based on the awesome https://www.theodinproject.com/courses/web-development-101.


Index.html == HTML page containing skeleton of calculator and links to javascript and html files. 

styles.css == Contains the CSS (shock!). Pretty simple with a little bit of flexbox to get the keyboard working well.

scripts.js == DOM manipulation scripts. Event listeners to listen for keydowns and clicks. Single "press" function that performs the DOM manipulation and calls the more functional calc-scripts.js. 

calc-scripts.js == interprets user inputs and runs all the calculations. Mostly works by building and then interpreting arrays using the correct order of operations. All results will be rounded to 5 decimal places. 

calculator.spec.js == jasmine test cases for calc-scripts.js. Allows for testing of the runCalc function. Tests must provide an input array (taken from the displayArray in scripts.js) and an input key. "Enter" is the input key to test a calculation. We can also test the building of the display Array by providing keys that are integers or operators other than Enter. 
Hint: when the key is "Enter" the return should always be an array of length 1 containing an integers. When any other value is used as the key the return should be an array containing a series of strings. 

z-archive.txt == some old versions of key functions that I was too scared to delete at the time.

