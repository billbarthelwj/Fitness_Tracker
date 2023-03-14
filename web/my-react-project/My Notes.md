RUN LOCALLY

Go to Web Apps / my-react-project folder in terminal

To start the project:


To run json-server:
  json-server --watch data/recipes.json --routers data/routes.json --port 8000

Jk about the above. The routes function included with json-server is very limited. Can't used nested ids. So use the below statement to start json-server
  json-server --watch data/recipes.json --port 8000


Control + 'C' cancels any job in the terminal




NUTRITION NOTES

Found this article about calculating macros
Specifically addresses calories per macro:
  1g protien = 4 calories
  1g carbs = 4 calories
  1g fat = 9 calories

Could potentially incorporate this into my app somewhere
1st Phorm does this when adding calories consumed

https://healthyeater.com/how-to-calculate-your-macros