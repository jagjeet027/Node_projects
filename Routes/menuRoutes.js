// const express = require('express');
// const router = express.Router();
// const MenuList = require('./../models/menu_list');

// router.get('/menu_list', async (req, res) => {
//   try {
//     const menuItems = await MenuList.find();
//     console.log(menuItems)
//     res.status(200).json(menuItems);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue', message: err.message });
//   }
// });

// router.post('/menu_list', async (req, res) => {
//   try {
//     const menuData = new MenuList(req.body);
//     const savedMenuData = await menuData.save();
//     res.status(201).json(savedMenuData);  
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue', message: err.message });
//   }
// });
// router.post('/:tasteType',async(req,res)=>{
//     try{
//         const tasteType=req.params.tasteType;
//         if(tasteType=='Pasta-crazy' || tasteType=='Chowmin' || tasteType=='Pizza' ||tasteType=='FriedRice'||tasteType=='kadhi-chawal' || tasteType=='french-fries'){
//             const menu=await rest_menu.find({name:tasteType});
//             res.status(200).json(menu);
//         }else{
//             console.log('There is no such items available here.')
//             res.status(404).json({error:'Menu not found'});
//         }
//     }catch(err){
//             console.error(err);
//             res.status(500).json({error:'There is a network issue'});
//     }
// })

// router.put('/:id',async(req,res)=>{
//     try{
//         const updatedId=req.params.id;
//         const updatedMenuListData= req.body;
//         const updatedMenu=await menu_list.findByIdAndUpdate(updatedId,updatedMenuListData,{new:true});

//         if(!updatedMenu){
//             res.status(200).json(updatedMenuListData);
//         }

//         else{
//             console.log('data updated');
//             res.status(200).json(updatedMenu);
//         }

//     }catch(err){
//         console.error(err);
//         res.status(500).json({error:'There is a network issue'});
//     }
// })


// module.exports=router




// const express = require('express');
// const router = express.Router();
// const Menu_list = require('./../models/menu_list'); // Ensure you have defined this model correctly

// // Get all menu items
// router.get('/menu_list', async (req, res) => {
//   try {
//     const menuItems = await menu_list.find();
//     console.log('cannot find')
//     res.status(200).json(menuItems);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue', message: err.message });
//   }
// });

// // Add a new menu item
// router.post('/menu_list', async (req, res) => {
//   try {
//     const menuData = new menu_list(req.body);
//     const savedMenuData = await menuData.save();
//     console.log('cannot saved mongo server issues')
//     res.status(201).json(savedMenuData);  
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue', message: err.message });
//   }
// });

// // Get menu items by taste type
// router.post('/:tasteType', async (req, res) => {
//   try {
//     const tasteType = req.params.tasteType;
//     const validTasteTypes = ['Pasta-crazy', 'Chowmin', 'Pizza', 'FriedRice', 'kadhi-chawal', 'french-fries'];

//     if (validTasteTypes.includes(tasteType)) {
//       const menu = await menu_list.find({ name: tasteType }); // Ensure the model is MenuList
//       res.status(200).json(menu);
//     } else {
//       res.status(404).json({ error: 'Menu not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue' });
//   }
// });

// // Update a menu item by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedId = req.params.id;
//     const updatedMenuListData = req.body;
//     const updatedMenu = await menu_list.findByIdAndUpdate(updatedId, updatedMenuListData, { new: true });

//     if (!updatedMenu) {
//       res.status(404).json({ error: 'Menu item not found' });
//     } else {
//       res.status(200).json(updatedMenu);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'There is a network issue' });
//   }
// });

// module.exports = router;



// menuRoutes.js

const express = require('express');
const router = express.Router();
const MenuList = require('../models/menu_list');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuList.find();
    console.log('data fetched'); // Log the retrieved items for debugging
    res.status(200).json(menuItems);
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: 'There is a network issue', message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new menu item using the data from the request body
    const menuData = new MenuList(req.body);

    // Save the new menu item to the database
    const savedMenuData = await menuData.save();
    console.log('data saved')

    // Return the saved menu item as the response with a 201 status code
    res.status(201).json(savedMenuData);  
  } catch (err) {
    console.error(err); // Log any errors for debugging
    res.status(500).json({ error: 'There is a network issue', message: err.message });
  }
});
// Get menu items by taste type
router.post('/taste/:tasteType', async (req, res) => {
  try {
    const tasteType = req.params.tasteType.toLowerCase(); // Get the taste type from the URL parameter and convert it to lowercase

    const validTasteTypes = ['sweet', 'sour', 'spicy', 'bitter']; // Define valid taste types

    if (validTasteTypes.includes(tasteType)) {
      // Find menu items that match the taste type
      const menu = await MenuList.find({ taste: tasteType });
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: 'Invalid taste type. Valid types are sweet, sour, spicy, and bitter.' });
    }
  } catch (err) {
    console.error(err); // Log any errors for debugging
    res.status(500).json({ error: 'There is a network issue', message: err.message });
  }
});


// Update a menu item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedId = req.params.id; // Get the ID from the request parameters
    const updatedMenuListData = req.body; // Get the new data from the request body

    // Find the menu item by ID and update it with the new data
    const updatedMenu = await MenuList.findByIdAndUpdate(updatedId, updatedMenuListData, { new: true });

    if (!updatedMenu) {
      // If no menu item is found with the given ID, return a 404 status code
      res.status(404).json({ error: 'Menu item not found' });
    } else {
      console.log('data updated')
      // If the update is successful, return the updated menu item with a 200 status code
      res.status(200).json(updatedMenu);
    }
  } catch (err) {
    console.error(err); // Log any errors for debugging
    res.status(500).json({ error: 'There is a network issue', message: err.message });
  }
});

module.exports = router;
