

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
      let i;
      let output = []
      for (i = 0; i < this.noteList.viewAll().length; i++) {
      output.push(`<li><div>${this.noteList.viewAll()[i].text}</div></li>`)
      }

      return `<ul>${output.join("")}</ul>`
  }

  exports.NoteListView = NoteListView

})(this)