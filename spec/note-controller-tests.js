
(function(exports) {
  var noteController = new Controller()
  document.write("THE BEST TESTS")

  function newControllerIsInstantiated() {
    console.log('newControllerIsInstantiated')
    expect(noteController).toBe(new Controller())
  }

  function controllerPassedNoteListModel() {
    console.log('controllerPassedNoteListModel')
    expect(noteController.noteListModel).toBe(new NoteList())
  }

  function testsInnerHTML() {
    console.log('testsInnerHTML')

    mockElement()
    noteController.addNote('howdy')
    noteController.displayNotes()
    expect(document.getElementById("app").innerHTML).toInclude('howdy')
  }


  function viewSingleNote() {
    console.log('viewSingleNote')
    mockElement()
    let note = '?'.repeat(21)
    let noteId = noteController.noteListModel.list[0].id

    noteController.addNote(note)
    noteController.displayNotes()
    
    let link = document.querySelectorAll(`a[href='#${noteId}']`);
    console.log(link)
    link.click()
    expect(document.body.innerHTML).toInclude(note)

  }

  function mockElement() {
    var mockedElement = document.createElement('div')
    mockedElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockedElement)
  }



  newControllerIsInstantiated()
  controllerPassedNoteListModel()
  testsInnerHTML()
  viewSingleNote()
})(this)