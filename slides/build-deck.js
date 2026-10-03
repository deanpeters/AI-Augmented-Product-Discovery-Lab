// Builds slides/Build-the-Right-Thing.pptx as a native, editable deck.
// Run: NODE_PATH=<dir with pptxgenjs> node slides/build-deck.js
// Styling follows the Productside brand guide (Jul 2026): black/green core, Kraken Slab on
// title and closing slides only, Clash Grotesk headings, PP Mori body, Clash Display ALL-CAPS labels,
// pill shapes, official logo files. Fonts must be installed on the presenting machine.
const path = require("path");
const pptxgen = require("pptxgenjs");

const ROOT = path.resolve(__dirname, "..");
const LOGO = (f) => path.join(ROOT, "assets/productside", f);
const OUT = path.join(__dirname, "Build-the-Right-Thing.pptx");

const F = {
  display: "FR Kraken Slab Medium",
  head: "Clash Grotesk Medium",
  body: "PP Mori",
  accent: "Clash Display Semibold",
};

const THEME = {
  name: "Productside Dark",
  headFontFace: F.head,
  bodyFontFace: F.body,
  colors: {
    dk1: "000000", lt1: "FFFFFF", dk2: "141414", lt2: "F4F4F4",
    accent1: "00E874", accent2: "36DEFF", accent3: "EFE400",
    accent4: "FF9800", accent5: "004A4A", accent6: "3508FF",
    hlink: "00E874", folHlink: "36DEFF",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "Build the Right Thing Before Building It Right";
pres.author = "Dean Peters";
const C = pres.SchemeColor;
const GREEN = C.accent1, CYAN = C.accent2, YELLOW = C.accent3, ORANGE = C.accent4;
const WHITE = C.background1, BLACK = C.text1, PANEL = C.text2, CANVAS = C.background2;
const MUTED = "B3B3B3", LINE = "3A3A3A";

// ---------- layouts ----------
pres.defineSlideMaster({
  title: "PS_TITLE",
  background: { color: "000000" },
  objects: [],
});
pres.defineSlideMaster({
  title: "PS_CONTENT",
  background: { color: "000000" },
  objects: [
    { image: { path: LOGO("wordmark-green.png"), x: 11.15, y: 6.98, w: 1.6, h: 0.195, objectName: "Productside wordmark" } },
  ],
  slideNumber: { x: 0.6, y: 6.9, w: 0.6, h: 0.3, fontFace: F.body, fontSize: 12, color: MUTED },
});
pres.defineSlideMaster({
  title: "PS_MOTION",
  background: { color: "000000" },
  objects: [
    { image: { path: LOGO("wordmark-green.png"), x: 11.15, y: 6.98, w: 1.6, h: 0.195, objectName: "Productside wordmark" } },
    {
      placeholder: {
        options: { name: "title", type: "title", x: 0.6, y: 1.75, w: 5.7, h: 1.25, fontFace: F.head, fontSize: 40, color: WHITE, align: "left", valign: "top", margin: 0 },
        text: "Motion title",
      },
    },
  ],
  slideNumber: { x: 0.6, y: 6.9, w: 0.6, h: 0.3, fontFace: F.body, fontSize: 12, color: MUTED },
});

// ---------- helpers ----------
const T = (slide, text, o) =>
  slide.addText(text, Object.assign({ fontFace: F.body, fontSize: 16, color: WHITE, margin: 0, valign: "top", isTextBox: true }, o));

function pill(slide, text, x, y, w, o = {}) {
  const h = o.h || 0.36;
  slide.addText(text, {
    shape: pres.ShapeType.roundRect, rectRadius: h / 2, x, y, w, h,
    fill: o.fill ? { color: o.fill } : { color: BLACK }, line: o.line ? { color: o.line, width: 1 } : undefined,
    fontFace: F.accent, fontSize: o.fontSize || 14, color: o.color || BLACK, align: "center", valign: "middle",
    charSpacing: 1.5, margin: 0, bold: false, objectName: o.name || `Pill ${text}`,
  });
}
function evidencePill(slide, kind, x, y, w) {
  const m = {
    "ACTUAL DATA": [GREEN, BLACK], INFERRED: [CYAN, BLACK], ESTIMATE: [YELLOW, BLACK], UNKNOWN: [ORANGE, BLACK],
  }[kind];
  pill(slide, kind, x, y, w, { fill: m[0], color: m[1], name: `Evidence label ${kind}` });
}
function panel(slide, x, y, w, h, fill = PANEL) {
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.3, fill: { color: fill }, line: { color: "262626", width: 1 }, objectName: "Visual panel" });
}
function box(slide, text, x, y, w, h, o = {}) {
  slide.addText(text, {
    shape: pres.ShapeType.roundRect, rectRadius: o.radius === undefined ? 0.12 : o.radius, x, y, w, h,
    fill: { color: o.fill || WHITE }, line: { color: o.line || o.fill || WHITE, width: o.lw || 1.25, dashType: o.dash },
    fontFace: o.font || F.body, fontSize: o.size || 13, color: o.color || BLACK, align: o.align || "left", valign: o.valign || "middle",
    margin: o.margin === undefined ? [4, 8, 4, 8] : o.margin, bold: !!o.bold, objectName: o.name || "Box",
  });
}
function arrow(slide, x1, y1, x2, y2, color = WHITE, name = "Connector") {
  slide.addShape(pres.ShapeType.line, {
    x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1),
    flipH: x2 < x1, flipV: y2 < y1, line: { color, width: 2, endArrowType: "triangle" }, objectName: name,
  });
}
function rule(slide, text) {
  T(slide, [{ text: "RULE  ", options: { fontFace: F.accent, fontSize: 12, color: GREEN, charSpacing: 1.5 } },
            { text, options: { fontFace: F.body, fontSize: 18, color: GREEN } }],
    { x: 0.6, y: 5.8, w: 5.7, h: 0.9, objectName: "Rule" });
}
// Panel geometry for motion visuals
const PX = 6.85, PY = 0.6, PW = 5.9, PH = 6.1;

function motion(n, name, question, artifact, ruleText, visual, notes) {
  const s = pres.addSlide({ masterName: "PS_MOTION" });
  T(s, String(n).padStart(2, "0"), { x: 0.6, y: 0.5, w: 3, h: 1.2, fontFace: F.accent, fontSize: 80, color: GREEN, objectName: "Motion number" });
  s.addText(name, { placeholder: "title" });
  T(s, question, { x: 0.6, y: 3.45, w: 5.7, h: 1.4, fontSize: 22, color: WHITE, objectName: "Question" });
  pill(s, `ARTIFACT: ${artifact.toUpperCase()}`, 0.6, 5.0, Math.min(5.7, 0.5 + artifact.length * 0.13 + 1.3), { fill: BLACK, color: WHITE, line: "7A7A7A", name: "Artifact pill", fontSize: 12 });
  rule(s, ruleText);
  panel(s, PX, PY, PW, PH);
  visual(s);
  s.addNotes(notes);
  return s;
}

