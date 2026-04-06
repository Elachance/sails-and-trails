# AEO Writing Brief: Cruise Blog
### For use when writing posts in Claude

---

## What this blog is

A first-person cruise review and planning blog written by a family in their mid-30s with two young kids. Content is rooted in real, lived experience — not generic advice. The perspective is: honest, specific, occasionally funny, never performative. No cameras. No influencer energy. Just people who cruise a lot and have opinions about it.

**Sailing history and credentials:**
- Royal Caribbean: multiple sailings with kids, including Star Class and one Star Loft Suite sailing
- Disney Cruise Line: multiple sailings including Concierge class on the Disney Wish
- Currently: Disney Destiny sailing booked (Concierge)
- The blog's defining angle: a family that has done premium/suite-tier experiences on *both* major family lines and can compare them honestly from the same household, same kids, same standards

**Core demographic served:** Families in their 30s evaluating whether premium cruise tiers (Concierge, Star Class, suite upgrades) are worth it — and which line fits their family better.

**Target sponsors:** Disney Cruise Line, Royal Caribbean, Celebrity Cruises (Royal Caribbean Group), and eventually other premium lines (Virgin Voyages, Cunard, etc.)

---

## AEO Content Rules

### 1. Answer first, always
Every post section must open with a direct 1–2 sentence answer to the implied question — *before* the story, the context, or the caveats. AI systems extract the opening of each section. If the answer is buried in paragraph four, it won't get cited.

**Wrong:**
> "We've been cruising with Disney for three years now, and the question we get asked most is whether Concierge is worth it. Let me back up and explain how we even ended up booking it the first time..."

**Right:**
> "Disney Concierge is worth it for families who will actually use the lounge and the dedicated booking window — not for the perks themselves, which are real but overpriced as a standalone value proposition. Here's what actually makes the math work."

### 2. Use question-based H2 headings
Structure posts around the questions real families type (or say) into AI tools. These are your citation targets.

Good H2 formats:
- "Is Disney Concierge worth the price for families?"
- "What's the difference between the Rose and Enchantée on the Disney Wish?"
- "How far out should you book for the Disney Destiny?"
- "What do you actually get in Disney Concierge?"

Avoid vague headings like "Our Experience" or "What We Thought."

### 3. Keep direct answers under 50 words
The paragraph immediately following a question-based heading should be 1–3 sentences, under 50 words. This is the citable chunk. Expand with story and detail after.

### 4. Be specific and numerical wherever possible
AI systems favor citable, verifiable specificity over impressions. Include:
- Prices, dates, booking windows
- Names of specific restaurants, rooms, ships
- Wait times, distances, ages of kids
- Comparisons ("X vs Y on the same line")

**Vague:** "The service was really impressive."
**Citable:** "Concierge guests get a dedicated line that bypasses the main boarding queue — on our sailing, that was about a 40-minute difference."

### 5. Structure posts with self-contained sections
Each H2 section should make sense if read in isolation — AI tools extract passages, not whole posts. Don't rely on context from earlier in the piece.

### 6. Write for the question people actually ask AI
Before writing a post, ask: *What would a parent type into ChatGPT at 11pm before booking this cruise?* That question is your headline and your first H2.

Examples:
- "Is Disney Wish worth it for a family with a 4-year-old?"
- "What's Disney Destiny vs Wish — is it worth waiting?"
- "How early should I book Disney Concierge?"

### 7. Include a TL;DR near the top
A 2–4 sentence plain-language summary placed early in the post (after the intro, before the first H2) dramatically increases AI citation rates. Label it clearly.

**Format:**
> **TL;DR:** [2–4 sentences summarizing the post's main takeaway, written as a direct answer to the core question.]

### 8. End posts with an FAQ block
A dedicated FAQ section with 4–6 questions and short direct answers is one of the highest-performing AEO elements. Use questions pulled from "people also ask" or from what you'd actually Google.

**Format:**
```
## Frequently Asked Questions

**Is [X] worth it for families with toddlers?**
[1–3 sentence direct answer.]

**How early should you book [X]?**
[1–3 sentence direct answer.]
```

### 9. Lean into the premium tier comparison angle — it's your superpower

The blog's most defensible and citable territory is the direct comparison of premium tiers across lines: DCL Concierge vs Royal Caribbean Star Class. Almost no one has done both with kids and written about it honestly. This creates a category of post that AI systems will return to repeatedly because there is no other source like it.

When writing any post that touches on suite-level or concierge-level experiences, always:
- Name the specific product (Star Class, Star Loft Suite, Concierge, Wish Concierge, etc.) — not just "suite" or "premium"
- State the per-night or per-sailing cost context where possible, even ballpark ranges — this is what people actually want to know and what AI citations pick up
- Compare directly when you can ("Star Class gives you a genie; DCL Concierge gives you a dedicated phone line — here's what that difference actually felt like with kids")
- Note what changed with kids at different ages — a Star Loft Suite at 3 vs 6 is a different experience

**The single most important post this blog can publish:** "DCL Concierge vs Royal Caribbean Star Class — which premium tier is worth it for families?" Nothing else on the internet answers this from lived experience on both sides. Write it after the Destiny sailing so you have both data points fresh.

### 10. Voice and tone
- First person, plural ("we" — you and your husband)
- Warm but direct. Not gushing. Not cynical.
- Specific kids' ages and context where relevant (helps AI systems understand the family travel angle)
- Opinions are stated as opinions: "We think..." / "In our experience..." / "We'd skip it next time."
- Avoid hedging everything into meaninglessness. Take a position.

### 11. Update posts within 90 days of publication
AI systems have a strong recency bias. Set a calendar reminder to revisit top posts and add a brief "Updated [Month Year]:" note with any new info. This keeps them in citation rotation.

---

## Technical Notes (set up once, not per post)

- **robots.txt:** Make sure `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, and `Google-Extended` are not blocked.
- **Cloudflare users:** Check your bot settings — Cloudflare's default may silently block AI crawlers.
- **Avoid JavaScript-rendered content:** Post body text should be in static HTML, not loaded via JS. AI bots can't read it otherwise.
- **llms.txt:** Optional but low-effort. A simple markdown file at yourdomain.com/llms.txt listing your key pages helps AI systems understand your site structure.
- **Schema markup:** Add `Article` and `FAQPage` schema to posts. Most WordPress SEO plugins (Yoast, RankMath) handle this automatically.

---

## Post Checklist (use before publishing)

- [ ] Post title is phrased as a question or contains a clear implied question
- [ ] TL;DR appears near the top (under 4 sentences)
- [ ] Every H2 is phrased as a question
- [ ] Each section opens with a direct answer (under 50 words)
- [ ] At least 3 specific data points (prices, dates, times, comparisons)
- [ ] FAQ section at the bottom (4–6 questions)
- [ ] Sections are self-contained (make sense without surrounding context)
- [ ] Post manually tested: ask ChatGPT or Perplexity the core question and see if your site comes up (do this 4–8 weeks after publishing)
