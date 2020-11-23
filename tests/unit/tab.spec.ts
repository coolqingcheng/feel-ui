import { mount } from '@vue/test-utils'
import Tab from '@/packages/components/tab/Tab.vue'

describe('Tab.vue', () => {
    test('renders Tab.vue', () => {
        const wrapper = mount(Tab)
        expect(wrapper.find('.f-tab').exists()).toBe(true)
    })
})
