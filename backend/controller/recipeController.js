import { find } from "../models/query.js"

const getRicpes = async (req,res) => {
    try {
        const recipes = await find();
        res.json({recipes: recipes});
    } catch (error) {
        
    }
}

const getRicpesById = (req,res) => {

}

const addRecipes = (req,res) => {

}

const updateRecipes = (req,res) => {

}

const deleteRecipes = (req,res) => {

}

export {getRicpes, getRicpesById, updateRecipes, deleteRecipes, addRecipes}