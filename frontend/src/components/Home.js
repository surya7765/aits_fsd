import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/recipes")
      .then((response) => setRecipes((response.data.recipes)))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} sx={{ width: "300px" }}>
            <CardContent>
              <Typography variant="h6">
                <Link
                  to={`/recipes/${recipe.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {recipe.name}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        component={Link}
        to="/add-recipe"
      >
        Add New Recipe
      </Button>
    </Box>
  );
};

export default Home;
