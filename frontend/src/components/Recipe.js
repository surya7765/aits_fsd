import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipe.foodName}
          </Typography>
          <Typography variant="h6">Ingredients</Typography>
          <ul>
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>
                <Typography>{ingredient}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h6">Process</Typography>
          <Typography>{recipe.process}</Typography>
          <Typography variant="h6">Image</Typography>
          <img
            src={recipe.image}
            alt={recipe.foodName}
            style={{ maxWidth: "100%" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Recipe;
