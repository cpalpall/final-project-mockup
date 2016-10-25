import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Users, UsersSchema } from '../../api/users/users.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Edit_Profile_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = UsersSchema.namedContext('Create_Profile_Page');
});

Template.Edit_Profile_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

//Template.Add_Contact_Page.onRendered(function enableSemantic() {
//const instance = this;
//instance.$('select.ui.dropdown').dropdown();
//instance.$('.ui.selection.dropdown').dropdown();
//instance.$('select.dropdown').dropdown();
//instance.$('.ui.checkbox').checkbox();
//instance.$('.ui.radio.checkbox').checkbox();
//});

Template.Edit_Profile_Page.events({
  'submit .user-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const first = event.target.first.value;
    const last = event.target.last.value;
    const genres = event.target.genres.value;
    const instruments = event.target.instruments.value;
    const talent = event.target.talent.value;

    const updatedUser = { first, last, genres, instruments, talent };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ContactsSchema.clean(updatedUser);
    // Determine validity.
    instance.context.validate(updatedUser);
    if (instance.context.isValid()) {
      Users.update(FlowRouter.getParam(_id), {$set: newContact });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});