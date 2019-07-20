export default new Router({
    routes: [{
        path: "/home",
        name: 'Home',
        component: require('@/components/HelloWorld').default,
        children: [],


    }, {
        path: "/login",
        name: 'Login',
        component: require('@/components/Login').default,
        children: []
    }]
});