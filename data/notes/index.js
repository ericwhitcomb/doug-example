const notes = {};
let index = 0;

module.exports = {
  createOne: (note) => {
    console.log("DataService.notes.createOne()");
    index++;
    console.log(index);
    notes[index] = {
      id: index,
      date: new Date(),
      title: note.title || "",
      content: note.content || "",
    };
    console.log(notes);
    return index;
  },

  findAll: (sort = null) => {
    console.log("DataService.notes.findAll()");
    const notesList = Object.values(notes);
    console.log(notesList);
    if (sort === "ASC") {
      notesList.sort((a, b) => a.date - b.date);
    } else if (sort === "DESC") {
      notesList.sort((a, b) => b.date - a.date);
    }
    return notesList;
  },

  findOne: (id) => {
    console.log("DataService.notes.findOne()");
    return notes[id];
  },

  updateOne: (id, updates) => {
    console.log("DataService.notes.updateOne()");
    if (updates.title) notes[id].title = updates.title;
    if (updates.content) notes[id].content = updates.content;
    return notes[id];
  },

  deleteOne: (id) => {
    console.log("DataService.notes.deleteOne()");
    delete notes[id];
    return id;
  },
};
