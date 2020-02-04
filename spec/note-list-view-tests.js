
(function(exports) {
  let noteListView
  // let noteList = new NoteList()
  // noteList.addNote('hello')

  function notesDisplay() {
    console.log('displayNotes')

    let noteList = new NoteList()
    noteList.addNote('hello')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li></ul>')
  }

  function notesDisplayMultiple() {
    console.log('displayNotes')

    let noteList = new NoteList()
    noteList.addNote('hello')
    noteList.addNote('howdy')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li><li><div>howdy</div></li></ul>')
  }


  
  notesDisplay()
  notesDisplayMultiple()
})(this)

