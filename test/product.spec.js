import { mount } from '@vue/test-utils'
import product from '@/components/product'

describe('product', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(product)
    expect(wrapper.vm).toBeTruthy()
  })
})
