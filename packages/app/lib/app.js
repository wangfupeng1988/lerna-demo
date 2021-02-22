'use strict';

const plugin1 = require('@wangfupeng1988/lerna-demo-plugin1')
const plugin2 = require('@wangfupeng1988/lerna-demo-plugin2')

// console.log('app start...')

function app() {
    plugin1()
    plugin2()
}

app()

module.exports = app;
