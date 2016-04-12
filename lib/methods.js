
Meteor.methods({
  'hackers.insert'(newHackerObject) {
    console.log("inserting");
    Hackers.insert(newHackerObject);
  }
});