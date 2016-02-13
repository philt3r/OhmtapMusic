/**
 * Created by PhilBeadle on 2/02/16.
 */
Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate: 'notFound'
});
AccountsTemplates.configure({
    defaultLayout: 'layout',
});

AccountsTemplates.configureRoute('signIn');

Router.route("/", {
    name: 'home',
    data: function(){
        return {
            message: 'Home page'
        }
    }
});

Router.route("/artists", {
    name: 'artists'
});

Router.route("/philt3r", {
    name: 'philt3r'
});

Router.route("/philt3r/mixes", {
    name: 'philt3rMixes'
});

Router.route("/philt3r/releases", {
    name: 'philt3rReleases'
});

Router.route("/releases", {
    name: 'releases'
});