// Handoff card (six common fields). values: [target, belief, evidence, inferred, outcome, question] each string | [string, evidenceKind]
function handoffCard(s, values, x, y, w, h) {
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.18, fill: { color: WHITE }, line: { color: WHITE }, objectName: "Handoff card" });
  T(s, "HANDOFF CARD", { x: x + 0.25, y: y + 0.2, w: 3, h: 0.3, fontFace: F.accent, fontSize: 14, color: "007A3D", charSpacing: 1.5, objectName: "Handoff card label" });
  const labels = ["Target", "Belief", "Evidence", "Inferred", "Outcome", "Question"];
  const gx = x + 0.25, gw = (w - 0.75) / 2, gh = (h - 1.0 - 0.3) / 3;
  labels.forEach((lab, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const bx = gx + col * (gw + 0.25), by = y + 0.65 + row * (gh + 0.15);
    const v = values[i], txt = Array.isArray(v) ? v[0] : v, kind = Array.isArray(v) ? v[1] : null;
    s.addShape(pres.ShapeType.roundRect, { x: bx, y: by, w: gw, h: gh, rectRadius: 0.08, fill: { color: "F4F4F4" }, line: { color: "D0D0D0", width: 1 }, objectName: `Field ${lab}` });
    T(s, lab.toUpperCase(), { x: bx + 0.12, y: by + 0.1, w: gw - 0.24, h: 0.3, fontFace: F.accent, fontSize: 14, color: "5A5A5A", charSpacing: 1 });
    if (txt) T(s, txt, { x: bx + 0.12, y: by + 0.34, w: gw - 0.24, h: gh - 0.62, fontSize: 12, color: BLACK });
    if (kind) evidencePill(s, kind, bx + gw - 1.4, by + gh - 0.32, 1.28);
  });
}

// ---------- 1. Title ----------
{
  const s = pres.addSlide({ masterName: "PS_TITLE" });
  s.addImage({ path: LOGO("lockup-green.png"), x: 0.6, y: 0.55, w: 1.7, h: 0.867, altText: "Productside", objectName: "Productside lockup" });
  pill(s, "AI-AUGMENTED PRODUCT DISCOVERY", 0.6, 2.0, 4.9, { fill: GREEN, color: BLACK, name: "Eyebrow" });
  T(s, "Build the Right Thing Before Building It Right.", { x: 0.6, y: 2.6, w: 10.2, h: 2.7, fontFace: F.display, fontSize: 54, color: WHITE, objectName: "Title" });
  T(s, "AI made building dramatically cheaper and faster. It did not make knowing what to build any easier.", { x: 0.6, y: 5.55, w: 8.4, h: 0.9, fontSize: 22, color: GREEN, objectName: "Subtitle" });
  T(s, "Dean Peters  |  Triangle Startup Collective  |  Raleigh Founded  |  October 5, 2026", { x: 0.6, y: 6.85, w: 11, h: 0.3, fontSize: 14, color: MUTED, objectName: "Byline" });
  s.addNotes("Open spoken. Hall of Shame goes here only if every case and source has been checked before the show. Placeholder otherwise.");
}

// ---------- Hall of Shame ----------
{
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, "HALL OF SHAME", { x: 0.6, y: 0.55, w: 6, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.5, objectName: "Eyebrow" });
  T(s, "Five ways to build it right and still miss", { x: 0.6, y: 0.95, w: 11.8, h: 0.8, fontFace: F.head, fontSize: 38, color: WHITE, objectName: "Title" });
  const cases = [
    ["Relay.app", "Differentiation must keep being earned."],
    ["Humane AI Pin", "Novelty does not equal customer value."],
    ["Google Gemini image generation", "Optimizing one thing can break another."],
    ["Air Canada chatbot", "Automation does not outsource accountability."],
    ["Zillow Offers", "Model performance does not guarantee business viability."],
  ];
  cases.forEach(([who, lesson], i) => {
    const y = 2.0 + i * 0.92;
    s.addShape(pres.ShapeType.roundRect, { x: 0.6, y, w: 12.1, h: 0.78, rectRadius: 0.15, fill: { color: PANEL }, line: { color: "262626", width: 1 }, objectName: `Case row ${i + 1}` });
    T(s, String(i + 1).padStart(2, "0"), { x: 0.85, y: y + 0.17, w: 0.7, h: 0.45, fontFace: F.accent, fontSize: 20, color: GREEN, objectName: `Case number ${i + 1}` });
    T(s, who, { x: 1.6, y: y + 0.17, w: 4.2, h: 0.45, fontFace: F.head, fontSize: 20, color: WHITE, valign: "middle", objectName: `Case name ${i + 1}` });
    T(s, lesson, { x: 5.85, y: y + 0.17, w: 6.85, h: 0.45, fontSize: 17, color: MUTED, valign: "middle", objectName: `Case lesson ${i + 1}` });
  });
  s.addNotes("Spoken opening. Five cases, one line each, then leave the slide. Source URLs and dates for each case: [ATTACH BEFORE SHOWTIME]. Do not research cases on stage. Lessons: Relay.app, differentiation must keep being earned. Humane AI Pin, novelty does not equal customer value. Google Gemini image generation, optimizing one thing can break another. Air Canada chatbot, automation does not outsource accountability. Zillow Offers, model performance does not guarantee business viability.");
}

// ---------- 2. Starting request ----------
{
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, "THE STARTING REQUEST", { x: 0.6, y: 0.7, w: 6, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.5, objectName: "Eyebrow" });
  s.addShape(pres.ShapeType.roundRect, { x: 1.4, y: 1.6, w: 10.5, h: 3.5, rectRadius: 0.25, fill: { color: WHITE }, line: { color: WHITE }, objectName: "Request card" });
  T(s, "Build an AI predictive-maintenance dashboard.", { x: 1.9, y: 2.0, w: 8.2, h: 2.3, fontFace: F.head, fontSize: 48, color: BLACK, objectName: "Request text" });
  evidencePill(s, "UNKNOWN", 9.9, 4.4, 1.5);
  T(s, "What would you need to know before funding that?", { x: 1.4, y: 5.55, w: 10.5, h: 0.5, fontSize: 24, color: WHITE, objectName: "Audience question" });
  T(s, "This manufacturing scenario is SYNTHETIC. No customers were interviewed. These aren't customers. They're hypothesis-generating machines.", { x: 1.4, y: 6.2, w: 9, h: 0.6, fontSize: 14, color: MUTED, objectName: "Synthetic note" });
  s.addNotes("Ask the room. Take two answers. They are audience suggestions, not customer evidence.");
}

