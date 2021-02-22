'use strict';

const _ = require('lodash')
const plugin1 = require('@wangfupeng1988/lerna-demo-plugin1')
const plugin2 = require('@wangfupeng1988/lerna-demo-plugin2')


console.log('app start...')

function app() {
    plugin1()
    plugin2()

    console.log('_.concat', _.concat([1, 2], 3))
}

app()

module.exports = app;
