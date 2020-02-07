
(function(exports) {
  let noteListView

  function notesDisplay() {
    console.log('displayNotes')

    let noteList = new NoteList()
    noteList.addNote('hello')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div><a href="#notes/0">hello</a></div></li></ul>')
  }

  function notesDisplayMultiple() {
    console.log('displayNotesMultiple')

    let noteList = new NoteList()
    noteList.addNote('hello')
    noteList.addNote('howdy')

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('<ul><li><div><a href="#notes/0">hello</a></div></li><li><div><a href="#notes/1">howdy</a></div></li></ul>')
  }


  function notesDisplayNone() {
    console.log('displayNotesNone')

    let noteList = new NoteList()
    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual('Nothing to see here...')
  }

  function notesDisplayFirst20Characters() {
    console.log('displayNotesMultiple')

    let noteList = new NoteList()
    let longNote = '!'.repeat(21)
    let shortNote = '!'.repeat(20)
    noteList.addNote(longNote)

    noteListView = new NoteListView(noteList)
    
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href="#notes/0">${shortNote}</a></div></li></ul>`)
  }
  
  
  notesDisplay()
  notesDisplayMultiple()
  notesDisplayNone()
  notesDisplayFirst20Characters()
})(this)

