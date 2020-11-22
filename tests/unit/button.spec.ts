import { mount, shallowMount } from '@vue/test-utils'
import App from '@/packages/components/button/Button.vue'

describe('Button.vue', () => {
  test('renders Button.vue', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.btn').exists()).toBe(true)
  })
})
