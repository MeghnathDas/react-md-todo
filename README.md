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
flowchart LR
    actor(User)["👤 User"]

    subgraph App["React MD ToDo App (Web UI)"]
      UC_Add("(Add To-Do)")
      UC_Edit("(Edit To-Do)")
      UC_Delete("(Delete To-Do)")
      UC_Toggle("(Mark Complete / Incomplete)")
      UC_List("(View / Filter To-Dos)")
      UC_Offline("(Optimistic UI / Local State)")
    end

    ext[(Cloud Firestore)]
    log["Change Listener / Real-time Updates"]

    User --> UC_Add
    User --> UC_Edit
    User --> UC_Delete
    User --> UC_Toggle
    User --> UC_List

    UC_Add --> ext
    UC_Edit --> ext
    UC_Delete --> ext
    UC_Toggle --> ext
    UC_List <-->|"query/read"| ext

    ext --> log --> App

    User -. triggers .-> UC_Offline
    UC_Offline -. updates UI .-> App
