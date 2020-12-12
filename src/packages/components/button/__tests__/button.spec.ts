import { mount } from "@vue/test-utils"
import Button from "../Button.vue"

describe("test button", () => {

    test('render', () => {
        const wrapper = mount(Button)
        expect(wrapper.find('.btn').exists()).toBe(true)
    })
})