// ---------- 3. Cost paradox ----------
{
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, "The AI cost paradox", { x: 0.6, y: 0.7, w: 5.2, h: 1.6, fontFace: F.head, fontSize: 44, color: WHITE, objectName: "Title" });
  T(s, "Teams can now build the wrong thing faster, and polish a weak assumption into a shipped feature. Progress means uncertainty reduced, not activity increased.", { x: 0.6, y: 2.6, w: 4.9, h: 2.6, fontSize: 20, color: MUTED, objectName: "Body" });
  const cats = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];
  const build = [100, 62, 40, 26, 17, 12, 9, 7];
  const judgment = [8, 10, 14, 20, 32, 52, 76, 100];
  s.addChart(pres.charts.LINE, [
    { name: "Cost to build", labels: cats, values: build },
    { name: "Cost of poor judgment (burned runway)", labels: cats, values: judgment },
  ], {
    x: 6.2, y: 0.8, w: 6.6, h: 5.4, chartColors: ["00E874", "FFFFFF"], lineSize: 4, lineDataSymbol: "none",
    showLegend: true, legendPos: "b", legendFontFace: "+mn-lt", legendFontSize: 14, legendColor: "FFFFFF",
    catAxisHidden: true, valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    showTitle: false, valAxisMinVal: 0, valAxisMaxVal: 110,
  });
  T(s, "Illustrative shape only. Not measured data.", { x: 6.2, y: 6.3, w: 6.6, h: 0.3, fontSize: 12, color: MUTED, align: "right", objectName: "Illustrative note" });
  s.addNotes("Concept chart. No data behind the curves. Say so if asked.");
}

// ---------- section question slides ----------
function section(parts, notes) {
  const s = pres.addSlide({ masterName: "PS_TITLE" });
  s.addText(parts.map(([text, color], i) => ({ text, options: { color, breakLine: false } })),
    { x: 0.6, y: 1.6, w: 11.6, h: 4.2, fontFace: F.display, fontSize: 66, margin: 0, valign: "middle", isTextBox: true, objectName: "Section question" });
  s.addNotes(notes);
}


// ---------- wide canvas slides (Productside canvas structure) ----------
function seg(slide, x1, y1, x2, y2, color, width, name) {
  slide.addShape(pres.ShapeType.line, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), flipH: x2 < x1, flipV: y2 < y1, line: { color, width }, objectName: name });
}
function canvasSlide(n, name, question, artifact, ruleText, notes) {
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, String(n).padStart(2, "0"), { x: 0.6, y: 0.4, w: 1.2, h: 0.9, fontFace: F.accent, fontSize: 44, color: GREEN, objectName: "Motion number" });
  T(s, name, { x: 1.8, y: 0.4, w: 4.4, h: 0.95, fontFace: F.head, fontSize: 30, color: WHITE, valign: "middle", objectName: "Title" });
  T(s, question, { x: 6.4, y: 0.45, w: 6.3, h: 0.9, fontSize: 18, color: MUTED, valign: "middle", objectName: "Question" });
  panel(s, 0.6, 1.55, 12.1, 4.8);
  pill(s, `ARTIFACT: ${artifact.toUpperCase()}`, 0.6, 6.5, Math.min(5.7, 0.5 + artifact.length * 0.13 + 1.3), { fill: BLACK, color: WHITE, line: "7A7A7A", name: "Artifact pill", fontSize: 12 });
  T(s, [{ text: "RULE  ", options: { fontFace: F.accent, fontSize: 12, color: GREEN, charSpacing: 1.5 } }, { text: ruleText, options: { fontFace: F.body, fontSize: 16, color: GREEN } }], { x: 5.9, y: 6.5, w: 6.8, h: 0.36, valign: "middle", objectName: "Rule" });
  s.addNotes(notes);
  return s;
}

// ---------- 4 to 13. Motions ----------
section([["What problem are we solving, ", WHITE], ["and for whom?", GREEN]], "Part 1. Market Intel, Segment, Persona. Understand the situation before anyone proposes a solution.");

motion(1, "Market Intel", "What is the landscape, and how much of what we know is evidence?", "Market Intelligence Brief", "A market sweep is not a segment.",
  (s) => {
    handoffCard(s, ["", "", "", "", "", ""], PX + 0.3, PY + 0.3, PW - 0.6, 3.2);
    T(s, "THE EVIDENCE LEGEND", { x: PX + 0.35, y: PY + 3.8, w: 4, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.5 });
    evidencePill(s, "ACTUAL DATA", PX + 0.35, PY + 4.25, 1.9);
    evidencePill(s, "INFERRED", PX + 2.45, PY + 4.25, 1.9);
    evidencePill(s, "ESTIMATE", PX + 0.35, PY + 4.85, 1.9);
    evidencePill(s, "UNKNOWN", PX + 2.45, PY + 4.85, 1.9);
  },
  "Frame: the landscape comes before the segment. Pre-run if using real sources; keep URLs, dates and limits. Fallback: saved Market Intel output. Recovery: AI demos obey Murphy's Law, so I brought receipts.");

motion(2, "Segment", "Which bounded context are we deliberately choosing to learn about?", "Segment Selection Brief", "Sizing is an estimate until it is sourced. Choosing a segment is not proof it is attractive.",
  (s) => {
    const cx = PX + PW / 2, bottom = PY + 4.55;
    [[4.2, "TAM", WHITE, false], [2.9, "SAM", GREEN, false], [1.6, "SOM", GREEN, true]].forEach(([d, label, col, fill]) => {
      s.addShape(pres.ShapeType.ellipse, { x: cx - d / 2, y: bottom - d, w: d, h: d, fill: fill ? { color: GREEN } : { type: "none" }, line: { color: col, width: 3 }, objectName: `${label} circle` });
      T(s, label, { x: cx - 0.8, y: bottom - d + (fill ? d / 2 - 0.25 : 0.2), w: 1.6, h: 0.5, fontFace: F.head, fontSize: 22, color: fill ? BLACK : col, align: "center", objectName: `${label} label` });
    });
    const rows = [["TAM", "population"], ["SAM", "trade and industry"], ["SOM", "competition and reach"]];
    rows.forEach(([k, v], n) => {
      T(s, [{ text: k + "   ", options: { fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.5 } }, { text: "from " + v, options: { fontSize: 18, color: WHITE } }],
        { x: PX + 0.5, y: PY + 4.7 + n * 0.4, w: 5.2, h: 0.36, objectName: `Source ${k}` });
    });
    evidencePill(s, "ESTIMATE", PX + PW - 1.7, PY + 0.3, 1.4);
  },
  "Segment is a deliberate boundary, chosen by a person. Sizing circles are speculation: TAM from population, SAM from trade and industry data, SOM from competition plus reach and capacity. No numbers on the slide. Every size is ESTIMATE until sourced; unknowns stay UNKNOWN. Name inclusions and exclusions out loud.");

