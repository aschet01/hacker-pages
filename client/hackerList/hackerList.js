
Template.hackerList.onCreated(function hackerListOnCreated() {
  Meteor.subscribe('hackers');
});

Template.hackerList.helpers({
	'Hackers':function() {
		return Hackers.find();
	}
});


