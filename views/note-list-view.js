

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
      let i;
      for (i = 0; i < this.noteList.viewAll().length; i++) {
      return ('<ul>' + `<li><div>${this.noteList.viewAll()[i].text}</div></li>` + '</ul>')
      }
  }

  exports.NoteListView = NoteListView

})(this)