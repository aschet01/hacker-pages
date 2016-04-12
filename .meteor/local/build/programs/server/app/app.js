var require = meteorInstall({"lib":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collections.js                                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Hackers = new Mongo.Collection('hackers');                           // 1
                                                                     //
if (Meteor.isServer) {                                               // 3
	Meteor.publish('hackers', function () {                             // 4
		function listHackers() {                                           // 4
			return Hackers.find({ allegiance: "White Hat" });                 // 5
		}                                                                  //
                                                                     //
		return listHackers;                                                //
	}());                                                               //
}                                                                    //
///////////////////////////////////////////////////////////////////////

},"router.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/router.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Router.configure({ layoutTemplate: 'layout' });                      // 1
                                                                     //
Router.route('/');                                                   // 3
Router.route('/new-hacker', { name: 'newHackerForm' });              // 4
Router.route('/list-hackers', { name: 'hackerList' });               // 5
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./lib/router.js");
//# sourceMappingURL=app.js.map
