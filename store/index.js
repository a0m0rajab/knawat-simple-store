export const state = () => ({
  counter: 0,
  all: []
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}