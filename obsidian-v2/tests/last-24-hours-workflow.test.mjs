import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {SKILLS} from '../shared/contract.mjs';
import {deliverablePathFor} from '../runner/original-workflows.mjs';
import {workflowPrompt} from '../runner/workflows.mjs';
import {X_RUN_LIMIT} from '../runner/x-research-data.mjs';

const job={id:'1a2b3c4d-0000-4000-8000-000000000000',skill:'last-24-hours',args:{}};
const read=name=>fs.readFileSync(new URL(`../workflow-references/${name}.md`,import.meta.url),'utf8');
// | priority | tier | call | `query` | sort | maxResults |
const calls=()=>[...read('last-24-hours-sources').matchAll(/^\|\s*(\d)\s*\|([^|]+)\|[^|]+\|\s*`([^`]+)`\s*\|\s*(Latest|Top)\s*\|\s*(\d+)\s*\|$/gm)]
 .map(match=>({priority:Number(match[1]),tier:match[2].trim(),query:match[3],max:Number(match[5])}));

test('Last 24 Hours AI News is a registered model workflow with its own report folder',()=>{
 assert.equal(SKILLS['last-24-hours'].label,'Last 24 Hours AI News');
 assert.ok(!SKILLS['last-24-hours'].direct);
 assert.ok(!Object.hasOwn(SKILLS,'last-7-days'));
 assert.match(deliverablePathFor(job),/^inbox\/research\/last-24-hours\/\d{4}-\d{2}-\d{2}-last-24-hours-1a2b3c4d\.md$/);
});

test('its prompt carries the report rubric, the fixed source list and the X data rubric',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'aos-last24-'));
 try{
  const prompt=workflowPrompt(root,job,'');
  for(const name of ['last-24-hours','last-24-hours-sources','x-data'])assert.ok(prompt.includes(`--- BUNDLED RUBRIC: ${name} ---`),name);
  for(const text of ['## Marketing and Growth Engineering on X','## Source Status','from:AnthropicAI','from:bcherny','from:karpathy','"GTM engineer"','https://code.claude.com/docs/en/changelog','sinceHours: 24'])assert.ok(prompt.includes(text),text);
  assert.ok(!prompt.includes('BUNDLED RUBRIC: youtube-data'));
 }finally{fs.rmSync(root,{recursive:true,force:true})}
});

test('X calls run official accounts first, then people, then searches, inside the run budget',()=>{
 const list=calls();
 assert.equal(list.length,8);
 assert.deepEqual(list.map(call=>call.priority),[1,1,2,2,2,3,3,3]);
 assert.deepEqual([...new Set(list.map(call=>call.tier))],['Official accounts','People','Topic searches']);
 for(const call of list.filter(call=>call.priority<3))assert.match(call.query,/from:/);
 for(const call of list.filter(call=>call.priority===3))assert.match(call.query,/^\(.*\).*min_faves:\d+/);
 assert.ok(list.reduce((sum,call)=>sum+call.max,0)<=X_RUN_LIMIT-20);
});

test('the report rubric names no individual source, so the source list is the only place to edit',()=>{
 const rubric=read('last-24-hours');
 for(const name of ['from:','karpathy','DeepMind','Hugging Face','Latent Space','anthropic.com','openai.com'])assert.ok(!rubric.includes(name),name);
 assert.doesNotMatch(rubric,/\b(?:three|six|eight|14|20)\s+(?:X\s+)?(?:calls?|searches|accounts|pages)\b/i);
});
