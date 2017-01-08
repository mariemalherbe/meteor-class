
Template.eleve.events({
	'click #send'(event, instance) {
		var newName = instance.find('#name').value;
		var firstName = instance.find('#firstName').value;
		Eleves.insert({
			name : newName, 
			firstName : firstName,
			note : [],
		});
	},
	'click #delete'() {
    Eleves.remove(this._id);
  },
});

Template.exercice.helpers({
	eleves(){
		return Eleves.find();
	},
	myNote(note, id){
		return note[id];
	},
	idInput(exId, id) {
        return exId + '-' + id;
    },
    moyenne(note) {
        var sum = 0;
        for (var i = 0; i < note.length ; i++) {
            sum += parseInt(note[i]);
        }
        return sum / note.length;
    },
});

Template.eleve.helpers({
	eleves(){
		return Eleves.find();
	}

})