const routes = [
    {
        path: '/home',
        component: () => import('../views/home/Home')
    },
    {
        path: '/center',
        component: () => import('../views/center/Center')
    },
    {
        path: '/use-manage/useradd',
        component: () => import('../views/use-manage/UserAdd')
    },
    {
        path: '/use-manage/userlist',
        component: () => import('../views/use-manage/UserList')
    },
    {
        path: '/new-manage/newsadd',
        component: () => import('../views/news-manage/NewsAdd')
    },
    {
        path: '/new-manage/newslist',
        component: () => import('../views/news-manage/NewsList')
    },
    {
        path: '/product-manage/productlist',
        component: () => import('../views/product-manage/ProductList')
    },
    {
        path: '/product-manage/productadd',
        component: () => import('../views/product-manage/ProductAdd')
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/notfound/NotFound')
    }
]

export default routes