import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Users = new Mongo.Collection('Users');

/**
 * Create the schema for Stuff
 */
export const UsersSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  genres: {
    label: 'genres',
    type: String,
    optional: false,
    max: 200,
  },
  instruments: {
    label: 'instruments',
    type: String,
    optional: false,
    max: 200,
  },
  talent: {
    label: 'talent',
    type: String,
    optional: false,
    max: 200,
  },
});

Users.attachSchema(UsersSchema);
