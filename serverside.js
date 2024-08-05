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



const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const Student = require('./models/students');
const rest_menu = require('./models/menu_list');



const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, I am jaggie. Meet my advance club where I put all my attention to get the order.');
});

app.post('/students', async (req, res) => {
    try {
        const studentData = new Student(req.body);
        const savedStudent = await studentData.save();
        console.log('Data saved successfully');
        res.status(200).json(savedStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'There is a network issue' });
    }
});

app.post('/menu_list', async (req, res) => {
    try {
        const menuData = new rest_menu(req.body);
        const savedrestdata = await menuData.save();
        console.log('Data saved successfully');
        res.status(200).json(savedrestdata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'There is a network issue' });
    }
});

app.post('/menu_list/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='Pasta-crazy' || tasteType=='Chowmin' || tasteType=='Pizza' ||tasteType=='FriedRice'||tasteType=='kadhi-chawal'){
            const menu=await rest_menu.find({name:tasteType});
            res.status(200).json(menu);
        }else{
            console.log('There is no such items available here.')
            res.status(404).json({error:'Menu not found'});
        }
    }catch(err){
            console.error(err);
            res.status(500).json({error:'There is a network issue'});
    }
})



const menuItemRoutes=require('./Routes/menuRoutes');
app.use('/menu_list',menuItemRoutes);


// Start server
const PORT = 5511;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});