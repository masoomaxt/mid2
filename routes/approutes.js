
const express=require('express')
const appController=require('../controller/appcontroller')
const appRoute=express()


appRoute.get('/', appController.header)
appRoute.get('/displayAdduserpage', appController.displayAdduserpage)
appRoute.post('/adduser', appController.adduser)
appRoute.get('/viewAllUsers', appController.viewAllUsers)
appRoute.get('/deleteuser', appController.deleteuser)
appRoute.get('/updateuser', appController.updateuser)
appRoute.post('/updateuserbyid', appController.updateuserbyid)


module.exports=appRoute