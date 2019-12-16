const fs = require('fs');
const filePath = "./todoList.txt";


exports.readToDo = function () {
    console.log("Reading ToDo List");
    fs.readFile(filePath, "utf8", function(error, content) {
        console.log(content);
    });
};


exports.addToDo = function (task) {
    console.log("adding ToDo List");
    if (typeof task === "string") {
        fs.appendFile(filePath, task)
    }
};

exports.completeToDo = function () {
    console.log("completing ToDo List");
};

exports.deleteToDo = function () {
    console.log("deleting ToDo List");
};

