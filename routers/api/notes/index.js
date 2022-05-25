const express = require("express");
const router = express.Router();
const DataService = require("../../../data");

// CRUD methods for '/api/notes' endpoint
// ----------------------------------------------------------------------------
// CRUD NAME    HTTP VERB     ENDPOINT            DESCRIPTION
// ----------------------------------------------------------------------------
// CREATE       POST          '/api/notes'        create note
// READ         GET           '/api/notes'        return all notes
//              GET           '/api/notes/:id'    return note equal to id
// UPDATE       PUT           '/api/notes/:id'    update note equal to id
// DELETE       DELETE        '/api/notes/:id'    delete note equal to id

// 'POST' = CREATE
router.post("/", (req, res) => {
  console.log("POST /api/notes");
  const note = req.body;
  const id = DataService.notes.createOne(note);
  res.status(201).json({ message: "Created Note", id });
});

// 'GET' = READ (all)
router.get("/", (req, res) => {
  console.log("GET /api/notes");
  const sort = req.query.sort || null;
  const notes = DataService.notes.findAll(sort);
  res.status(200).json({ message: "Returned Notes", notes });
});

// 'GET' = READ (one by id)
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`GET /api/notes/${id}`);
  const note = DataService.notes.findOne(id);
  res.status(200).json({ message: "Returned Note", note });
});

// 'PUT' = UPDATE (one by id)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`PUT /api/notes/${id}`);
  const updates = req.body;
  const note = DataService.notes.updateOne(id, updates);
  res.status(200).json({ message: "Updated Note", note });
});

// 'DELETE' = DELETE (one by id)
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`DELETE /api/notes/${id}`);
  const deletedId = DataService.notes.deleteOne(id);
  res.status(200).json({ message: "Deleted Note", id: deletedId });
});

module.exports = router;
