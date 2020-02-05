
(function(exports) {
  let noteList = new NoteList()

  function displaySingleNote() {
    console.log('displaySingleNote')

    let note = new Note('hello world!')
    let singleNoteView = new SingleNoteView(note)

    expect(singleNoteView.displayNote()).toInclude('hello world!')
  }

  displaySingleNote()
})(this)