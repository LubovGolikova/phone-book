export const ROUTES = {
    static: {
        main: "/",
        add: '/add',
        login: '/login',
        register: '/register',
        edit: '/edit',
        notFound: "/404",
    },
    dynamic: {
        details: (id = ':id') => `/details/${id}`,
        edit: (id = ':id') => `/edit/${id}`
    }
}