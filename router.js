
var fs = require('fs')
var express = require('express')
var router = express.Router()
var Student = require('./student.js')
// 主页（渲染最新模板）
router.get('/student',function(req,res){
       
      Student.find(function(err,student){
            if(err){
                  return res.status(500).send('sorry')
                  
            }
            res.render('./index.html',{
                  fruits:[
                        'mango',
                        'pear',
                        'fuck'
                        ],
                  students:student
            })
      })
            
         
}) 

// 点击转至新增学生的表单界面
router.get('/student/new',function(req,res){
      res.render('./new.html')
            
         
}) 

// 点击添加学生信息
router.post('/students/new',function(req,res){
       Student.save(req.body,function(err){
             if(err){
                  return res.status(500).send('sorry')
             }
             res.redirect('/student')
       })

       

            
         
})

// 点击编辑按钮 跳转含有当前学生信息的界面
router.get('/student/edit',function(req,res){
      Student.findById(parseInt(req.query.id),function (err,ret) { 
            if(err){
                  return res.status(500).send('sorry')  
            }
            res.render('edit.html',{
                  student:ret
            })
       } )
            
         
}) 

// 发送更新学生信息请求
router.post('/student/edit',function(req,res){
      Student.updateById(req.body,function(err){ 
            if(err){
            return res.status(500).send('sorry')
            }
            res.redirect('/student')
      })
      
})

//删除学生
router.get('/student/delete',function(req,res){
       Student.deleteById(req.query.id,function(err){
             if(err){
                  return res.status(500).send('sorry')
             }
             res.redirect('/student')
       })
            
         
}) 

module.exports=router