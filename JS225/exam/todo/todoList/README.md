assumptions: 
1. input values are in string format. That includes input values for todoList's `add`, `update` & `initialize` method
2. todoList `initialize` method throws error when the list is not empty
3. todo object's `title` and `description` input can't be empty string. They are saved as string when creating the object
3. todo object's `month` input has to be '1' - '12' string or empty string and is converted to numbers when creating or updating the object. When the input is empty string, the current month is used
4. todo object's `year` input has to be 4 digits string or empty string and is converted to numbers when creating or updating the object. When the input is empty string, the current year is used
5. todo object's `completed` input has to be 'true' or 'false', completed is saved as boolean true and false when creating object
6. I'm assuming that todoList is just an object and there is no need for a todoList constructor since the project specification did not mention anything about creating multiple lists
7. modifying the `id` properting using `todoList.update` is not allowed
8. `add` takes todo data as argument
9. `initialize` takes todo set as argument
10. delete and getTodo takes todo object's id as argument
11. update takes two arguments first one is the todo object's id and the second is an object with the propertie and value sets that needs to be updated
12. when invalid `id` is used for delete or update or getTodo, throws an error
13. assumes that the todoManager methods are called with proper arguments (e.g. month year)

