const fs = require('fs');
const filePath = "./todoList.txt";


exports.readToDo = function () {
    console.log("Reading ToDo List");
    return fs.readFile(filePath, function(error, content) {
        console.log(content);
    });
};

exports.addToDo = function () {
    console.log("adding ToDo List");
};

exports.completeToDo = function () {
    console.log("completing ToDo List");
};

exports.deleteToDo = function () {
    console.log("deleting ToDo List");
};

