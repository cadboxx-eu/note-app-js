
(function(exports) {
  let noteListView
  let noteList = new NoteList()
  noteList.addNote('hello')

  function notesDisplay() {
    noteListView = new NoteListView(noteList)
    console.log('displayNotes')
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li></ul>')
  }

  
  notesDisplay()
})(this)