{
  const s = canvasSlide(3, "Persona", "Who is this person, in what situation, trying to make what progress?", "Situational Persona", "A hypothesis, not a customer we interviewed.",
    "About 8 minutes across two canvas slides. Guided exchange. Reply to the actual question only. Vague answer on purpose ('keep it safe'), then clarify. Productside framing canvas: list pains, gains and jobs; pick the top of each; write the problem framing statement. Detail lives in the skill, prompt and mural. Synthetic, ESTIMATE until researched. No actor map.");
  const MINT = "62D1AE", PEACH = "FFD58A", PINK = "FFB4B4";
  [["1", "List", 0.9, 4.3], ["2", "Pick the top", 5.4, 3.2], ["3", "Frame the problem", 8.85, 3.55]].forEach(([n, t, x, w]) =>
    T(s, [{ text: n + "  ", options: { color: GREEN } }, { text: t, options: { color: WHITE } }], { x, y: 1.7, w, h: 0.38, fontFace: F.head, fontSize: 18, objectName: `Step ${n} header` }));
  const cx = 3.05, cy = 4.2, r = 2.0;
  s.addShape(pres.ShapeType.ellipse, { x: cx - r, y: cy - r, w: 2 * r, h: 2 * r, fill: { type: "none" }, line: { color: WHITE, width: 2.5 }, objectName: "Customer circle" });
  const pt = (deg) => [cx + r * Math.cos(deg * Math.PI / 180), cy + r * Math.sin(deg * Math.PI / 180)];
  [180, -75, 55].forEach((d, i) => { const [x2, y2] = pt(d); seg(s, cx, cy, x2, y2, WHITE, 2, `Wedge divider ${i + 1}`); });
  s.addText("Persona", { shape: pres.ShapeType.ellipse, x: cx - 0.55, y: cy - 0.55, w: 1.1, h: 1.1, fill: { color: GREEN }, line: { color: GREEN }, fontFace: F.head, fontSize: 13, color: BLACK, align: "center", valign: "middle", margin: 0, objectName: "Persona center" });
  const note = (txt, dx, dy, fill, nm, w = 1.4) => box(s, txt, cx + dx, cy + dy, w, 0.7, { fill, line: fill, size: 16, radius: 0.08, align: "center", margin: [2, 4, 2, 4], name: nm });
  T(s, "Gains", { x: cx - 1.7, y: cy - 0.5, w: 1.1, h: 0.36, fontFace: F.head, fontSize: 18, color: WHITE, objectName: "Gains label" });
  note("Defensible call", -1.45, -1.35, MINT, "Gain");
  T(s, "Pains", { x: cx - 1.7, y: cy + 0.18, w: 1.1, h: 0.36, fontFace: F.head, fontSize: 18, color: WHITE, objectName: "Pains label" });
  note("Conflicting reports", -1.4, 0.7, PINK, "Pain");
  T(s, "Jobs", { x: cx + 0.7, y: cy - 1.15, w: 1.0, h: 0.36, fontFace: F.head, fontSize: 18, color: WHITE, objectName: "Jobs label" });
  note("Pick what to check", 0.55, -0.6, PEACH, "Job");
  [["Top job", PEACH, "Pick what to check next"], ["Top gain", MINT, "Explain it fast"], ["Top pain", PINK, "Reports disagree"]].forEach(([h, col, txt], i) => {
    const y = 2.2 + i * 1.3;
    T(s, h, { x: 5.4, y, w: 3.2, h: 0.32, fontFace: F.head, fontSize: 16, color: WHITE, objectName: `Pick header ${i + 1}` });
    s.addShape(pres.ShapeType.roundRect, { x: 5.4, y: y + 0.34, w: 3.2, h: 0.85, rectRadius: 0.1, fill: { color: WHITE }, line: { color: WHITE }, objectName: `Pick card ${i + 1}` });
    box(s, txt, 5.5, y + 0.42, 3.0, 0.69, { fill: col, line: col, color: BLACK, size: 18, radius: 0.08, name: `Pick text ${i + 1}` });
  });
  s.addShape(pres.ShapeType.roundRect, { x: 8.85, y: 2.2, w: 3.55, h: 3.75, rectRadius: 0.15, fill: { color: WHITE }, line: { color: WHITE }, objectName: "Framing statement card" });
  const lines = [["I am ", "a maintenance manager."], ["Trying to ", "pick what to check next."], ["But ", "the reports disagree."], ["Because ", "source and timing are hidden."], ["Makes me feel ", "unsure."]];
  const runs = [];
  lines.forEach(([b, t], i) => { runs.push({ text: b, options: { bold: true, color: BLACK } }); runs.push({ text: t, options: { color: BLACK, breakLine: i < lines.length - 1 } }); });
  s.addText(runs, { x: 9.05, y: 2.35, w: 3.2, h: 3.45, fontFace: F.body, fontSize: 18, valign: "top", paraSpaceAfter: 8, margin: 0, isTextBox: true, objectName: "Framing statement" });
  T(s, "SYNTHETIC. All ESTIMATE.", { x: 8.85, y: 6.02, w: 3.55, h: 0.25, fontSize: 12, color: MUTED, align: "right", objectName: "Canvas footnote" });
}

{
  const s = canvasSlide(3, "Proto-Persona", "Who is this person, in what situation, trying to make what progress?", "Situational Persona", "A hypothesis, not a customer we interviewed.",
    "Persona, part 2. Productside proto-persona canvas: name, portrait, bio, quotes, outcomes, pains. Name is a role, not an invented person. Demographics and quotes stay UNKNOWN because no interviews exist. Thinking aid, not customer evidence.");
  const SKY = "B3F1FF";
  const cardAt = (label, x, y, w, h, nm) => {
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: PANEL }, line: { color: WHITE, width: 1.25 }, objectName: `${nm} card` });
    T(s, label, { x: x + 0.15, y: y + 0.1, w: w - 0.3, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.2, objectName: `${nm} label` });
  };
  const sticky = (txt, x, y, w, h, nm) => box(s, txt, x, y, w, h, { fill: SKY, line: SKY, color: BLACK, size: 18, radius: 0.06, margin: [3, 8, 3, 8], name: nm });
  cardAt("NAME", 0.9, 1.7, 3.3, 1.05, "Name");
  box(s, "Maintenance manager", 1.05, 2.1, 3.0, 0.5, { fill: SKY, line: SKY, color: BLACK, size: 18, font: F.head, radius: 0.06, name: "Persona name" });
  cardAt("PORTRAIT", 0.9, 2.85, 3.3, 3.35, "Portrait");
  s.addShape(pres.ShapeType.ellipse, { x: 2.0, y: 3.4, w: 1.1, h: 1.1, fill: { type: "none" }, line: { color: "7A7A7A", width: 4 }, objectName: "Portrait head" });
  s.addShape(pres.ShapeType.round2SameRect, { x: 1.7, y: 4.65, w: 1.7, h: 0.95, fill: { type: "none" }, line: { color: "7A7A7A", width: 4 }, objectName: "Portrait shoulders" });
  T(s, "A role, not a person", { x: 1.05, y: 5.75, w: 3.0, h: 0.35, fontSize: 16, color: MUTED, align: "center", objectName: "Portrait note" });
  cardAt("BIO", 4.4, 1.7, 3.95, 2.3, "Bio");
  sticky("Mid-sized plant", 4.55, 2.15, 3.65, 0.5, "Bio 1");
  sticky("Reports conflict", 4.55, 2.75, 3.65, 0.5, "Bio 2");
  sticky("Checks logs, asks a tech", 4.55, 3.35, 3.65, 0.5, "Bio 3");
  cardAt("QUOTES", 8.5, 1.7, 3.9, 2.3, "Quotes");
  pill(s, "UNKNOWN", 9.4, 2.4, 2.1, { fill: ORANGE, color: BLACK, h: 0.55, fontSize: 18 });
  T(s, "No interviews, no quotes", { x: 8.65, y: 3.2, w: 3.6, h: 0.5, fontSize: 18, color: WHITE, align: "center", objectName: "Quotes text" });
  cardAt("OUTCOMES", 4.4, 4.1, 3.95, 2.1, "Outcomes");
  sticky("Clearer decisions", 4.55, 4.55, 3.65, 0.55, "Outcome 1");
  sticky("A choice I can explain", 4.55, 5.2, 3.65, 0.55, "Outcome 2");
  cardAt("PAINS", 8.5, 4.1, 3.9, 2.1, "Pains");
  sticky("Reports disagree", 8.65, 4.55, 3.6, 0.55, "Pain 1");
  sticky("Permission? UNKNOWN", 8.65, 5.2, 3.6, 0.55, "Pain 2");
}

