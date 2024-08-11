// const express=require ('express');
// const app= express();

// const students=require('./models/students')



// app.get('/' ,(req,res)=>{
//     res.send('Hello i am jaggie .meet my advance club where i put my all attention  to get the order ');
// })
// // app.get('/south' ,(req,res)=>{
// //    res.send('Hello i am jaggie .meet my advance club where i put my all attention  to get the order ');
// // })


// // app.get('/pushpa',(req,res)=>{
// //     res.send('pushpa is ready to be watched online.');
// // })


// // app.get('/pushpa2', (req,res)=>{
// //     res.send("pushpa 2 is to be comming on august.")
// // })

// app.get('/eagle', (req,res)=>{
//     res.send("Eagle is to Action and thriller movie on pan india level..")
// })
// // app.get('/bahubali', (req,res)=>{
// //     res.send("bahubali s the beggining is the most fantacy and thrileler movie of south indian")
// // })

// // app.get('/kgf', (req,res)=>{
// //     res.send("kgf is a  best movie of yash raj hero with yash universe.")
// // })

// // app.get('/movies',(req,res)=>{
// //     return res.json({
// //         Genre: "south-indian",
// //         listNo: 1,
// //         moviesTitle: "Double Smart Shankar",
// //         moviesYear: 2022,
// //         moviesRating: 4.5,
// //         moviesDirector: "Rajamouli",
// //         listCategories: [
// //             "smart shankar",
// //             "businessmen2",
// //             "Skanda",
// //             "The Worrior"
// //         ]
// //         });
// // })


// // app.post('/movies',(req,res)=>{
// //     var moviesList={
// //     Genre: "south-indian",
// //     listNo: 1,
// //     moviesTitle: "Double Smart Shankar",
// //     moviesYear: 2022,
// //     moviesRating: 4.5,
// //     moviesDirector: "Rajamouli",
// //     listCategories: [
// //         "smart shankar",
// //         "businessmen2",
// //         "Skanda",
// //         "The Worrior"
// //     ]
// //     }

// //    return res.status(201).json(moviesList);
// // })




// const bodyParser=require('body-parser');
// const connectDB = require('./db');
// app.use(bodyParser.json())


// app.post('/students',async (req,res)=>{
//     try{
//         const data =req.body
//         const studentData= new students(data)
//         const response= await studentData.saved()

//         console.log('data saved')
//         res.status(200).json(response)

//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:'there is a network issues'})

//     }

// })


// app.listen(5511,()=>{
//     console.log("server is running on port 5511");
// });

// serverside.js

// serverside.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();

const menuItemRoutes = require('./Routes/menuRoutes');
const studentsInfoRoutes=require('./Routes/studentsRoutes');
const app = express();

connectDB(); // Connect to MongoDB

app.use(bodyParser.json());
app.use(express.json());

app.use('/menu_list', menuItemRoutes);
app.use('/students', studentsInfoRoutes);

app.get('/', (req, res) => {
  res.send('Hello, I am Jaggie. Meet my advance club where I put all my attention to get the order.');
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello, I am jaggie. Meet my advance club where I put all my attention to get the order.');
// });
// app.get('/', async (req, res) => {
//   try {
//     const menuItems = await Menu_list.find(); // find() with no arguments is equivalent to find({})
//     console.log(menuItems); // For debugging purposes only
//     res.status(200).json(menuItems);
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     res.status(500).json({ error: 'There is a network issue', message: err.message });
//   }
// });



// const studentRouter = require('./Routes/studentsRoutes');
// // const MenuList = require('./models/menu_list');
// // app.use('/students', studentRouter);

// const PORT = process.env.PORT || 8081;

// // app.post("/add-menu",async(req,res)=>{
// //     const {name,price} = req.body;
// //     const newItem = await MenuList.create({name,price})
// //     res.json(newItem)
// // })

// // Start server
// app.listen(8081, () => {
//   console.log(`Server is running on port ${PORT}`);
// });