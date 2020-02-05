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
          var shortText = this.noteList.viewAll()[i].text.slice(0,20)
          var id = this.noteList.viewAll()[i].id
          output.push(`<li><div><a href="#${id}">${shortText}</a></div></li>`)
          }
          return `<ul>${output.join("")}</ul>`
      } else {
        return 'Nothing to see here...'
      }
  }

  exports.NoteListView = NoteListView

})(this)