section([["Where do we play, ", WHITE], ["where do we win?", GREEN]], "Part 2. Opportunity Solution Tree, Value Prop vs. Differentiation 2x2, Positioning Statement. Explore and position, with a human choice at each gate.");

motion(4, "Opportunity Solution Tree", "Which needs are worth pursuing, and which solutions and cheap experiments hang off them?", "Opportunity Solution Tree", "A dashboard is a solution candidate, not a need.",
  (s) => {
    const cx1 = PX + 0.25, cx2 = PX + 2.0, cx3 = PX + 3.95, w1 = 1.5, w2 = 1.7, w3 = 1.75;
    ["OUTCOME", "NEEDS", "SOLUTIONS"].forEach((t, i) => T(s, t, { x: [cx1, cx2, cx3][i], y: PY + 0.25, w: 1.9, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1 }));
    box(s, "Clearer decisions", cx1, PY + 2.0, w1, 1.5, { size: 16, bold: false, name: "Outcome" });
    box(s, "Know which report is current", cx2, PY + 1.0, w2, 1.5, { size: 16, name: "Opportunity 1" });
    box(s, "Get permission and coordination", cx2, PY + 3.5, w2, 1.5, { size: 16, name: "Opportunity 2" });
    box(s, "Process change", cx3, PY + 1.95, w3, 0.9, { size: 16, fill: PANEL, line: WHITE, color: WHITE, name: "Solution process" });
    box(s, "Predictive dashboard", cx3, PY + 0.8, w3, 0.9, { size: 16, fill: PANEL, line: WHITE, color: WHITE, name: "Solution dashboard" });
    box(s, "Test: storyboard", cx3, PY + 3.2, w3, 0.9, { size: 16, fill: GREEN, line: GREEN, color: BLACK, name: "Experiment" });
    arrow(s, cx1 + w1, PY + 2.75, cx2, PY + 1.75, WHITE, "Link outcome to opportunity 1");
    arrow(s, cx1 + w1, PY + 2.75, cx2, PY + 4.25, WHITE, "Link outcome to opportunity 2");
    arrow(s, cx2 + w2, PY + 1.75, cx3, PY + 2.4, WHITE, "Link opportunity to process");
    arrow(s, cx2 + w2, PY + 1.75, cx3, PY + 1.25, WHITE, "Link opportunity to dashboard");
    arrow(s, cx3 + w3 / 2, PY + 2.85, cx3 + w3 / 2, PY + 3.2, GREEN, "Link process to experiment");
    T(s, "Synthetic. A person picks at the gate.", { x: PX + 0.25, y: PY + 5.4, w: 5.4, h: 0.4, fontSize: 16, color: MUTED });
  },
  "Ask the room: which opportunity survives if the dashboard disappears? Approving the tree does not choose a branch. Select an actual concept at the gate.");

motion(5, "Value Prop vs. Differentiation 2x2", "Where does each solution from the tree sit? Does the value matter, and is the difference meaningful?", "2x2", "Different is not the same as valuable. AI novelty is evidence of neither.",
  (s) => {
    const ox = PX + 0.9, oy = PY + 5.0, aw = 4.6, ah = 4.2;
    s.addShape(pres.ShapeType.line, { x: ox, y: oy, w: aw, h: 0, line: { color: WHITE, width: 3, endArrowType: "triangle" }, objectName: "Value axis" });
    s.addShape(pres.ShapeType.line, { x: ox, y: oy - ah, w: 0, h: ah, flipV: true, line: { color: WHITE, width: 3, beginArrowType: "triangle" }, objectName: "Difference axis" });
    s.addShape(pres.ShapeType.line, { x: ox + aw / 2, y: oy - ah, w: 0, h: ah, line: { color: LINE, width: 1.5 }, objectName: "Midline vertical" });
    s.addShape(pres.ShapeType.line, { x: ox, y: oy - ah / 2, w: aw, h: 0, line: { color: LINE, width: 1.5 }, objectName: "Midline horizontal" });
    T(s, "Value to the persona", { x: ox, y: oy + 0.12, w: aw, h: 0.3, fontSize: 16, color: WHITE, align: "center", objectName: "Value axis label" });
    T(s, "Meaningful difference", { x: PX - 1.5, y: oy - ah / 2 - 0.175, w: 4.2, h: 0.35, fontSize: 16, color: WHITE, align: "center", rotate: 270, objectName: "Difference axis label" });
    const q = [["Different, not valuable", 0, 0], ["Valuable and different", 1, 0], ["Neither", 0, 1], ["Valuable, not different", 1, 1]];
    q.forEach(([t, cx, cy]) => T(s, t, { x: ox + 0.15 + cx * (aw / 2), y: oy - ah + 0.15 + cy * (ah / 2), w: aw / 2 - 0.3, h: 0.6, fontSize: 14, color: MUTED }));
    // solutions from the tree
    [["A", "Predictive dashboard", ox + 1.15, oy - 3.0], ["B", "Process change", ox + 3.4, oy - 1.2]].forEach(([k, name, x, y]) => {
      s.addText(k, { shape: pres.ShapeType.ellipse, x: x - 0.28, y: y - 0.28, w: 0.56, h: 0.56, fill: { color: GREEN }, line: { color: GREEN, width: 2 }, fontFace: F.head, fontSize: 16, color: BLACK, align: "center", valign: "middle", margin: 0, objectName: `Solution ${k}` });
      T(s, name, { x: x - 1.0, y: y + 0.35, w: 2.0, h: 0.3, fontSize: 15, color: WHITE, align: "center", objectName: `Solution ${k} label` });
    });
    // competitor and current workaround on the same map
    s.addShape(pres.ShapeType.roundRect, { x: ox + 3.4 - 0.26, y: oy - 3.2 - 0.26, w: 0.52, h: 0.52, rectRadius: 0.08, fill: { color: PANEL }, line: { color: WHITE, width: 2.5 }, objectName: "Competitor marker" });
    T(s, "Incumbent", { x: ox + 3.4 - 1.0, y: oy - 3.2 + 0.35, w: 2.0, h: 0.3, fontSize: 15, color: WHITE, align: "center", objectName: "Competitor label" });
    s.addShape(pres.ShapeType.ellipse, { x: ox + 1.15 - 0.26, y: oy - 0.9 - 0.26, w: 0.52, h: 0.52, fill: { type: "none" }, line: { color: WHITE, width: 2.5, dashType: "dash" }, objectName: "Workaround marker" });
    T(s, "Current workaround", { x: ox + 1.15 - 1.0, y: oy - 0.9 + 0.35, w: 2.0, h: 0.3, fontSize: 15, color: WHITE, align: "center", objectName: "Workaround label" });
    // legend
    s.addShape(pres.ShapeType.ellipse, { x: ox - 0.55, y: oy + 0.58, w: 0.2, h: 0.2, fill: { color: GREEN }, line: { color: GREEN }, objectName: "Legend solution" });
    T(s, "Solution", { x: ox - 0.3, y: oy + 0.52, w: 1.0, h: 0.3, fontSize: 14, color: MUTED, objectName: "Legend solution text" });
    s.addShape(pres.ShapeType.roundRect, { x: ox + 1.0, y: oy + 0.58, w: 0.2, h: 0.2, rectRadius: 0.04, fill: { color: PANEL }, line: { color: WHITE, width: 1.5 }, objectName: "Legend competitor" });
    T(s, "Competitor", { x: ox + 1.28, y: oy + 0.52, w: 1.1, h: 0.3, fontSize: 14, color: MUTED, objectName: "Legend competitor text" });
    s.addShape(pres.ShapeType.ellipse, { x: ox + 2.55, y: oy + 0.58, w: 0.2, h: 0.2, fill: { type: "none" }, line: { color: WHITE, width: 1.5, dashType: "dash" }, objectName: "Legend workaround" });
    T(s, "Workaround", { x: ox + 2.83, y: oy + 0.52, w: 1.9, h: 0.3, fontSize: 14, color: MUTED, objectName: "Legend workaround text" });
    pill(s, "ESTIMATE: ILLUSTRATIVE", PX + PW - 3.6, PY + 0.2, 3.3, { fill: YELLOW, color: BLACK, name: "Evidence label ESTIMATE" });
  },
  "Bake-off. Every solution candidate from the Opportunity Solution Tree is placed on the grid, with competitors and the current workaround on the same map, by value to the persona and meaningful difference against the real alternative. Placement is provisional and synthetic here. Missing evidence is UNKNOWN, not low. No moat claims. Ask: can something be different without being valuable? The placement helps decide which solutions go forward; a person makes the choice.");

