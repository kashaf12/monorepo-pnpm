import { bugs } from "bugs";

const fixes = bugs.map((bug) => ({ ...bug, title: `Fix for ${bug.title}` }));

console.log(fixes);
