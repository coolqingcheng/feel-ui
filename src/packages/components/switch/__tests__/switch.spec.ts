import { mount } from "@vue/test-utils"
import { reactive } from 'vue'
import Switch from "../Switch.vue"

describe('test switch', () => {
    it('render switch', async () => {
        const wrapper = mount({
            components: {
                'f-switch': Switch
            },
            template: `
            <f-switch v-model="data.value"></f-switch>
            <p>{{data.value}}</p>
            `,
            setup() {
                const data = reactive({
                    value: false
                })
                return {
                    data
                }
            }
        })
        let component = wrapper.getComponent(Switch)
        expect(wrapper.findComponent(Switch).exists()).toBeTruthy();
        await component.trigger('click');
        expect(wrapper.find('p').text()).toBeTruthy()
        await component.trigger('click');
        expect(wrapper.find('p').text()).toBeTruthy()
        await component.trigger('click')
        expect(component.emitted('change')).toBeTruthy()
    })
})