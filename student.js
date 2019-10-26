var fs = require('fs')

var dbPath = './db.json'
exports.find = function(callback) {
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).student)
    })
}
exports.findById = function (id,callback) { 
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).student 
        var ret = students.find(function (item) { 
            return item.id === id
         })
        callback(null,ret)
    
    })
 }

 exports.save=function(student,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
         
        var students = JSON.parse(data).student
        student.id = students[students.length-1].id+1 
        students.push(student)
        var fileData= JSON.stringify({
              student:students
        })
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.updateById = function(student,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).student
        student.id = parseInt(student.id)
        var stu = students.find(function (item) { 
            return item.id === student.id
         })
        for (var k in student){
            stu[k] = student[k] 

        }
        var fileData= JSON.stringify({
            student:students
        })
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })


    })
}


exports.deleteById = function( id,callback ){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).student
        var del = students.findIndex(function(item){
            return item.id === parseInt(id)
        })
        students.splice(del,1)
        var fileData= JSON.stringify({
            student:students })
        fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })

    })
}
