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
                    component: require('@/components/profile/browseProfile').default,
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
                    path: 'editREX',
                    name: 'editREX',
                    component: require('@/components/REX/editREX').default
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
                    path: 'editDC',
                    name: 'editDC',
                    component: require('@/components/DC/editDC').default
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
                },
                {
                    path: 'editEXP',
                    name: 'editEXP',
                    component: require('@/components/DC/editEXP').default
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