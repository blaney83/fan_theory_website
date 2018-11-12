
const connection = require("../config/connection.js");

function printQuestionMarks(num){
    let arr = [];

    for (var i = 0; i < num; i ++){
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(obj){
    let arr = [];
    for(var key in obj){
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
                arr.push(key + "=" + value);
            }
        }
    }
    return arr.toString();
};

let orm = {
    all: function(table, cb){
        let queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result)
        })
    },
    create: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString);
        connection.query(queryString, vals, (err, result)=>{
            if(err) throw err;
            console.log(vals);
            console.log(results);
            cb(result);
        })
    },
    update: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, (err, result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    delete: function(table, condition, cb){
        let queryString = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(queryString, (err, result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    readName: function(table, condition, cd){
        let queryString = "SELECT creator FROM " + table + " WHERE " + condition;
        connection.query(queryString, (err, result)=>{
            if(err) throw err;
            cb(result);
        })
    }
};

module.exports = {
    orm: orm
}