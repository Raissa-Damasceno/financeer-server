# Financeer

<br>



## Description

Personal finance platform to manage and track personal finances and investments trough out the month.


<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to see a nice logo and a brief description ( catchPhrase: example: "Smart way to manage your personal finances"), LOG IN and LOG OUT 
- **sign up** - As a user I want to sign up on the web page so that I can view and manage my finances, (if possible, view finances news)
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** -  As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **add-delete-edit** - As a user I want to add and delete and edit my expenses, add my income, etc so that I can keep track of my finances trough out the month
- **edit user** -  As a user I want to be able to edit my profile. (maybe add a profile photo)
- **reports** - As a user I want to be able to see reports(graphs how my total income is growing/declining).



<br>



## Server Routes (Back-end):



| **Method** | **Route**   | **Description**                                              | Request  - Body                |
| ---------- | ----------- | ------------------------------------------------------------ | ------------------------------ |
| `GET`      | `/`         | Main page route.  Renders home `index` view.                 |                                |
| `GET`      | `/login`    | Renders `login` form view.                                   |                                |
| `POST`     | `/login`    | Sends Login form data to the server.                         | { username, password }         |
| `GET`      | `/signup`   | Renders `signup` form view.                                  |                                |
| `POST`     | `/signup`   | Sends Sign Up info to the server and creates user in the DB. | {  name, username, password  } |
| `GET`      | `/main app` | Main app view. Renders `main app` view.                      |                                |
| `POST`     | `/main-app` | Private route. Sends main app view info, expenses, incomes and investments etc in DB.         |                                
| `GET`      | `/reports`  | Private route. Render the `reports` view.                    |                                |
| `GET`      | `/logout`   | Executes logout function and renders `index` view.           |                                |







## Models

User model:


```javascript
const users = new Schema ({
    name: String,
    username: String,
    password: password
})

```

Expenses model:

```javascript
const expensesSchema = new Schema ({ 

    
    description: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: {
        type: String,
        enum: ["clothes", "entertainment", "travel", "gifts", "pets", "investments", "education", "debts", "health", "purchases", "house", "bars", "restaurants", "subscriptions", "food", "transport", "other"]
        }    
})

```

Received:

```javascript
const receivedSchema = new Schema ({ 

    description: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { 
        type: String, 
        enum: ["salary", "loans", "wage", "others"] 
    }

})

```

Investment:

```javascript
const receivedSchema = new Schema ({ 

    }

})


<br>



## Backlog

[See the Trello board.](https://trello.com/b/k1Ky2PEI/financeer-v2)



<br>



## Links



### Git

The url to your repository and to your deployed project

*** Add

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link]()

### Contributors

Raissa Damasceno - [GitHubUsername](https://github.com/Raissa-Damasceno) - [LinkedinLink](https://www.linkedin.com/in/raissa-damasceno/)<br>
