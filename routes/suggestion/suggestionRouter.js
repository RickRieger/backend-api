const express = require('express');
const router = express.Router();

const {
  getAllSuggestions, 
  createSuggestion,
  getSingleSuggestion,
  updateSuggestionById,
  deleteByID,
  getAuthorSuggestion,
} = require("./controller/suggestionController");

router.get("/",(req, res, next)=>{
  res.json({
    test: true,
  });
});

router.get("/get-all-suggestions", getAllSuggestions);
router.get("/get-by-author-suggestion", getAuthorSuggestion);
router.get("/get-suggestion-by-id/:id", getSingleSuggestion);
router.post("/create-suggestion", createSuggestion);
router.put("/update-by-id/:id", updateSuggestionById);
router.delete("/delete-by-id/:id", deleteByID);

module.exports = router;