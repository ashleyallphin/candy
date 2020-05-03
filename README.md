# candy
UTA-VIRT-FSF-PT-01-2020-U-LOL Homework #14


## Node Express Handlebars

### Overview

This is a candy app logger using MySQL, Node, Express, Handlebars and a homemade ORM.

### Before You Begin

* When a user submits a candy's name, the app will display the candy on the left side of the page, waiting to be devoured.

* Each candy in the waiting area also has a `Devour it!` button. When the user clicks it, the candy will move to the right side of the page.

* The app will store every candy in a database, whether devoured or not.

* [Run-through of how the app should work:](https://youtu.be/msvdn95x9OM).


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