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
      var textArray = text.split('\n');
      var now = new Date();
      var readableDate = moment().format("HH:mm ddd do MMM");
      
      Ipsums.insert({
        title: title,
        text: textArray,
        moment: readableDate,
        createdAt: now
      });


      e.target.title.value = '';
      e.target.text.value = '';

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
