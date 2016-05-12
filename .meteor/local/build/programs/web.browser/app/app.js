var require = meteorInstall({"client":{"hackerList":{"hackerList.html":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/hackerList/template.hackerList.js                                                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("hackerList");                                                                            // 2
Template["hackerList"] = new Template("Template.hackerList", (function() {                                     // 3
  var view = this;                                                                                             // 4
  return [ HTML.Raw('<div class="row">\n    <div class="col-xs-4 col-xs-offset-4">\n      <h1>Hackers</h1>\n      <hr>\n    </div>\n  </div>\n\n  '), HTML.DIV({
    "class": "row"                                                                                             // 6
  }, "\n    ", HTML.DIV({                                                                                      // 7
    "class": "col-xs-4 col-xs-offset-4"                                                                        // 8
  }, "\n      ", Blaze.Each(function() {                                                                       // 9
    return Spacebars.call(view.lookup("Hackers"));                                                             // 10
  }, function() {                                                                                              // 11
    return [ "\n        ", Blaze.If(function() {                                                               // 12
      return Spacebars.call(view.lookup("createdByUser"));                                                     // 13
    }, function() {                                                                                            // 14
      return [ "\n          ", HTML.H4(Blaze.View("lookup:hackerName", function() {                            // 15
        return Spacebars.mustache(view.lookup("hackerName"));                                                  // 16
      })), "\n          ", HTML.P(HTML.STRONG("Legal Name:"), " ", Blaze.View("lookup:legalName", function() {
        return Spacebars.mustache(view.lookup("legalName"));                                                   // 18
      })), "\n          ", HTML.P(HTML.STRONG("Email:"), " ", Blaze.View("lookup:email", function() {          // 19
        return Spacebars.mustache(view.lookup("email"));                                                       // 20
      })), "\n          ", HTML.BR(), "\n        " ];                                                          // 21
    }), "\n      " ];                                                                                          // 22
  }), "\n    "), "\n  ") ];                                                                                    // 23
}));                                                                                                           // 24
                                                                                                               // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hackerList.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/hackerList/hackerList.js                                                                             //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               //
Template.hackerList.onCreated(function () {                                                                    // 2
  function hackerListOnCreated() {                                                                             // 2
    Meteor.subscribe('hackers');                                                                               // 3
  }                                                                                                            //
                                                                                                               //
  return hackerListOnCreated;                                                                                  //
}());                                                                                                          //
                                                                                                               //
Template.hackerList.helpers({                                                                                  // 6
  'Hackers': function (_Hackers) {                                                                             // 7
    function Hackers() {                                                                                       //
      return _Hackers.apply(this, arguments);                                                                  //
    }                                                                                                          //
                                                                                                               //
    Hackers.toString = function () {                                                                           //
      return _Hackers.toString();                                                                              //
    };                                                                                                         //
                                                                                                               //
    return Hackers;                                                                                            //
  }(function () {                                                                                              //
    return Hackers.find();                                                                                     // 8
  }),                                                                                                          //
                                                                                                               //
  'createdByUser': function () {                                                                               // 11
    function createdByUser() {                                                                                 // 11
      return this.createdBy === Meteor.userId();                                                               // 12
    }                                                                                                          //
                                                                                                               //
    return createdByUser;                                                                                      //
  }()                                                                                                          //
});                                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layout":{"layout.html":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/layout/template.layout.js                                                                            //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("layout");                                                                                // 2
Template["layout"] = new Template("Template.layout", (function() {                                             // 3
  var view = this;                                                                                             // 4
  return HTML.BODY("\n  	", Spacebars.include(view.lookupTemplate("navbar")), "\n    ", HTML.DIV({             // 5
    "class": "container"                                                                                       // 6
  }, "\n      ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n  ");                          // 7
}));                                                                                                           // 8
                                                                                                               // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"navbar":{"navbar.html":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/navbar/template.navbar.js                                                                            //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("navbar");                                                                                // 2
Template["navbar"] = new Template("Template.navbar", (function() {                                             // 3
  var view = this;                                                                                             // 4
  return HTML.NAV({                                                                                            // 5
    "class": "navbar navbar-default"                                                                           // 6
  }, "\n  ", HTML.DIV({                                                                                        // 7
    "class": "container-fluid"                                                                                 // 8
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <a class="navbar-brand" href="#">WebSiteName</a>\n    </div>'), "\n    ", HTML.UL({
    "class": "nav navbar-nav navbar-right"                                                                     // 10
  }, "\n      ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    "), "\n    \n  "), "\n");      // 11
}));                                                                                                           // 12
                                                                                                               // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"newHackerForm":{"newHackerForm.html":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/newHackerForm/template.newHackerForm.js                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("newHackerForm");                                                                         // 2
Template["newHackerForm"] = new Template("Template.newHackerForm", (function() {                               // 3
  var view = this;                                                                                             // 4
  return HTML.Raw('<div class="row">\n    <div class="col-xs-8 col-xs-offset-2">\n      <h1>Add a Hacker</h1>\n      <hr>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-xs-8 col-xs-offset-2">\n      <form id="hackerForm" class="form-horizontal">\n\n        <div class="form-group">\n          <label for="hackerName" class="control-label col-xs-2">Hacker Name</label>\n          <div class="col-xs-10">\n            <input id="hackerName" class="form-control" type="text" placeholder="Anon, 1337801, Racer X...">\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="legal-name" class="control-label col-xs-2">Legal Name</label>\n          <div class="col-xs-10">\n            <input id="legalName" class="form-control" type="text" placeholder="Grace Hopper, Charles Babbage...">\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="email" class="control-label col-xs-2">Email</label>\n          <div class="col-xs-10">\n            <input id="email" class="form-control" type="email" placeholder="me@notahacker.com...">\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="allegiance" class="control-label col-xs-2">Allegiance</label>\n          <div class="col-xs-10">\n            <select id="allegiance" class="form-control">\n              <option>Black Hat</option>\n              <option>White Hat</option>\n            </select>\n          </div>\n        </div>\n\n        <div class="form-group">\n          <div class="col-xs-8 col-xs-offset-2">\n            <button id="submitHacker" class="btn btn-default">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>');
}));                                                                                                           // 6
                                                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"newHackerForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/newHackerForm/newHackerForm.js                                                                       //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Template.newHackerForm.events({                                                                                // 1
    'submit #hackerForm': function () {                                                                        // 2
        function submitHackerForm(event, template) {                                                           // 2
                                                                                                               //
            event.preventDefault();                                                                            // 4
                                                                                                               //
            var hackerName = template.find('#hackerName').value;                                               // 6
            var legalName = template.find('#legalName').value;                                                 // 7
            var email = template.find('#email').value;                                                         // 8
            var allegiance = template.find('#allegiance').value;                                               // 9
                                                                                                               //
            var newHacker = {                                                                                  // 11
                hackerName: hackerName,                                                                        // 12
                legalName: legalName,                                                                          // 13
                email: email,                                                                                  // 14
                allegiance: allegiance,                                                                        // 15
                createdBy: Meteor.userId()                                                                     // 16
            };                                                                                                 //
                                                                                                               //
            console.log("Added!?!");                                                                           // 19
            Meteor.call('hackers.insert', newHacker);                                                          // 20
        }                                                                                                      //
                                                                                                               //
        return submitHackerForm;                                                                               //
    }()                                                                                                        //
                                                                                                               //
});                                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/collections.js                                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Hackers = new Mongo.Collection('hackers');                                                                     // 1
                                                                                                               //
if (Meteor.isServer) {                                                                                         // 3
	Meteor.publish('hackers', function () {                                                                       // 4
		function listHackers() {                                                                                     // 4
			return Hackers.find({ allegiance: "White Hat" });                                                           // 5
		}                                                                                                            //
                                                                                                               //
		return listHackers;                                                                                          //
	}());                                                                                                         //
}                                                                                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/methods.js                                                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               //
Meteor.methods({                                                                                               // 2
  'hackers.insert': function () {                                                                              // 3
    function hackersInsert(newHackerObject) {                                                                  //
      console.log("inserting");                                                                                // 4
      Hackers.insert(newHackerObject);                                                                         // 5
    }                                                                                                          //
                                                                                                               //
    return hackersInsert;                                                                                      //
  }()                                                                                                          //
});                                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/router.js                                                                                               //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Router.configure({ layoutTemplate: 'layout' });                                                                // 1
                                                                                                               //
Router.route('/');                                                                                             // 3
Router.route('/new-hacker', { name: 'newHackerForm' });                                                        // 4
Router.route('/list-hackers', { name: 'hackerList' });                                                         // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/hackerList/hackerList.html");
require("./client/layout/layout.html");
require("./client/navbar/navbar.html");
require("./client/newHackerForm/newHackerForm.html");
require("./lib/collections.js");
require("./lib/methods.js");
require("./lib/router.js");
require("./client/hackerList/hackerList.js");
require("./client/newHackerForm/newHackerForm.js");