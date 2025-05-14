//import modules
const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()

//use of middlewares

app.use(bodyparser.json())
app.use(cors())

//connection of database
 const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shops'
 })
 db.connect(err=>{
if(err){
    console.log('not connected',err)
}
else{
    console.log('db is connected')
}
 })
//creation of endpoint

app.post('/insert',(req,res)=>{
    const {name,location}=req.body
    const insert=`INSERT INTO customer() VALUES (NULL,'${name}','${location}')`
    db.query(insert,(err)=>{
        if(err){
            res.json({message:'failed to insert'})
        }
        else{
            res.json({message:'inserted done'})
        }
    })
})
// endpoint for select all user
app.get('/view',(req,res)=>{
    const sql=`SELECT * FROM customer`
    db.query(sql,(err,result)=>{
        if(err){
            res.json({message:'failed to view records'})
        }
        else{
            res.json({result})
        }
    })
})

//select customer by ID
app.get('/customer/:id',(req,res)=>{
    const {id}=req.params
    db.query(`SELECT * FROM customer WHERE id='${id}'`, (err,data)=>{
        if(err) return res.json({error: err})
        return res.json({
            message: 'Customer Fetched',
            result: data[0]
        })
    })
})

//endpoint for deleting user

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    db.query(`DELETE FROM customer WHERE id='${id}'`,err=>{
        if(err) return res.json({message: 'failed to delete customer', error: err})
        
        return res.json({message: 'Customer Deleted successfully!'})
    })
})

//update ending point
app.put('/update/:id',(req,res)=>{
    const {id}=req.params
    const {name,location}=req.body
    const sql=`UPDATE customer SET name='${name}', location='${location}' WHERE id='${id}'`

    db.query(sql, err=>{
        if(err) throw err
        return res.json({message: 'Update done'})
    })
})
// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql= 'SELECT * FROM users WHERE username = ? AND password = ?'
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: 'Database error' })
        }

        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful' })
        } else {
            res.json({ success: false, message: 'Invalid credentials' })
        }
    })
})
//add a new user to login
app.post('/user',(req,res)=>{
    const {username,password}=req.body
    const sql=`INSERT INTO users() VALUES (NULL,'${username}','${password}')`
    db.query(sql,(err)=>{
        if(err){
            res.json({message:'failed to be added'})
        }
        else{
            res.json({message:'you are added'})
        }
    })
})

  const port=4000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
 })
