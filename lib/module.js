'use strict';

const { findSourceMap } = require('internal/source_map/source_map_cache');
// CJS
// require, module.exports & exports
const { Module } = require('internal/modules/cjs/loader');
const { SourceMap } = require('internal/source_map/source_map');

Module.findSourceMap = findSourceMap;
Module.SourceMap = SourceMap;
module.exports = Module;
