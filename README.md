# To Do App
**To-Do** is a modern, responsive task management application built with React JS and Material UI, powered by Cloud Firestore for real-time data syncing. It enables users to add, edit, delete, and track to-do items effortlessly, ensuring a smooth device experience.

### Use-Case Diagram

The diagram below illustrates the main interactions in the **ToDo App** between the user, the application, and Cloud Firestore.  

```mermaid
flowchart TD
    %% Define "actor" as a styled node
    U[User]:::actor

    %% Define system boundary
    subgraph SYSTEM["ToDo Application"]
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

### Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant UI as React UI (ToDo Form)
    participant S as Firestore Service
    participant DB as Cloud Firestore
    participant L as Real-time Listener

    U->>UI: Type new to-do & submit
    UI->>S: Call addTodo(todoData)
    S->>DB: Write new document
    DB-->>S: Write acknowledged
    S-->>UI: Return success status
    DB-->>L: Trigger snapshot listener with new data
    L->>UI: Update state with new to-do list
    UI->>U: Render updated list with new to-do
```

### Technologies Used
- React JS
- Material UI
- Responsive Design
- Cloud Firestore 
- Firebase CLI 
- Firebase Hosting

Hosted URL -> [https://md-todo.web.app/](https://md-todo.web.app/)

### Editor/Author
![](https://meghnathdas.github.io/public/images/MD_Logo_138X138.png)

[http://meghnathdas.github.io/](http://meghnathdas.github.io/)
