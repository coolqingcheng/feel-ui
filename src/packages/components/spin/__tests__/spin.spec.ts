import { mount } from "@vue/test-utils"
import Spin from "../Spin.vue"

describe('test Spin', () => {
    it('render spin', () => {
        const wrapper = mount(
            {
                components: {
                    "f-spin": Spin,
                },
                template: `
                    <f-spin text="loading" :loading="true">
                        <p>test</p>
                    </f-spin>
                `
            }
        )
        expect(wrapper.findComponent(Spin)).toBeTruthy()
        expect(wrapper.find('.f-spin-mask-center label').text() == 'loading').toBeTruthy()
    })
})