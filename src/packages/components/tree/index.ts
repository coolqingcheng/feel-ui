import Tree from './Tree.vue'
import TreeNode from './TreeNode.vue'
import TreeCheckBox from './TreeCheckBox.vue'
import { App } from 'vue'

export default {
    install: (app: App) => {
        app.component(Tree.name, Tree)
        app.component(TreeCheckBox.name, TreeCheckBox)
        app.component(TreeNode.name, TreeNode)
    }
}