{
  const s = canvasSlide(6, "Positioning Statement", "Why is this for this person, and why would they choose it over today's workaround?", "Positioning Statement", "A proposed difference is not a reason to believe.",
    "Productside positioning statement canvas: For, who, the, is a, that, unlike, our product gives. Short on the slide on purpose; the detail lives in the skill, prompt and mural. ESTIMATE and synthetic. Read it aloud.");
  const rows = [
    ["For", "maintenance managers"],
    ["Who", "must pick what to check next"],
    ["The", "shared report view"],
    ["Is a", "decision aid"],
    ["That", "shows source and timing"],
    ["Unlike", "log review and chats"],
    ["Our product gives", "a reason others can inspect"],
  ];
  rows.forEach(([k, v], i) => {
    const y = 1.72 + i * 0.64;
    T(s, k, { x: 0.9, y, w: 3.0, h: 0.55, fontFace: F.head, fontSize: 22, color: GREEN, align: "right", valign: "middle", objectName: `Row ${k} label` });
    T(s, v, { x: 4.2, y, w: 8.2, h: 0.55, fontSize: 26, color: WHITE, valign: "middle", objectName: `Row ${k} text` });
    s.addShape(pres.ShapeType.line, { x: 4.2, y: y + 0.58, w: 8.2, h: 0, line: { color: LINE, width: 1 }, objectName: `Row ${k} rule` });
  });
}

section([["What must be true, ", WHITE], ["how do we learn?", GREEN]], "Part 3. Solution Hypothesis, Storyboard, Minimum Viable Narrative, Prototyping. Make the proposition testable, then pick the cheapest test.");

{
  const s = canvasSlide(7, "Solution Hypothesis", "What do we believe will change, and what would make us revise or stop?", "Solution Hypothesis", "Write the rule before the result exists.",
    "Productside solution hypothesis canvas: if/then statement, 2 tiny acts of discovery, 1 quantitative and 1 qualitative metric, plus what would make us revise or stop. Short on the slide on purpose; detail lives in the skill, prompt and mural. Numbers and timeframe stay bracketed until a person sets them before the test. NOT RUN.");
  const lab = (t, x, y, w) => T(s, t, { x, y, w, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.2, objectName: `Label ${t}` });
  lab("IF / THEN", 0.9, 1.68, 5);
  s.addShape(pres.ShapeType.roundRect, { x: 0.9, y: 2.0, w: 11.5, h: 1.2, rectRadius: 0.12, fill: { color: WHITE }, line: { color: WHITE }, objectName: "If then card" });
  const it = [["If we ", "show source and timing, "], ["for ", "maintenance managers, "], ["then we will ", "help them pick and explain the next check."]];
  const iruns = [];
  it.forEach(([b, t]) => { iruns.push({ text: b, options: { bold: true, color: BLACK } }); iruns.push({ text: t, options: { color: BLACK } }); });
  s.addText(iruns, { x: 1.15, y: 2.05, w: 11.0, h: 1.1, fontFace: F.body, fontSize: 24, valign: "middle", margin: 0, isTextBox: true, objectName: "If then statement" });
  lab("2 TINY ACTS OF DISCOVERY", 0.9, 3.3, 5.5);
  s.addShape(pres.ShapeType.roundRect, { x: 0.9, y: 3.62, w: 5.65, h: 1.55, rectRadius: 0.12, fill: { color: PANEL }, line: { color: WHITE, width: 1.25 }, objectName: "Tiny acts card" });
  s.addText([
    { text: "Compare with and without source", options: { bullet: { type: "number" }, breakLine: true } },
    { text: "Walk one real past decision", options: { bullet: { type: "number" } } },
  ], { x: 1.1, y: 3.75, w: 5.3, h: 1.3, fontFace: F.body, fontSize: 20, color: WHITE, valign: "middle", margin: 0, paraSpaceAfter: 6, isTextBox: true, objectName: "Tiny acts text" });
  lab("1 QUANT + 1 QUAL METRIC", 6.75, 3.3, 5.7);
  s.addShape(pres.ShapeType.roundRect, { x: 6.75, y: 3.62, w: 5.65, h: 1.55, rectRadius: 0.12, fill: { color: PANEL }, line: { color: WHITE, width: 1.25 }, objectName: "Metrics card" });
  s.addText([
    { text: "Time to explain the choice", options: { bullet: { type: "number" }, breakLine: true } },
    { text: "Easier to defend, they say", options: { bullet: { type: "number" } } },
  ], { x: 6.95, y: 3.75, w: 5.3, h: 1.3, fontFace: F.body, fontSize: 20, color: WHITE, valign: "middle", margin: 0, paraSpaceAfter: 6, isTextBox: true, objectName: "Metrics text" });
  lab("REVISE OR STOP IF", 0.9, 5.3, 6);
  box(s, "Permission, not data, decides the choice.", 0.9, 5.62, 11.5, 0.55, { fill: PANEL, line: GREEN, color: WHITE, size: 20, radius: 0.1, margin: [2, 14, 2, 14], name: "Revise or stop rule" });
  pill(s, "NOT RUN", 11.0, 1.6, 1.4, { fill: ORANGE, color: BLACK, h: 0.34 });
}

