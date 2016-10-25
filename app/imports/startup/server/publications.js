import { Users } from '../../api/users/users.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Users', function publishUserData() {
  return Users.find();
});