#Kata for ADLERE

This project is based on a Kata exercise for ADLERE.

## Backlog

As a user:
* I can choose a product and select a quantity from the website and add it to my cart
* I can see the price of each product and the total in my cart
* I can see the discounted price if the shop created a discount over a product

As an Admin:
* I can create a discount over a product

### What I added as a bonus:

* An admin can add/delete a product from the back-office

## Technologies used

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
* JSON-server is used as a fake database.
* The UI is based on the Bootstrap 4 framework

## How to run this project
* Clone it
* Install JSON-server: `npm install -g json-server`
* Install all the depedencies: `npm install`
* Run the app in the development mode: `npm start`
* Start the JSON-server: go to the `/api` folder and `json-server --watch db.json --port 3001`