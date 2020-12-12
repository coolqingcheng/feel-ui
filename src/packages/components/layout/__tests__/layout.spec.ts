import { mount } from "@vue/test-utils"

import Row from "../grid/Row.vue"
import Col from "../grid/Col.vue"

describe('test layout', () => {

    it('render row', () => {

        const wrapper = mount({
            components: {
                "f-row": Row
            },
            template: `
            <f-row></f-row>
            `
        })

        expect(wrapper.find('.f-row').exists()).toBeTruthy();
    })

    it('render row->col', () => {
        const wrapper = mount({
            components: {
                "f-row": Row,
                'f-col': Col
            },
            template: `
                <f-row>
                    <f-col></f-col>
                    <f-col></f-col>
                    <f-col></f-col>
                </f-row>
            `
        })

        expect(wrapper.find('.f-col').exists()).toBeTruthy();
    })

    it('render row->col->grid', () => {
        const wrapper = mount({
            components: {
                "f-row": Row,
                'f-col': Col
            },
            template: `
                <f-row>
                    <f-col :xs="1"></f-col>
                    <f-col></f-col>
                    <f-col></f-col>
                </f-row>
            `
        })
        expect(wrapper.findAll('.f-row > .f-col')[0].classes().indexOf('f-col-xs-1') > -1).toBeTruthy();
    })
})