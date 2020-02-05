(function(exports) {
  function Controller(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
  }

  Controller.prototype.changeText = function(text) {
    let element = document.getElementById("app");
    element.innerHTML = text;
  }

  var controller = function() {
    return new Controller()
  }

  exports.controller = controller
})(this)









