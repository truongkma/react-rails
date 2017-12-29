import {App, Products, About} from './containers'
export const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: '/product', component: About },
        {
            path: '/posts',
            component: Posts,
            childRoutes: [ { path: '/post/:nr', component: Post } ]
        },
        { path: '*', component: NoMatch}
    ]
};
