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

  function mockElement() {
    var mockedElement = document.createElement('div')
    mockedElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockedElement)
  }

  newControllerIsInstantiated()
  controllerPassedNoteListModel()
  testsInnerHTML()
})(this)