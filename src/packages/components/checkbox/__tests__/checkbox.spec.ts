import { mount } from "@vue/test-utils"

import CheckBox from "../CheckBox.vue"

describe('test checkbox', () => {

    const wrapper = mount({
        components: {
            "f-checkbox": CheckBox
        }
    })

})