
Template.exercice.events({
	'click #sendEx'(event, instance) {
		var title = instance.find('#exTitle').value;
		Exercices.insert({
			title : title,
		});
	},

	'click #sendNote'(event, instance) {
		var newNote = instance.find("#"+this._id).value; // Je voulais récupérer le bon input, mais il retourne undefined "#"+this.exId + "-" + this._id
		Eleves.update(this._id,{
			$push: {note : newNote}
		})
	},
	'click #deleteEx'() {
    Exercices.remove(this._id);
  },
});

Template.exercice.helpers({
	exercices(){
		return Exercices.find();
	}
});