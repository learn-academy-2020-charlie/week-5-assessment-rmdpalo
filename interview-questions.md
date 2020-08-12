# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  MVC stands for Model, View, and Controller. It breaks up our app into 3 pieces that interact with each other. Model is what our table/info looks like, Views are what we let the user see. Controller is what allows users and us to manipulate and interact with the app.

  Researched answer:
  To expand on my answer, it is commonly used for developing GUIs to separate internal information like databases and ORM models with how it's shown to the end user.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:
  CRUD stands for Create, Read, Update, and Delete. CRUD is the four basic things you want APIs that you build to do. Create data, read data, update existing data, and destroy data.

  Researched answer:  
  Expanding on my answer, a CRUD application uses forms to get data into and out of databases. It also provides developers a framework to follow in order to create full usable models.


3. What is a migration? Why would you use one?

  Your answer:
  A migration is our way to update our rails schema. In rails you never want to update the schema directly since there are a lot of behind the scenes processes that we don't see. migrations allow us to update the schema safely without breaking the app.

  Researched answer:
  expanding on my own answer, it also allows other developers working on the same project to update their schema if someone else made any changes, it also allows you to bring databases up to date whenever you roll out a new release. In general migrations just help keep things more synchronized across different machines/workstations.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer:
  I think it kind of depends on the situation.

  A person like me has_many computers.
  My personal computer, my personal laptop, LEARN's laptop.

  But if we look at it from the loaner laptop, a computer has_many persons using it. the person that had it before me, me, and the one that will use it after me.

  depending on the situation the model that will hold the foreign key is the model that belongs to another model.

  Researched answer:
  Looking back onto the syllabus, only other way I could think of is that a person can has one through if there was a specific way the person came to have that computer.



5. What is object-relational mapping?

  Your answer:
  It's a way for us to look into our database in tables. It also allows us to see the relationships between different models in these tables.

  Researched answer:
  It's a programming technique that converts information from incompatible types into objects that we can use. (using object oriented languages like ruby) This allows us to make queries using the programming language used.



6. What is a gem?

  Your answer:
A gem is a ruby package or library that people can download install and use.
  Researched answer:
It is a standard format for programmers to distribute ruby programs and libraries. 


7. Why is it important to have validations in your application?

  Your answer:
  It is important to have validations in your apps to make sure that potential users enter required data that we need, and to make sure that the data matches our specifications/requirements.

  Researched answer:
  Validations can prevent imperfections in your database. It ensures that data is usable, clean, and correct.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
a route that provides mapping between HTTP actions and CRUD actions.
- JSON
JavaScript Object Notation, it's a lightweight data-interchange format, commonly used for transmitting data in web apps.
- API
a set of functions and procedures allowing the creation of applications that access the features or data of an operating system or app. It stands for application programming interface, it defines interactions between multiple softwares.
- Endpoints
a point which an api connects with the software program.
- Strong params
It provides an interface for protecting attributes from end-user assignment. 