const fs = require('fs');
const filePath = "./todoList.txt";


exports.readToDo = function (response, conentType) {
    console.log("Reading ToDo List");
    fs.readFile(filePath, "utf8", function(error, content) {
        var obj = JSON.parse(content);
        if (!((response == null) || (contentType == null))) {
            response.writeHead(200, { 'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
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

