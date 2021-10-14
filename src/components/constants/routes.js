export const ROUTES = {
    static: {
        phones: '/phones',
        add: '/add',
        login: '/login',
        register: '/register'
    },
    dynamic: {
        details: (id = ':id') => `detail/${id}`,
        edit: (id = ':id') => `edit/${id}`
    }
}