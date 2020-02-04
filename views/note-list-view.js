

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
      let i;
      let output = []
      let listLength = this.noteList.viewAll().length
      if (listLength > 0) {
        for (i = 0; i < listLength; i++) {
          output.push(`<li><div>${this.noteList.viewAll()[i].text}</div></li>`)
          }
          return `<ul>${output.join("")}</ul>`
      } else {
        return 'Nothing to see here...'
      }

  }

  exports.NoteListView = NoteListView

})(this)