import { mount } from "@vue/test-utils"

import Num from "../Number.vue"

describe('test number.vue', () => {

    it('render', async () => {
        const wrapper = mount({
            components: {
                "f-number": Num
            },
            template: `
                <f-number v-model="value"></f-number>
                <p>{{value}}</p>
            `,
            data() {
                return {
                    value: 0
                }
            }
        })
        expect(wrapper.findComponent(Num).exists()).toBeTruthy()
        await wrapper.find('.f-num-add').trigger('click')
        expect(wrapper.vm.$data.value === 1).toBeTruthy()
        expect(wrapper.findComponent(Num).emitted('change')[0]).toEqual([{ value: 1 }])
        await wrapper.find('.f-num-sub').trigger('click')
        expect(wrapper.vm.$data.value === 0).toBeTruthy()
        expect(wrapper.findComponent(Num).emitted('change')[1]).toEqual([{ value: 0 }])

    })

})