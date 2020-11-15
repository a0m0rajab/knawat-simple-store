// initial state
export const state = () => ({
    all: []
})


// actions
export const actions = {
    getAllProducts({ commit }) {
        mp.$fetch('GET', '/catalog/products', {
            auth: 'token', queryParams: {
                page: 1,
                hideOutOfStock: 1
            }
        }).then(products => {
            commit('setProducts', products)
        })
    }
}

// mutations
export const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

