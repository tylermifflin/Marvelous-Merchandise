# Marvelous Merchandise

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
The purpose of this app is to create a functioning backend database for an online retailer using express and sequelize to interact with the MySQL database of the company. This app will help the business owner easisly access, organize, create, update, and delete their products, categories, and tags in their database. The user will have api routes that they can access in Insomnia to GET all Products, Categories, and Tags, GET a single Product, Category, or Tag, POST a new Product, Category, or Tag, PUT to update a Product, Category, or Tag, and DELETE a Product, Category, or Tag. This app will help the business owner keep track of their inventory and make changes to their database as needed. I learned a lot about how to use sequelize together with express to more effifiently change data in MySQL databases.

Here is a link to the video showing the functionality of the app:
 https://drive.google.com/file/d/1LXNhiIw-RwDMrs_MU9P8vGXZrkLj6mH3/view?usp=share_link

 Here is a link to a screenshot of the Insomnia app showing the api routes:
 Screenshot 2023-05-22 at 2.46.40 PM.png

## Installation
The user will need to have Node and MySQL installed on their computer. They will then need to copy the repository and open integrated terminal in package.json and run npm i to get all of the dependencies. 
## Usage
The user will then need to create a .env file with their username and password for MySQL and use ecommerce_db. Then open integrated terminal in db folder and run mysql -u root and source schema.sql. Then open server.js in integrated terminal and enter npm run seed to grab the data from the seeds files. Then run node server.js to use the app and have the local host port start running. Then open Insomnia and use the api routes to GET, POST, PUT, and DELETE data from the database. 
## License
NA
## Contributing
I worked on this project by myself. I am open to any suggestions or contributions.
## Tests
I used Insomnia to test the api routes and made sure they all worked properly.
## Questions
If you have any questions, please contact me at [tyler.mifflin1@hotmail.com](mailto:tyler.mifflin1@hotmail.com) or visit my [GitHub profile](https://github.com/tylermifflin)
