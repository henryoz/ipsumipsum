Template.ipsums.helpers({
    count: function () {
      return Ipsums.find().count();
    },
    ipsums: function() {
      return Ipsums.find({}, {sort: {'createdAt': -1}});
    }
  });