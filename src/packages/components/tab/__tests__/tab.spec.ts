import { mount, shallowMount } from '@vue/test-utils'
import Tab from '@/packages/components/tab/Tab.vue'
import TabItem from "@/packages/components/tab/TabItem.vue"
import Test from '../../position/Test'

describe('Tab.vue', () => {
    test('renders Tab.vue', () => {
        const wrapper = mount(Tab)
        expect(wrapper.find('.f-tab').exists()).toBe(true)
    })
    it('test simple type', () => {
        const wrapper = mount(Tab, {
            props: {
                type: 'simple'
            }
        })
        expect(wrapper.find('.simple').exists()).toBe(true)
    })


    it('runder tab-item.vue', () => {
        const wrapper = mount({
            components: {
                "f-tab": Tab,
                "f-tab-item": TabItem
            },
            template: `
            <f-tab>
                <f-tab-item></f-tab-item>
            </f-tab>
            `
        })
        expect(wrapper.find('.f-tab-item').exists()).toBe(true)
    })

})
