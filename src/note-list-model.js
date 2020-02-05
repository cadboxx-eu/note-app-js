(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNote = function (note) {
    this.list.push(new Note(note, this.addID()))
  }

  NoteList.prototype.viewAll = function () {
    return this.list
  }

  NoteList.prototype.addID = function() {
    return this.list.length
  }

  exports.NoteList = NoteList
})(this)