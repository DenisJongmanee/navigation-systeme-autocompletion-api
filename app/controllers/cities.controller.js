const mysql = require('mysql2');

connection_info = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'navigation_systeme_autocompletion'
}

exports.getCities = (req, res, next) => {
    const connection = mysql.createConnection(connection_info);
    id_department = req.params.idDepartment
    try {
        connection.connect();
        connection.query('SELECT * FROM cities WHERE department_code = ' + id_department, function(err, rows, fields) {
            if (err) throw err;            
            res.status(200).json(rows);
        });
    } catch(error) {
        console.log(error);
        res.status(400).send();
    } finally {
        connection.end();
    }
}