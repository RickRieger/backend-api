const Suggestion = require("../model/Suggestion");


async function getAllSuggestions(req, res) {
  try {
    let payload = await Suggestion.find({});
    res.json({ message: "success", data: payload });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function getAuthorSuggestion(req, res) {
  try {
    let payload = await Suggestion.find({ author: req.query.author });
    res.json({ message: "success", data: payload });
  } catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}
async function getSingleSuggestion(req, res) { 
  const id = req.params.id;
  try{
    let payload = await Suggestion.findById(id);
    res.json({ message: "success", data: payload});
  }catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}
async function createSuggestion(req, res) {
  const { title, author, likes, suggestion, anonymous} = req.body;
  try {
    let newSuggestion = new Suggestion({
      title,
      author,
      likes,
      suggestion,
      anonymous
    });
    let savedSuggestion = await newSuggestion.save();
    res.json({ message: "success", data: savedSuggestion });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function updateSuggestionById(req, res) {
  const id = req.params.id;
  try {
    let updatedSuggestion = await Suggestion.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json({ message: "success", data: updatedSuggestion});
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function deleteByID(req, res) {
  try {
    let payload = await Suggestion.findByIdAndRemove(req.params.id);
    res.json({ message: "success", data: payload });
  } catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}

module.exports = {
  getAllSuggestions,
  getAuthorSuggestion,
  createSuggestion,
  getSingleSuggestion,
  updateSuggestionById,
  deleteByID
};


async function getAllSuggestions(req, res) {
  try {
    let payload = await Suggestion.find({});
    res.json({ message: "success", data: payload });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function getAuthorSuggestion(req, res) {
  try {
    let payload = await Suggestion.find({ author: req.query.author });
    res.json({ message: "success", data: payload });
  } catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}
async function getSingleSuggestion(req, res) { 
  const id = req.params.id;
  try{
    let payload = await Suggestion.findById(id);
    res.json({ message: "success", data: payload});
  }catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}
async function createSuggestion(req, res) {
  const { title, author, likes, suggestion, anonymous} = req.body;
  try {
    let newSuggestion = new Suggestion({
      title,
      author,
      likes,
      suggestion,
      anonymous
    });
    let savedSuggestion = await newSuggestion.save();
    res.json({ message: "success", data: savedSuggestion });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function updateSuggestionById(req, res) {
  const id = req.params.id;
  try {
    let updatedSuggestion = await Suggestion.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json({ message: "success", data: updatedSuggestion});
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}
async function deleteByID(req, res) {
  try {
    let payload = await Suggestion.findByIdAndRemove(req.params.id);
    res.json({ message: "success", data: payload });
  } catch (err) {
    res.status(500).json({ message: "failure", data: err.message });
  }
}

module.exports = {
  getAllSuggestions,
  getAuthorSuggestion,
  createSuggestion,
  getSingleSuggestion,
  updateSuggestionById,
  deleteByID
};

