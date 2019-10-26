var express = require('express')
 
var router = require('./router.js')
var bodyParser = require('body-Parser')

var app = express()
app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public/'))

app.use(router)

app.listen(3000,function(){
    console.log('running');
    
})   
         
            

     
      
 
    
    
    
    
    
    
   


