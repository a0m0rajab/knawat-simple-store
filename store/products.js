// initial state
export const state = () => ({
    all: []
})


// actions
export const actions = {
    async getAllProducts({ commit }) {
        let config = {}
        console.log("getAll called")
        this.$axios.setToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OWQ5Mzc4LTNhNjktNGZiYy04YjM4LTQ4OWRmMjQyODg3ZCIsImV4cCI6MTYxMDU0Mjk2NCwiaWF0IjoxNjA1MzU4OTY0fQ.7lnp6hM54C_aVAj7esC-Gqhn869NtJzFnl_B9kqLIoQ",
            "Bearer"
        );
        try {
            const products = await this.$axios.$get(
                `/api/catalog/products?page=${1}&hideOutOfStock=${1}`
            );
            console.log(products)
            commit('setProducts', products)
        } catch (error) {
            console.error(error)
        }

    }
}

// mutations
export const mutations = {
    setProducts(state, products) {
        state.all = products
        console.log("product set finished")
    },

    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}
