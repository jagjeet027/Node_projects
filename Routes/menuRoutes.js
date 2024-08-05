const express=require ('express');
const router=express.Router();
const menu_list= require('./../models/menu_list')


router.get('/menu_list', async (req, res) => {
    try {
        const menuData = new menu_list(req.body);
        const savedrestdata = await menuData.save();
        console.log('Data saved successfully');
        res.status(200).json(savedrestdata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'There is a network issue' });
    }
});
router.post('/menu_list', async (req, res) => {
    try {
        const menuData = new menu_list(req.body);
        const savedrestdata = await menuData.save();
        console.log('Data saved successfully');
        res.status(200).json(savedrestdata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'There is a network issue' });
    }
});

router.post('/:tasteType',async(req,res)=>{
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

router.put('/:id',async(req,res)=>{
    try{
        const updatedId=req.params.id;
        const updatedMenuListData= req.body;
        const updatedMenu=await menu_list.findByIdAndUpdate(updatedId,updatedMenuListData,{new:true});

        if(!updatedMenu){
            res.status(200).json(updatedMenu);
        }

        else{
            console.log('data updated');
            res.status(200).json(updatedMenuListData);
        }

    }catch(err){
        console.error(err);
        res.status(500).json({error:'There is a network issue'});
    }
})


module.exports=router