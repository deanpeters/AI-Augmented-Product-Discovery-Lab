#!/usr/bin/env bash
# Create a dated rehearsal folder from docs/REHEARSAL.md. rehearsal/ is gitignored.
set -euo pipefail
day="${1:-$(date +%F)}"
root="$(cd "$(dirname "$0")/.." && pwd)/rehearsal/$day"
mkdir -p "$root"
motions=("01-market-intel" "02-segment" "03-persona" "04-opportunity-solution-tree" "05-value-prop-differentiation" "06-positioning-statement" "07-solution-hypothesis" "08-storyboard" "09-minimum-viable-narrative" "10-prototyping")
for m in "${motions[@]}"; do
  f="$root/$m.md"
  [ -e "$f" ] && continue
  cat > "$f" <<TPL
# $m

- Tool and model:
- Mode (Guided / Context dump / Best guess):
- Start and end time (minutes taken):
- Prompt sent (exact):

\`\`\`text

\`\`\`

- Output saved as: ${m}.output.md
- Small handoff (target, belief, evidence, inferred, outcome, biggest question):

\`\`\`text

\`\`\`

- Human decision made and why:
- Did a new chat consume the handoff? (yes / no / what was missing)
- What broke, and the one-line recovery:
- Readable from the back of the room? (yes / no)
- Keep as fallback? (yes / no)
TPL
done
[ -e "$root/timing.md" ] || cat > "$root/timing.md" <<TPL
# Timing ($day)

| Block | Planned min | Actual min | Notes |
|---|---|---|---|
| Open, Hall of Shame, request, cost paradox | 10 | | |
| Part 1: Market Intel, Segment, Persona | 16 | | |
| Part 2: OST, 2x2, Positioning | 12 | | |
| Part 3: Hypothesis, Storyboard, MVN, Prototyping | 17 | | |
| Fidelity ladder, abstractions, close | 8 | | |
| Buffer and Q&A | 27 | | |
TPL
echo "Created $root"
