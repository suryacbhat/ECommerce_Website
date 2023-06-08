import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controller/categoryController.js";


const router=express.Router();

// create category
router.post(
    "/create-category",
    requireSignIn,
    
    createCategoryController
  );


//update category
router.put("/update-category/:id",requireSignIn,updateCategoryController);

//getAll category
router.get("/get-category", categoryControlller);


//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,

    deleteCategoryCOntroller
  );




export default router;