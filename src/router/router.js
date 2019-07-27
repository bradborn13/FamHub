import Router from 'vue-router';

export default new Router({
    routes: [{
            path: "/home",
            name: 'Home',
            components: {
                default: require('@/components/HelloWorld').default,
                loginFake: require('@/components/Login').default,
            }


        }, {
            path: "/login",
            name: 'Login',
            component: require('@/components/Login').default,
            children: []
        },
        {
            path: "/googleAuth",
            name: 'googleAuth',
            component: require('@/components/NavBar').default,
            children: []
        }
    ]
});