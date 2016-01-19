Ipsums = new Mongo.Collection("ipsums");

if (Meteor.isClient) {

  Template.ipsums.helpers({
    count: function () {
      return Ipsums.find().count();
    },
    ipsums: function() {
      return Ipsums.find({}, {sort: {'createdAt': -1}});
    }
  });

  Template.ipsumForm.events({
    'submit .ipsum': function(e) {
      e.preventDefault();
      var title = e.target.title.value;
      var text = e.target.text.value;
      
      Ipsums.insert({
        title: JSON.stringify(title),
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
