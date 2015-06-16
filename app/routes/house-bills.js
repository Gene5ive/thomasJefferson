import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var url = 'https://congress.api.sunlightfoundation.com/upcoming_bills?&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&range=week&congress=114&chamber=house';
    return Ember.$.getJSON(url).then(function (responseJSON) {
      var bills = [];
      responseJSON.results.forEach(function (bill) {
        bills.push(bill);
      });
      return bills;
    });
  }
});