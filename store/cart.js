import * as host from '~/test/productsList'

// initial state
export const state = () => ({
  items: [],
})

// getters
export const getters = {
  productAmount: (state) => {
    return state.items.length || 0
  },
  cartProducts: (state, getters, rootState) => {
    return state.items.map((id) => {
      const product = rootState.products.all.find(product => product.sku === id)
      return {
        title: product.name.tr,
        price: product.variations.market_price,
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price
    }, 0)
  }
}

// actions
export const actions = {
  addProductToCart({ state, commit }, sku) {
    const cartItem = state.items.find(item => item === sku)
    if (!cartItem) {
      commit('pushProductToCart', { id: sku })
    }

  }
}

// mutations
export const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push(id)
  },
}

