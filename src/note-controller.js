(function(exports) {
  function Controller(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
  }

  Controller.prototype.changeText = function(text) {
    let element = document.getElementById("app");
    element.innerHTML = text;
  }

  Controller.prototype.addNote = function(text) {
    this.noteListModel.addNote(text)
  }

  Controller.prototype.displayNotes = function() {
    var noteListView = new NoteListView(this.noteListModel)
    this.changeText(noteListView.displayNotes())
  }

  exports.Controller = Controller
})(this)









