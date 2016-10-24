import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const User = new Mongo.Collection('User');

/**
 * Create the schema for Stuff
 */
export const UserSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'User',
      placeholder: 'Bicycle',
    },
  },
  quantity: {
    label: 'Quantity',
    type: Number,
    optional: false,
    autoform: {
      group: 'User',
      placeholder: '3',
    },
  },
});

User.attachSchema(UserSchema);
