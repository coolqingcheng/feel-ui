import { App } from 'vue';

import cdk from "../packages/utils/cdk"

export function AutoRegisterComponent(app: App) {

    const components = require.context("./", true, /.vue$/)
    // console.log('自动注册组件:' + components.keys());
    components.keys().forEach(fileName => {
        let component = components(fileName)
        let name = cdk.getFileName(fileName);
        if (name.toLowerCase() !== 'index') {
            name = cdk.toLine(name)
            app.component(name, component.default)
        }
    });
}