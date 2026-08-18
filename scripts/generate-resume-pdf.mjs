import fs from "node:fs";
import path from "node:path";

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const lines = [
  { text: "[YOUR NAME]", size: 18 },
  { text: "Business Analyst / Data Analyst", size: 11 },
  { text: "[YOUR CITY, COUNTRY]  |  [YOUR EMAIL]  |  [LINKEDIN URL]", size: 9 },
  { text: "", size: 10 },
  { text: "SUMMARY", size: 11 },
  {
    text: "Business Information Systems graduate targeting junior Business Analyst,",
    size: 10,
  },
  {
    text: "Data Analyst, and Business Intelligence roles. I take a business problem,",
    size: 10,
  },
  {
    text: "structure the question, work with the available data or process, and",
    size: 10,
  },
  { text: "recommend a practical next step.", size: 10 },
  { text: "", size: 10 },
  { text: "EDUCATION", size: 11 },
  { text: "[DEGREE - e.g. Bachelor of Business Information Systems]", size: 10 },
  { text: "[UNIVERSITY NAME]  |  [YEAR] - [YEAR]", size: 10 },
  { text: "", size: 10 },
  { text: "TECHNICAL SKILLS", size: 11 },
  { text: "SQL, Excel, Power BI, Python, Git/GitHub, Databases", size: 10 },
  { text: "", size: 10 },
  { text: "BUSINESS ANALYSIS SKILLS", size: 11 },
  { text: "Requirements gathering, user stories, acceptance criteria,", size: 10 },
  { text: "process mapping, stakeholder analysis, process improvement", size: 10 },
  { text: "", size: 10 },
  { text: "PROJECTS (see portfolio for case studies)", size: 11 },
  { text: "Customer Churn & Retention Analysis - example case study", size: 10 },
  {
    text: "E-commerce Order Management Process Improvement - example case study",
    size: 10,
  },
  { text: "Retail Sales Performance Review - example case study", size: 10 },
  { text: "", size: 10 },
  { text: "Replace this file with your real resume: public/resume.pdf", size: 9 },
];

let y = 760;
const commands = ["BT"];
for (const line of lines) {
  commands.push(`/F1 ${line.size} Tf`);
  commands.push(`1 0 0 1 72 ${y} Tm (${escapePdf(line.text)}) Tj`);
  y -= line.size === 18 ? 26 : line.size === 11 ? 20 : 14;
}
commands.push("ET");
const stream = commands.join("\n");

const catalog = "<< /Type /Catalog /Pages 2 0 R >>";
const pages = "<< /Type /Pages /Kids [3 0 R] /Count 1 >>";
const pageObj =
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>";
const contentObj = `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`;
const fontObj = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";

const objs = [catalog, pages, pageObj, contentObj, fontObj];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objs.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objs.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= objs.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

const out = path.join(process.cwd(), "public", "resume.pdf");
fs.writeFileSync(out, pdf);
console.log("Wrote", out);
