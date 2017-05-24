import { Template } from 'meteor/templating';

import { Placards } from '../api/placards.js';

import './placard.js';

import './body.html';

Template.body.helpers({
    placards() {
        return Placards.find({}, 
        { sort: { createdAt: -1} });
    },
});

Template.body.events({
  'submit .new-placard'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
   // const target = event.target;
    var text = event.target.text.value;
    var mailtype = event.target.mailtype.value;
 
    // Insert a task into the collection
    Placards.insert({
      text: text,
      mailtype: mailtype,
      createdAt: new Date(), // current time
    });
 console.log(event);
    // Clear form
    event.target.text.value = '';
    event.target.mailtype.value = '';
  },
});