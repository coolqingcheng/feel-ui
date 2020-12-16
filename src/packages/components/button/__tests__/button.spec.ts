import { mount } from "@vue/test-utils"
import Button from "@/packages/components/button/Button.vue"//"../Button.vue"

describe("test button", () => {

    test('render', () => {
        const wrapper = mount(Button)
        expect(wrapper.find('.btn').exists()).toBe(true)
    })
})