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

    it('render tab close', async () => {
        const wrapper = mount({
            components: {
                "f-tab": Tab,
                "f-tab-item": TabItem
            },
            template: `
                <f-tab :show-close="true">
                   <f-tab-item title="tab-1"></f-tab-item>
                   <f-tab-item title="tab-2"></f-tab-item>
                </f-tab>
            `
        })

        await wrapper.vm.$nextTick();
        await wrapper.find('.active .icon-close').trigger('click')
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('.f-tab-header ul li').length == 1).toBe(true)

    })


    it('test active tab', async () => {
        const wrapper = mount({
            components: {
                "f-tab": Tab,
                "f-tab-item": TabItem
            },
            template: `
                <f-tab :show-close="true">
                   <f-tab-item title="tab-1"></f-tab-item>
                   <f-tab-item title="tab-2"></f-tab-item>
                </f-tab>
            `
        })
        await wrapper.vm.$nextTick();
        await wrapper.findAll('.f-tab-header ul li')[1].trigger('click')
        expect(wrapper.findAll('.f-tab-header ul li')[1].classes().find(a => a == "active")).toBeTruthy();

    })
})
