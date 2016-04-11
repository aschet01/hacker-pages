Hackers = new Mongo.Collection('hackers');
if(Meteor.isServer){
	Meteor.publish('hackers',function listHackers(){
		return Hackers.find();
	});
}
