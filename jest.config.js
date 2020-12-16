const path = require('path')
module.exports = {
    rootDir: path.join(__dirname, 'src'),
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    moduleFileExtensions: [
        "js",
        "ts",
        "vue"
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1"
    }
}
