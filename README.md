# To Do App
###### Author: Meghnath Das

### Technologies Used
- React JS
- Material UI
- Responsive Design
- Cloud Firestore 
- Firebase CLI 
- Firebase Hosting

Hosted URL -> [https://md-todo.web.app/](https://md-todo.web.app/)

# Editor

![](https://meghnathdas.github.io/public/images/MD_Logo_138X138.png)

[http://meghnathdas.github.io/](http://meghnathdas.github.io/)

---

## Use-Case Diagram

The diagram below illustrates the main interactions in the **React MD ToDo App** between the user, the application, and Cloud Firestore.  

```mermaid
flowchart TD
    %% Define "actor" as a styled node
    U[User]:::actor

    %% Define system boundary
    subgraph SYSTEM["React MD ToDo Application"]
        UC1[("Add To-Do")]
        UC2[("Edit To-Do")]
        UC3[("Delete To-Do")]
        UC4[("Mark Complete / Incomplete")]
        UC5[("View / Filter To-Dos")]
    end

    %% External system
    DB[(Cloud Firestore)]

    %% User interactions
    U --> UC1
    U --> UC2
    U --> UC3
    U --> UC4
    U --> UC5

    %% App to database
    UC1 --> DB
    UC2 --> DB
    UC3 --> DB
    UC4 --> DB
    UC5 --> DB

    %% Real-time updates
    DB -->|"Snapshot Listener"| SYSTEM

    %% Style for actor
    classDef actor fill:#f9f,stroke:#333,stroke-width:2px;
```
