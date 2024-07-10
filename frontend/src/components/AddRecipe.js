import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [process, setProcess] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      foodName,
      ingredients,
      process,
      image,
    };

    axios
      .post("http://localhost:5000/api/recipes", newRecipe)
      .then((response) => {
        console.log("Recipe added:", response.data);
        navigate.push("/");
      })
      .catch((error) => console.error("Error adding recipe:", error));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add New Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Food Name"
            variant="outlined"
            fullWidth
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Ingredients (comma separated)"
            variant="outlined"
            fullWidth
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Process"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add Recipe
        </Button>
      </form>
    </Box>
  );
};

export default AddRecipe;
