(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.displayNote = function() {
    return `<div>${this.note.text}</div>`
  }

  exports.SingleNoteView = SingleNoteView
})(this)