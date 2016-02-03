Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  template: 'home'
});

Router.route('/about');

Router.route('/ipsum/:_id', {
  template: 'ipsumPage',
  data: function() {
    var currentId = this.params._id;
    var currentIpsum = Ipsums.findOne({
      _id: currentId
    });
    return currentIpsum;

  }
});
