
import { mount } from "@vue/test-utils"

import Button from "../Button.vue"

function sum(a: number, b: number) {
    return a+b
}

describe('test', () => {
    
    it('test1', () => {
        
        expect(sum(1, 2)).toEqual(3)
        expect(sum(1, 3)).toEqual(4)

        const wrapper = mount(Button)
    })
})