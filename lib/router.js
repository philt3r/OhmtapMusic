/**
 * Created by PhilBeadle on 2/02/16.
 */
Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate: 'notFound'
});

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

Router.route("/releases", {
    name: 'releases'
});

