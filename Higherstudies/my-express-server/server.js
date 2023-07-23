const express = require('express')
const bodyParser=require("body-parser")
const mongoose = require('mongoose')
const ejs = require("ejs")
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const port = 3000
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/Registration", { useNewUrlParser: true,useUnifiedTopology:true }).then(() => {
  console.log(`Connection Succesful`);
}).catch((e) => {
  console.log(`No connection`);
})





// const user = new User({
//     sno: 2,
//     name: "Kishore",
//     email: "kishore@gmail.com",
//     phone: 9955556655,
//     password: "kishore"
// })

// user.save()



// const post = new Post({
//     description:"Only around 100-150 students across all Campuses will be shortlisted  for the MotorQ Process after Assessments which is likely to be in last week of November. MotorQ process is expected in the first week of December 2022. Those who get selected by MotorQ will undergo a Summer Internship and based on your performance in the Internship you it will be decided by MotorQ about Full Time Employment (FTE) with MotorQ.",
//     image:"postsection/post2.jpg",
//     Dept:"CIR Department",
//     name:"Deva Sunder"
// })

// post.save()
app.get('/', (req, res) => {
    
  res.render("2")
})

app.get('/reg', (req, res) => {
    
  res.render("registration_form")
})



var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/reg",(req,res)=>{
    var name = req.body.fname;
    var username = req.body.username;
    var email = req.body.email;
    var phno = req.body.phoneno;
    var father = req.body.faname;
    var mother = req.body.mname;
    var school = req.body.school;
    var college = req.body.college;
    var degree = req.body.bac;
    var cgpa = req.body.fname;
    var password = req.body.password;

    var data = {
        "name": name,
        "username": username,
        "email" : email,
        "phno": phno,
        "father": father,
        "mother": mother,
        "school": school,
        "college": college,
        "degree": degree,
        "cgpa": cgpa,
        "password" : password
    }


    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('/reg')

})


//new_reg

app.get('/newreg', (req, res) => {
    
  res.render("new_reg")
})

app.post("/newreg",(req,res)=>{
  var name = req.body.firstname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var gender = req.body.gender;
  var dob = req.body.dob;
  var city = req.body.city;
  var pin = req.body.pin;
  var state = req.body.state;
  var qualification = req.body.qualification;
  var interest = req.body.interest;
  var spec = req.body.spec;

  var data = {
      "name": name,
      "lastname": lastname,
      "email" : email,
      "mobile": mobile,
      "gender": gender,
      "dob": dob,
      "city": city,
      "prefCountry": pin,
      "state": state,
      "qualification": qualification,
      "interest": interest,
      "spec" : spec
  }


  db.collection('users').insertOne(data,(err,collection)=>{
      if(err){
          throw err;
      }
      console.log("New Registration Record Inserted Successfully");
  });

  return res.redirect('/newreg')

})




// app.post('/profabove', upload.single('image'), (req, res, next) => {
 
//   var obj = {
//       name: req.body.name,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   imgModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




