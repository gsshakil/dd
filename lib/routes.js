var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'signin') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('signin');
      }
    }
  ]
});

FlowRouter.notFound = {
    name: 'notFound',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "NotFound" });
    }
}

exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar_lp", main: "Home" });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People_list" });
    }
});

exposed.route('/people/details', {
    name: 'people-details',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People_details" });
    }
});

exposed.route('/brands', {
    name: 'brands',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brands" });
    }
});

exposed.route('/brand/details', {
    name: 'brand-details',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brand_details" });
    }
});

exposed.route('/projects', {
    name: 'projects',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Projects" });
    }
});

exposed.route('/products', {
    name: 'products',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Products" });
    }
});

exposed.route('/jobs', {
    name: 'jobs',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Jobs" });
    }
});

exposed.route('/campaign', {
    name: 'campaign',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Campaigns" });
    }
});

exposed.route('/learning', {
    name: 'learning',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Learning" });
    }
});

exposed.route('/forum', {
    name: 'forum',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Forum" });
    }
});

exposed.route('/groups', {
    name: 'groups',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Groups" });
    }
});

exposed.route('/blog', {
    name: 'blog',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Blog" });
    }
});

exposed.route('/places/:_id', {
    name: 'place-detail',
    action(params) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Place_detail" });
    }
});

loggedIn.route('/update-place/:_id', {
    name: 'place-update',
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Place_update" });
    }
});

loggedIn.route('/edit-profile', {
    name: 'edit-profile',
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Edit_profile" });
    }
});







