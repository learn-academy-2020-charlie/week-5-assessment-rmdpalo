# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new (appname) -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - starts an action
library - defines what the url will be
:id - argument that this takes
book - the controller's name
show - the method's 


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

create a new migration file with a descriptive name

in the migration file add the column you want with an integer for the data type and name it properly by using the name of the other model this model belongs to. 
Once everything is ready go to the console and run a rails db:migrate

rails generate migration add_foreign_key_to_table

and in the migration file 

add_column :table_name, :foreign_key, :integer




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes :string





5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < ApplicationRecord
    validates :shirt, :pants, :shoes, presence: true
end



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

for the model class it is Singular and PascalCase (i.e. ExampleModel)

for the table created with this command it will be plural and snake_case (i.e. example_models)