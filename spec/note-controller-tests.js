
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

    let note = '?'.repeat(21)

    noteController.addNote(note)
    noteController.displayNotes()

    noteController.showNoteOnLinkClick()
    window.location.hash = "#notes/0"
    window.location.hash = "#notes/1"

    console.log(document.getElementById('app').innerHTML)
    
    expect(document.getElementById('app').innerHTML).toInclude(note)
  }

  function mockElement() {
    var mockedElement = document.createElement('div')
    mockedElement.id = 'app'
    document.getElementsByTagName('body').item(0).appendChild(mockedElement)
  }

  function clearAppElement() {
    var element = document.getElementById('app')
    return element.innerHTML = ""
  }

  newControllerIsInstantiated()
  controllerPassedNoteListModel()
  testsInnerHTML()
  viewSingleNote()
})(this)