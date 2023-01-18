const mysql = require('mysql2');

connection_info = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'navigation_systeme_autocompletion'
}

exports.getDepartments = (req, res, next) => {
    const connection = mysql.createConnection(connection_info);
    id_region = req.params.idRegion
    try {
        connection.connect();
        connection.query('SELECT * FROM departments WHERE region_code = ' + id_region, function(err, rows, fields) {
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