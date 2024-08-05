const express=require ('express');
const router=express.Router();
const Student= require('./.../models/menu_list')


router.get('/students', async (req, res) => {
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

router.put('/:id',async (req,res)=>{
    try{
        const studentId=req.params.id;      //extract the id from the URL parameter 
        const UpdateStudentData= req.body;  // update the person data
        const updatedStudent=await Student.findByIdAndUpdate(studentId,UpdateStudentData,{
            new:true,    //return the updated document
            runValidators:true,  //run mongoose validation
        });

        if(!updatedStudent){
            return res.status(404).json({message:'Student not found'});
        }else{
            console.log('data updated');
            res.status(200).json(updatedStudent);
        }
        
    }catch(error){
        console.error(error);
        res.status(500).json({error:'There is a network issue'});
    }
})




module.exports=router