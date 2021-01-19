# Finance Tracker

This project was designed as a homework assignment for MSU's coding bootcamp. 

This application was created to emphasize the use of MySql, CSS , express, express-handlebars, javascript, jQuery, & ORM. Also, this project was introduced the class to how to work in a team enviroment and how to use create branches and submit branches back into the master file without causing breaks in the program.

This project has been deployed to to Andy Dolen's Personal GitHub Page and Heroku. To get this project up and running, you can follow the deployment links that have been included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [Assignment](#assignment)
5. [File Structure](#filestructure)
6. [License](#license)
7. [Execution](Execution)
8. [Creators](#creators)


## Links

* [GitHub Repository](https://github.com/dolenand/Group-Project-2)
* [Deployed Heroku IO](https://project2-brew-hoppers.herokuapp.com/) 

## Project Overview <a name="projectoverview"></a>

* handelbars, CSS, jQuery, Chart.js and MySql Database were used to create a application that allows the user to create a financial tracker for the current month. The user can enter values and choose categories to the radius they would like to set to pull up the local breweries in that specific radius.  

## Demo:

![](https://github.com/dolenand/Group-Project-2/blob/master/public/videos/demovideo.gif)

## Assignment
### This assignment contains the following features:

* Monthly Spending Page
    * Contains a header
    
    * A input section to enter the amount of the expense.
    
    * A pull down list of the type of expense it is.

    * A enter button to enter the expense's value and category.

    * A clear button to erase all the saved expense values.

    ![Montly Spending](https://github.com/dolenand/Group-Project-2/blob/master/public/screenshots/monthlyspendingpage.png)


* Monthly Summary Page
    * This contains a chart that uses chart.js to graph out the total amount of each expenses and savings category.

    ![Montly Summary](https://github.com/dolenand/Group-Project-2/blob/master/public/screenshots/monthlysummarypage.png)

* Account Balance Page
    * A input section to enter the amount for the deposit to the account.
    
    * A pull down list of the type of account the amount is going into.

    * A enter button to enter the account's value and type of account.

    * A clear button to erase all the saved account values.

    ![Account Balances](![Montly Spending](https://github.com/dolenand/Group-Project-2/blob/master/public/screenshots/accountbalancespage.png)  



## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- GROUP-PROJECT-2
    |-- config
    |   |-- connection.js
    |   |-- orm.js
    |-- controllers
    |   |-- finances_controller.js
    |-- db
    |   |-- schema.sql
    |   |-- seeds.sql
    |-- models
    |   |--finances.js
    |-- public
    |   |-- assets
    |   |   |-- css
    |   |   |   |-- style.css
    |   |   |-- screenshots
    |   |   |   |-- monthlyspendingpage.png
    |   |   |   |-- monthlysummarypage.png
    |   |   |   |-- accountbalancespage.png
    |   |   |-- videos
    |   |   |   | - demovideo.gif
    |-- views
    |   |-- layouts
    |   |   |-- main.handlebars
    |   |-- partials/block
    |   |   |-- account-block.handlebars
    |   |-- accounts.handlebars
    |   |-- chart.handlebars
    |   |-- index.handlebars
    |-- .gitignore
    |-- LICENSE
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- server.js
```

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/Burger?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Just click on the Active site link in the link section or go to
https://project2-brew-hoppers.herokuapp.com/ in the web browser.

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* **Emily Herman** - [Git Hub Profile](https://github.com/EmilyAH-01)
* **Andy Dolen** - [Git Hub Profile](https://github.com/dolenand)
* **Christian Marcano** - [Git Hub Profile](https://github.com/Cmarcano7)
* **
* MSU BootCamp