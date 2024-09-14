const express = require('express');
const fs = require('fs');
const app = express();
const port = 3306;

const cors = require('cors');

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "course-database.c5yge4qs0zue.us-west-2.rds.amazonaws.com",
    port: port,
    user: 'admin',
    password: 'w2mm301!ff'
});


connection.connect();

app.use(cors());



// should we eventually just permanently maintain the database through aws ?

// reset database


// initialize database 


// rest api calls that will be made (what i want to get): 
// for home page:
// all courses where relevantField is non-null - do separate queries for each relevantfield (store as constant ?)
// for education page:
// pull all courses w/o relevant field info\

// note - should I make a separate table of projects i've made ? maybe not


/*
Sending all courses relevant to my current fields of interest

SELECT relevantField, JSON_ARRAYAGG(`description`)
FROM Education.Course as c
WHERE c.relevantField IN (
	SELECT c1.relevantField
	FROM Education.Course as c1
	WHERE c1.description = c.description
) GROUP BY c.relevantField;
*/

app.get('/', (req, res) => {
   
    connection.query('SELECT relevantField, JSON_ARRAYAGG(`description`) FROM Education.Course as c WHERE c.relevantField IN (SELECT c1.relevantField FROM Education.Course as c1 WHERE c1.description = c.description) GROUP BY c.relevantField;', function(err, tables) {
        res.send(tables);
    });
    
});

/* 
SELECT CONCAT(`dept`, `code`), description, grade, school, term, year 
FROM Education.Course;

possible filterings:
 - only computer science
 - only math
 - only computer science and math
 - order by oldest/latest
 - relevant field filtering
*/

app.get('/education/:subject-:yr-:field', (req, res) => {
    console.log(req.params);

    connection.query('SELECT CONCAT(`dept`, `code`), description, grade, school, term, year FROM Education.Course;', function(err, tables) {
        res.send(tables);
    });
});


app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