{
  const s = canvasSlide(8, "Storyboard", "What does the story look like, from who has the problem to who else gets the win?", "Storyboard", "Aim for authenticity, simplicity and emotion.",
    "Productside storyboard canvas: a solution summary over six frames. The arc: who has the problem, what the problem is, the oh crap moment, the solution arrives, the solution aha moment, sharing the love. Short on the slide on purpose. NOT RENDERED. Everything after the problem is fictional.");
  T(s, "SOLUTION SUMMARY", { x: 0.9, y: 1.68, w: 4, h: 0.3, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.2, objectName: "Summary label" });
  T(s, "NOT RENDERED  |  SYNTHETIC", { x: 8.2, y: 1.68, w: 4.2, h: 0.3, fontFace: F.accent, fontSize: 14, color: ORANGE, charSpacing: 1.2, align: "right", objectName: "Status note" });
  box(s, "If we show source and timing, managers choose with less doubt.", 0.9, 2.05, 11.5, 0.7, { fill: PANEL, line: WHITE, color: WHITE, size: 22, radius: 0.12, margin: [4, 14, 4, 14], name: "Solution summary" });
  const frames = [
    ["Who has the problem?", "A maintenance manager"],
    ["What is the problem?", "Reports disagree"],
    ["Oh crap", "Deadline. Wrong call looms."],
    ["Solution arrives", "Shared report view"],
    ["Aha moment", "Explains the choice fast"],
    ["Sharing the love", "Team reuses it"],
  ];
  const fw = 1.8, gap = 0.14;
  frames.forEach(([h, cap], i) => {
    const x = 0.9 + i * (fw + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.95, w: fw, h: 1.35, rectRadius: 0.1, fill: { color: WHITE }, line: { color: GREEN, width: 2 }, objectName: `Frame ${i + 1}` });
    T(s, String(i + 1), { x: x + 0.1, y: 3.0, w: 0.4, h: 0.35, fontFace: F.accent, fontSize: 16, color: "007A3D", objectName: `Frame ${i + 1} number` });
    T(s, h, { x, y: 4.4, w: fw, h: 0.65, fontFace: F.head, fontSize: 16, color: WHITE, objectName: `Frame ${i + 1} label` });
    T(s, cap, { x, y: 5.1, w: fw, h: 1.0, fontSize: 16, color: MUTED, objectName: `Frame ${i + 1} caption` });
    if (i < 5) arrow(s, x + fw + 0.01, 3.62, x + fw + gap - 0.01, 3.62, GREEN, `Arrow ${i + 1}`);
  });
}

{
  const s = canvasSlide(9, "Minimum Viable Narrative", "What is the smallest story worth testing?", "Minimum Viable Narrative", "The smallest story worth testing.",
    "Productside MVN canvas: prototype hypothesis and target audience on top, five beats, a builder prompt below. Setup, Encounter, then the Action and Response loop repeated 3 to 6 times, then Resolution. Short on the slide on purpose; detail lives in the skill, prompt and mural. Not built.");
  const lab = (t, x, y, w) => T(s, t, { x, y, w, h: 0.28, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.2, objectName: `Label ${t}` });
  const card = (label, text, x, y, w, h, nm, size = 18) => {
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: PANEL }, line: { color: WHITE, width: 1.25 }, objectName: `${nm} card` });
    lab(label, x + 0.15, y + 0.08, w - 0.3);
    T(s, text, { x: x + 0.15, y: y + 0.42, w: w - 0.3, h: h - 0.5, fontSize: size, color: WHITE, objectName: `${nm} text` });
  };
  card("PROTOTYPE HYPOTHESIS", "Source and timing visible, so managers choose and explain faster.", 0.9, 1.7, 11.5, 0.95, "Prototype hypothesis", 20);
  card("TARGET AUDIENCE", "A maintenance manager at a mid-sized plant", 0.9, 2.75, 11.5, 0.95, "Target audience", 20);
  const by = 3.85, bh = 1.75;
  card("SETUP", "Two reports disagree", 0.9, by, 2.3, bh, "Setup");
  card("ENCOUNTER", "A shared report view", 3.33, by, 2.3, bh, "Encounter");
  s.addShape(pres.ShapeType.roundRect, { x: 5.76, y: by, w: 4.3, h: bh, rectRadius: 0.1, fill: { type: "none" }, line: { color: GREEN, width: 2, dashType: "dash" }, objectName: "Action Response loop container" });
  T(s, "LOOP: 3 TO 6 EXCHANGES", { x: 5.9, y: by + 0.06, w: 4.0, h: 0.28, fontFace: F.accent, fontSize: 14, color: GREEN, charSpacing: 1.2, objectName: "Loop label" });
  card("ACTION", "Asks what is behind it", 5.88, by + 0.4, 2.0, bh - 0.5, "Action", 16);
  card("RESPONSE", "Shows source, time", 7.94, by + 0.4, 2.0, bh - 0.5, "Response", 16);
  card("RESOLUTION", "Explains it and acts", 10.19, by, 2.21, bh, "Resolution");
  lab("BUILDER PROMPT", 0.9, 5.72, 4);
  T(s, "Descriptive, not prescriptive.", { x: 0.9, y: 5.98, w: 8, h: 0.35, fontSize: 20, color: WHITE, objectName: "Builder prompt text" });
  pill(s, "NOT BUILT", 10.85, 5.95, 1.55, { fill: ORANGE, color: BLACK, h: 0.34 });
}

