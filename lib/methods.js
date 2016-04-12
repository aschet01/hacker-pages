
Meteor.methods({
  'hackers.insert'(newHackerObject) {
    Hackers.insert(newHackerObject);
  }
});