
// Template.ipsumPage.helpers({

//   'item': function() {
//     var currentId = this._id;
//     var currentIpsum = Ipsums.findOne({
//       _id: currentId
//     });
//     console.log(currentIpsum);
//     var textLength = ((currentIpsum.text).length);
//     console.log('test');
//     // var lines = [];
//     // for (var i = 0; i <= textLength - 1; i++) {
//     //   lines += currentIpsum.text[i];
//     // };
//     // console.log(lines);
//   }

// });

Template.ipsumPage.helpers({
  'lines': function () {
    return Ipsums.findOne({_id:this._id}).text;
  }
});
