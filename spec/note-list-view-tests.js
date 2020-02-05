
(function(exports) {
  let noteListView

  function notesDisplay() {
    console.log('displayNotes')

    let noteList = new NoteList()
    noteList.addNote('hello')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li></ul>')
  }

  function notesDisplayMultiple() {
    console.log('displayNotesMultiple')

    let noteList = new NoteList()
    noteList.addNote('hello')
    noteList.addNote('howdy')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li><li><div>howdy</div></li></ul>')
  }


  function notesDisplayNone() {
    console.log('displayNotesNone')

    let noteList = new NoteList()
    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('Nothing to see here...')
  }
  
  notesDisplay()
  notesDisplayMultiple()
  notesDisplayNone()
})(this)

