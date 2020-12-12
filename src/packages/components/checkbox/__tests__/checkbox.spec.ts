import { mount } from "@vue/test-utils"

import CheckBox from "../CheckBox.vue"

describe('test checkbox', () => {

    test('render', () => {
        const wrapper = mount(CheckBox)

        expect(wrapper.findComponent(CheckBox).exists()).toBeTruthy();
    })

})