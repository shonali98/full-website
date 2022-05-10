Asho
1. Create folder structure
1. create root folder as asho 
2. add frontend and backend folder
3. create src folder in frontend
4. create index.html with heading asho in src
5. run npm init in frontend folder
6. npm install live-server
7. add start command as live-server src --verbose
8. run npm start

2. design website 
1. create style css
2. link style.css to index.html
3. create div.grid-container
4. create header, main and footer
5. style html, body
6. style grid-container, header main and footer

3. create static home screen
1. create ul.products 
2. create li
3. create div.product
4. add . product-image, .product-name , .product-brand, .product-price
5. style ul.products and internal divs
6. duplicates 2 times to show 3 products


4. Render dynamic home screen
1. create data.js
2. export an array of 6 products
3. create screen/homescreen
4. export homescreeen as an object with render() method
5. implement render();
6. import data.js
7. retrn profuct mapped to lis inside an ul
8.  create app.js
9. link it to index.html as module
10. set main id to main-container
11. create router function
12. set main-container innerHTML to Homescreen.render()
13. set load event of window to router() function 


5. Build URL Router
    1. create routes as route:screen object for home screen
    2. create utils.js
    3. export parseRequestURL()
    4. set URL as hash address spli by slash
    5. return resource , id and verb of URL 
    6. update router()
    7. set request as parseRequestURL()
    8. build parsedURL and compare with routes
    9. if route exists render it , else render error 404
    10. create screens/ error404.js and render error message

6. create Node.js server

    1. run npm init in root Asho folder
    2. npm install express
    3. create server.js
    4. add start command as node backend/server.js
    5. require express
    6. move data.js from frontend to backend 
    7. create route for /api/products
    8. return products in data.js
    9. run npm start

7. load product from backend

    1. edit Homescreen.js
    2. make render async
    3. fetch product from '/api/products' in render()
    4. make router() async and call await HomeScreen.render()
    5. use cors on backend
    