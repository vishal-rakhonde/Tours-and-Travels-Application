const express = require("express")
const cors = require("cors")//used to communite backend and frontend
const mysql = require("mysql2");
const bcrypt = require("bcryptjs")
const jsonWebToken = require("jsonwebtoken")

const app = express();
app.use(cors())

//middelware when request comes in string it converts into json
app.use(express.json());

//this used to connect to my sql client
const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'cdac',
    database:"Travel",
    keepAliveInitialDelay:10000,
    enableKeepAlive:true
})
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  
//CREATE
app.post("/create",(req,res)=>{
    const body = req.body;
    console.log({body})

    let str = "Insert into Locations (name,state,info,imageLink,price) values (?,?,?,?,?)"

    console.log("Body is there");
    if(body){
        try {
            connection.execute(str,[body.title,body.state,body.info,body.imgLink,body.price],(err,rows,fields)=>{
                if(err) throw err
                console.log("Rows after inserting ",rows)
            });
        } catch (error) {
            message = "error";
            console.log(error)
        }
    }

    


    res.json({body})
})

//READ
app.get("/get/:id",(req,res)=>{
    const {id}=req.params;
    console.log("Getting data by id ",id);
    let str = "select * from Locations where id=?";

    try {
        connection.execute(str,[id],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.json({success:true,data:rows});
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.json({success:false})
    }

})

//UPDATE
app.post("/update",(req,res)=>{
    const body = req.body;

    const {id} = body;
    console.log("Update data of id ", id);
    let str = "Update Locations set name=?, state=?, imageLink=?,price=?,info=? where id= "+id;

    try {
        connection.execute(str,[body.title,body.state,body.imgLink,body.price,body.info],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.json({success:true})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.json({success:false})
    }

    
})

//DELETE
app.post("/delete",(req,res)=>{

    const body = req.body;

    console.log("Delete request",body);
    const id = body.id;
    let str = "Delete from Locations where id=?";

    try {
        connection.execute(str,[id],(err,rows,fields)=>{
            if(err) throw err
            res.json({success:true})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.json({success:false})
    }



    
})

//READ
app.get("/get",(req,res)=>{
    let str = "Select * from Locations";
    try {
        connection.execute(str,(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.status(200).json({rows})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.status(500).json({"message":"error"})
    }


})

// Api call for login and generate token and send to client
app.post("/signin",(req,res)=>{
    console.log("pOST REQUEST for sigin ");
    const body = req.body;
    console.log({body})
    let str = "select * from users where email=?";
    let token = "";

    try {
        connection.execute(str,[body.email],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            if(rows.length===0){
                return res.status(500).json({"success":false,"message":"User not found"})
            }
            console.log({fields})
            const user = rows[0];
            console.log({user})
            const salt = user.salt;
            

            if(user){
 
                // The bcrypt is used for encrypting password.
                bcrypt.hash(body.password, salt, function (err, hash) {
                    console.log({hash})
                    // bcrypt.compare(user.password,hash, function(err,isMatched){
                    //     if(err) throw err;
                    //     console.log({isMatched})
                    //     if(isMatched){
                            // console.log("Password Matched and uswer authenticated");
                            // token = jsonWebToken.sign({"name":user.name},"MySecret");
                            // console.log({token})
                            // res.status(200).json({"token":token,"success":true})
                    //     }else{
                    //         res.status(500).json({"success":false})
                    //     }
                    // })
                    if(user.password===hash){
                        console.log("Password Matched and uswer authenticated");

                        //Code for generating Authentication token

                            token = jsonWebToken.sign({"name":user.name},"MySecret");
                            console.log({token})
                            res.status(200).json({"token":token,"userId":user.id,"userRole":user.role,"success":true})
                    }else{
                        res.status(500).json({"success":false})
                    }
                    
                })
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({"success":false})
    }

    
})

app.post("/signup",(req,res)=>{
    console.log("Post request on signup")
    const body = req.body;
    console.log(body)
    let str = "insert into Users(name,email,password,salt) values (?,?,?,?)";
    let message="ok";
    // Encryption of the string password
bcrypt.genSalt(10, function (err, Salt) {
 
    // The bcrypt is used for encrypting password.
    bcrypt.hash(body.password, Salt, function (err, hash) {
 
        if (err) {
            message = "error";
            return console.log('Cannot encrypt');
        }
 
        hashedPassword = hash;
        console.log({Salt});
        console.log({hash});
        try {
            connection.execute(str,[body.name,body.email,hashedPassword,Salt],(err,rows,fields)=>{
                if(err) throw err
                console.log("Rows after inserting ",rows)
            });
        } catch (error) {
            message = "error";
            console.log(error)
        }
        finally{
        }
       
       
 
        
    })
})

    



    res.json({"message":message})
})


app.get("/userBookings/:id",(req,res)=>{
    const {id}=req.params;
    console.log({id})
    let str = "select * from Bookings where user_id=?";

    try {
        connection.execute(str,[id],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.status(200).json({rows})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.status(500).json({"message":"error"})
    }

})

app.post("/booked",(req,res)=>{
    const body = req.body;
    console.log("Booking locations")
    console.log(body);

    const location = body[0];
    const locationId = location.id;
    const locationName = location.name;
    const userId = body[1];

    let str = "insert into bookings (booked_state_id, bookde_state_title, user_id) values (?,?,?)";

    try {
        connection.execute(str,[locationId,locationName,userId],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.status(200).json({success:true})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.status(500).json({success:false})
    }


    
})

app.post("/removeBooking/:id",(req,res)=>{
    const {id} = req.params;

    console.log("Remove Bookings of id ",id);

    let str = "Delete from bookings where booked_state_id=?";

    try {
        connection.execute(str,[id],(err,rows,fields)=>{
            if(err) throw err
            console.log("Rows after inserting ",rows)
            res.status(200).json({success:true})
        });
    } catch (error) {
        message = "error";
        console.log(error)
        res.status(500).json({success:false})
    }

})

app.listen(3000,()=>console.log("App is running on port 3000"))
