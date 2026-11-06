import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import{eligible}from'../predicate-engine/index.js';
for(const c of JSON.parse(fs.readFileSync(new URL('./cases.json',import.meta.url))))test(c.name,()=>assert.equal(eligible(c.predicate,c.at,{createdAt:c.createdAt}),c.expected));
