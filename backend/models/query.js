import { pool } from "./db.js";

const find = async () => {
  const QUERY = "SELECT * FROM recipe";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    return result[0];
  } catch (error) {
    console.error("Error while fetching data from DB", error);
  }
};

const findById = async (id) => {
  const QUERY = "SELECT * FROM recipe WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    return result;
  } catch (error) {
    console.error("Error while fetching data from DB", error);
  }
};

const createRecipe = async (name, ingredients, instructions, image_url) => {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS recipe (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        ingredients TEXT,
        instructions TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
  pool.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table:", err.stack);
      return;
    }
    console.log("Table created successfully:", result);
  });

  const QUERY = `INSERT INTO recipe(name, ingredients, instructions, image_url) VALUES (?, ?, ?, ?)`;

  try {
    const client = await pool.getConnection();
    const result = client.query(QUERY, [
      name,
      ingredients,
      instructions,
      image_url,
    ]);
    return result;
  } catch (error) {
    console.error("Error while pushing data into DB", error);
  }
};

const updateRecipe = async () => {};

const deleteRecipe = async () => {};

export { find, findById, createRecipe, updateRecipe, deleteRecipe };