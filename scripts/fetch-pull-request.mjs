#!/usr/bin/env zx

// import { spinner } from "zx/experimental";

$.verbose = false;

try {
  await $`gh`;
} catch (e) {
  console.error("https://cli.github.com/ needs to be installed");
  process.exit(1);
}

const argv = require("node:process").argv;

const prArg = argv[3];
const folderArg = argv[4];

if (!prArg || isNaN(prArg)) {
  console.error("Usage:");
  console.error("npx worktreepr pr-number [folder-string]");
  process.exit(1);
}

const pr = parseInt(argv[3], 10);
const folder = folderArg || pr;

echo("Creating worktree...");
await $`git worktree add ${folder}`;
echo("Fetching PR...");
await $`cd ${folder} && gh pr checkout ${pr}`;

echo(`✅ Process finished, ${chalk.green(folder)} folder created`);
