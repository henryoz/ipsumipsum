Ipsums = new Mongo.Collection("ipsums");

if (Meteor.isClient) {

  Template.ipsums.helpers({
    ipsums: function () {
      return Ipsums.find({}, );
    }
  });

  Template.ipsumForm.events({
    'submit .ipsum': function(e) {
      e.preventDefault();
      var text = e.target.text.value;
      
      Ipsums.insert({
        text: JSON.stringify(text),
        createdAt: new Date()
      });

      e.target.text.value = '';

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
