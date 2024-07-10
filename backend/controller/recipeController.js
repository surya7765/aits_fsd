import { create, find, deleteRow, findById } from "../models/query.js"

const getRicpes = async (req,res) => {
    try {
        const recipes = await find();
        res.json({recipes: recipes});
    } catch (error) {
        res.status(404).json({error: error});
    }
}

const getRicpesById = async(req,res) => {
    try {
        const recipes = await findById(req.params.id);
        res.json({recipes: recipes});
    } catch (error) {
        res.status(404).json({error: error});
    }
}

const addRecipes = async (req,res) => {
    const {name, ingredients, instructions, image_url} = req.body;
    if (!name || !ingredients || !instructions || !image_url) {
        console.log("Please provide data");
    } else{
        try {
            const data = await create(name, ingredients, instructions, image_url);
            res.status(200).json({data});
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
}

const updateRecipes = (req,res) => {

}

const deleteRecipes = async (req,res) => {
    try {
        const recipes = await deleteRow(req.params.id);
        res.json({recipes: recipes});
    } catch (error) {
        res.status(404).json({error: "Ooops! Something went wrong"});
    }
}

export {getRicpes, getRicpesById, updateRecipes, deleteRecipes, addRecipes}