motion(10, "Prototyping", "What is the smallest, cheapest test we can run to learn the most brutal truth?", "Prototype Experiment Brief", "The tiniest act of discovery wins.",
  (s) => {
    s.addShape(pres.ShapeType.roundRect, { x: PX + 0.4, y: PY + 0.5, w: PW - 0.8, h: 3.4, rectRadius: 0.18, fill: { color: WHITE }, line: { color: WHITE }, objectName: "Brief card" });
    T(s, "Build an AI predictive-maintenance dashboard.", { x: PX + 0.8, y: PY + 0.9, w: PW - 1.6, h: 1.3, fontFace: F.head, fontSize: 26, color: "7A7A7A", strike: "sngStrike", objectName: "Struck request" });
    s.addText("TINIEST ACT WINS", {
      shape: pres.ShapeType.roundRect, rectRadius: 0.1, x: PX + 0.9, y: PY + 2.2, w: PW - 1.8, h: 1.2, rotate: 355,
      fill: { type: "none" }, line: { color: GREEN, width: 5 }, fontFace: F.head, fontSize: 30, color: "00C765", align: "center", valign: "middle", margin: 0, objectName: "Tiniest act wins stamp",
    });
    pill(s, "BUILT: IMPLEMENTATION CHECK ONLY", PX + 0.4, PY + 4.1, 5.05, { fill: ORANGE, color: BLACK });
    pill(s, "NOT RUN: PARTICIPANT TEST", PX + 0.4, PY + 4.6, 3.7, { fill: ORANGE, color: BLACK });
    T(s, "Next: examine a recent real decision with a practitioner.", { x: PX + 0.4, y: PY + 5.1, w: PW - 0.8, h: 0.7, fontSize: 16, color: MUTED });
  },
  "The question is the smallest, cheapest test that surfaces the most brutal truth. Compare a conversation, a storyboard or wireframe test, an interaction, and a build. Recommend the tiniest act of discovery that can answer it. Prototypes built in advance are implementation evidence only. The participant test stays NOT RUN until a person actually runs it. If you did not build one, say NOT BUILT.");

// ---------- 14. Fidelity ladder ----------
{
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, "The fidelity ladder", { x: 0.6, y: 0.7, w: 8, h: 0.9, fontFace: F.head, fontSize: 44, color: WHITE, objectName: "Title" });
  T(s, "What can we learn at this fidelity that we could not learn more cheaply?", { x: 0.6, y: 1.6, w: 8.5, h: 0.5, fontSize: 22, color: MUTED, objectName: "Ladder question" });
  const steps = [["Conversation", "Lowest cost"], ["Storyboard / wireframe", "Low cost"], ["Interaction", "Medium cost"], ["Code / build", "Highest cost"]];
  steps.forEach(([t, c], i) => {
    const w = 2.9, x = 0.6 + i * 3.05, y = 5.2 - i * 0.9;
    box(s, "", x, y, w, 6.4 - y, { fill: i === 3 ? WHITE : i === 0 ? GREEN : PANEL, line: i === 0 ? GREEN : WHITE, radius: 0.1, name: `Step ${t}` });
    T(s, t, { x: x + 0.2, y: y + 0.12, w: w - 0.3, h: 0.7, fontFace: F.head, fontSize: 18, color: i === 3 || i === 0 ? BLACK : WHITE, objectName: `Step label ${t}` });
    T(s, c, { x: x + 0.2, y: y + 0.8, w: w - 0.4, h: 0.3, fontSize: 16, color: i === 3 || i === 0 ? BLACK : MUTED, objectName: `Step cost ${t}` });
  });
  T(s, "Lo-fi wins.", { x: 8.2, y: 0.8, w: 4.5, h: 0.6, fontFace: F.head, fontSize: 32, color: GREEN, align: "right", objectName: "Rule" });
  T(s, [{ text: "The most expensive way to test your idea is to build ", options: { color: WHITE } }, { text: "production quality software.", options: { color: GREEN } }], { x: 0.6, y: 2.5, w: 6.0, h: 1.6, fontFace: F.head, fontSize: 28, objectName: "Patton quote" });
  T(s, "Jeff Patton", { x: 0.6, y: 4.0, w: 4, h: 0.3, fontSize: 16, color: MUTED, objectName: "Quote attribution" });
  s.addNotes("Jeff Patton: the most expensive way to test your idea is to build production quality software. A polished prototype is not stronger evidence. It may be a more expensive rendering of weak assumptions. Lo-fi wins. Quote source: https://jpattonassociates.com/dual-track-development/ (Jeff Patton, Dual Track Development is not Duel Track, 2017). Cost labels on this ladder are illustrative, not universal; choose the lowest fidelity that can expose the risk.");
}

// ---------- 15. Prompt / Skill / Agent / Plugin ----------
{
  const s = pres.addSlide({ masterName: "PS_CONTENT" });
  T(s, "Choose the lightest useful abstraction", { x: 0.6, y: 0.7, w: 11, h: 0.9, fontFace: F.head, fontSize: 40, color: WHITE, objectName: "Title" });
  const cols = [["PROMPT", "Explore", "Paste it into any chat."], ["SKILL", "Codify", "A bounded, repeatable play."], ["AGENT", "Delegate", "An operator pursuing an outcome."], ["PLUGIN", "Distribute", "The kit."]];
  cols.forEach(([k, v, d], i) => {
    const x = 0.6 + i * 3.05;
    panel(s, x, 2.1, 2.85, 3.4);
    pill(s, k, x + 0.3, 2.45, 1.5, { fill: GREEN, color: BLACK });
    T(s, v, { x: x + 0.3, y: 3.1, w: 2.3, h: 0.7, fontFace: F.head, fontSize: 30, color: WHITE });
    T(s, d, { x: x + 0.3, y: 3.9, w: 2.3, h: 1.2, fontSize: 16, color: MUTED });
  });
  T(s, "Today Dean operates the chain. No autonomous discovery operator exists. Ten artifacts do not prove demand.", { x: 0.6, y: 5.9, w: 11, h: 0.5, fontSize: 18, color: WHITE, objectName: "Honest limit" });
  s.addNotes("Show Persona's skill, template, worked and weak examples, and the paste-ready prompt side by side before this slide.");
}

// ---------- 16. Close ----------
{
  const s = pres.addSlide({ masterName: "PS_TITLE" });
  s.addText([
    { text: "Learn faster.", options: { breakLine: true, color: WHITE } },
    { text: "Decide better.", options: { breakLine: true, color: WHITE } },
    { text: "Then build.", options: { color: GREEN } },
  ], { x: 0.6, y: 0.9, w: 11, h: 4.2, fontFace: F.display, fontSize: 80, margin: 0, valign: "top", isTextBox: true, objectName: "Closing line" });
  T(s, "Pick one motion. Bring your own context. Try it tomorrow.", { x: 0.6, y: 5.45, w: 9, h: 0.5, fontSize: 22, color: MUTED, objectName: "Invitation" });
  s.addImage({ path: LOGO("lockup-green.png"), x: 11.0, y: 5.9, w: 1.7, h: 0.867, altText: "Productside", objectName: "Productside lockup" });
  s.addNotes("Confirm repo access before promising a QR code works for everyone. AI demos obey Murphy's Law, so I brought receipts.");
}

pres.writeFile({ fileName: OUT }).then(async () => {
  const skill = process.env.PPTX_SKILL_DIR;
  if (skill) {
    const { applyTheme } = require(path.join(skill, "scripts/apply_theme.js"));
    await applyTheme(OUT, THEME);
  }
  console.log("wrote", OUT);
});
