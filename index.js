require('dotenv').config()

const app=require('./app')
app.listen(5000,function (){
    console.log("Running...")
})
