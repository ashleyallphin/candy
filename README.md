Candy Logger
======


Ashely Allphin

UTA-VIRT-FSF-PT-01-2020-U-LOL Homework #14

Deployed to Heroku [here](https://candy-codingbootcamp-14.herokuapp.com/).


## Overview

This is a candy app logger using MySQL, Node, Express, Handlebars and a homemade ORM.

### Functionality

Homepage: 
![homepage][image]

[image]: public/assets/images/candy-index.png "Homepage"


When a user submits a candy's name, the app will display the candy on the left side of the page, waiting to be devoured.

Adding new candy: 
![new-candy][image1]

[image1]: public/assets/videos/new-candy.gif "Adding New Candy Action"

Each candy in the waiting area also has a `Devour!` button. When the user clicks it, the candy will move to the right side of the page.

Devouring candy: 
![devour-candy][image2]

[image2]: public/assets/videos/devour-candy.gif "Devouring Candy Action"


The app will store every candy in a database, whether devoured or not.

Table uses Devoured BOOLEAN to display whether devoured or not: 
![db_table][image3]

[image3]: public/assets/images/db-table.png "db_table"




#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── candys_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── candy.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── candy_style.css
│       └── img
│           └── candy.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


## Technologies Used
* MySQL
* Node 
* Express
* Handlebars
*a homemade ORM