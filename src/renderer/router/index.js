import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: require('@/components/home').default
        },
        {
            path: '/myProfile',
            name: 'profile',
            component: require('@/components/profile/myProfile').default,
            children: [{
                    path: 'browseProfile',
                    name: 'browseProfile',
                    component: require('@/components/profile/browseProfile').default
                },
                {
                    path: 'editProfile',
                    name: 'editProfile',
                    component: require('@/components/profile/editProfile').default
                }
            ]
        },
        {
            path: '/manageREX',
            name: 'manageREX',
            component: require('@/components/REX/manageREX').default
        },
        {
            path: '/myREX',
            name: 'myREX',
            component: require('@/components/REX/myREX').default,
            children: [{
                    path: 'browseREX',
                    name: 'browseREX',
                    component: require('@/components/REX/browseREX').default,
                },
                {
                    path: 'editREX/:id',
                    name: 'editREX',
                    component: require('@/components/REX/editREX').default,
                    props: true
                }
            ]
        },
        {
            path: '/myDC',
            name: 'myDC',
            component: require('@/components/DC/myDC').default,
            children: [{
                    path: 'browseDC',
                    name: 'browseDC',
                    component: require('@/components/DC/browseDC').default,
                },
                {
                    path: 'editDC/:id',
                    name: 'editDC',
                    component: require('@/components/DC/editDC').default,
                    props: true
                }
            ]
        },
        {
            path: '/myExp',
            name: 'myExp',
            component: require('@/components/DC/myExp').default,
            children: [{
                    path: 'browseEXP',
                    name: 'browseEXP',
                    component: require('@/components/DC/browseEXP').default,
                    children: [{
                        path: 'renderExp/:id',
                        name: 'renderExp',
                        component: require('@/components/DC/renderExpAdway').default,
                        props: true
                    }]
                },
                {
                    path: 'editEXP/:id',
                    name: 'editEXP',
                    component: require('@/components/DC/editEXP').default,
                    props: true
                }
            ]
        },
        {
            path: '/documentation',
            name: 'documentation',
            component: require('@/components/documentation').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})