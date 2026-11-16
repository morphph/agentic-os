import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {SKILLS} from '../shared/contract.mjs';
import {deliverablePathFor} from '../runner/original-workflows.mjs';
import {workflowPrompt} from '../runner/workflows.mjs';

const job={id:'1a2b3c4d-0000-4000-8000-000000000000',skill:'last-7-days',args:{}};

test('Last 7 Days AI News is a registered model workflow with its own report folder',()=>{
 assert.equal(SKILLS['last-7-days'].label,'Last 7 Days AI News');
 assert.ok(!SKILLS['last-7-days'].direct);
 assert.match(deliverablePathFor(job),/^inbox\/research\/last-7-days\/\d{4}-\d{2}-\d{2}-last-7-days-1a2b3c4d\.md$/);
});

test('its prompt carries the report rubric, the fixed source list and the X data rubric',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'aos-last7-'));
 try{
  const prompt=workflowPrompt(root,job,'');
  for(const name of ['last-7-days','last-7-days-sources','x-data'])assert.ok(prompt.includes(`--- BUNDLED RUBRIC: ${name} ---`),name);
  for(const text of ['## Marketing and Growth Engineering on X','## Source Status','from:bcherny','from:karpathy','"GTM engineer"','https://code.claude.com/docs/en/changelog','sinceHours: 168'])assert.ok(prompt.includes(text),text);
  assert.ok(!prompt.includes('BUNDLED RUBRIC: youtube-data'));
 }finally{fs.rmSync(root,{recursive:true,force:true})}
});

test('the fixed X calls stay inside the per-run reading budget',async()=>{
 const {X_RUN_LIMIT}=await import('../runner/x-research-data.mjs');
 const sources=fs.readFileSync(new URL('../workflow-references/last-7-days-sources.md',import.meta.url),'utf8');
 const rows=[...sources.matchAll(/^\|[^|]+\|\s*`[^`]+`\s*\|\s*(\d+)\s*\|$/gm)].map(match=>Number(match[1]));
 assert.equal(rows.length,6);
 assert.ok(rows.reduce((sum,value)=>sum+value,0)<=X_RUN_LIMIT-20);
});
