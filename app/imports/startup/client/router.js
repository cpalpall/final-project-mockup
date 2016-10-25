import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/home', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/admin', {
  name: 'Admin_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Page' });
  },
});

FlowRouter.route('/browse', {
  name: 'Browse_Users',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Users' });
  },
});

FlowRouter.route('/create-profile', {
  name: 'Create_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Profile_Page' });
  },
});

FlowRouter.route('/edit-profile', {
  name: 'Edit_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
