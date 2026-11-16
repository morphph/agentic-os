# Last 24 Hours AI News — daily brief from a fixed source list

Modelled on the Morning Intel brief, with a fixed source list instead of open-ended discovery. Use America/Chicago for report dating. The window is the 24 hours before the run starts; state its start and end in the report.

Write the report in Simplified Chinese. Keep product names, model names, people's names, handles and quoted post text in their original language. Keep the section headings below exactly as written, in English, so saved reports stay comparable.

## Sources

Read every entry in the attached source list (`last-24-hours-sources`): the official pages, then the X calls in their listed priority order. The source list is the only place that names sources; when it changes, follow it. Parallelize independent page reads when supported.

- Do not add sources of your own. Web search is allowed only to verify a publication date, to find the original link for something a listed source points to, or as the X fallback described in the X data rubric.
- This brief has no Hacker News, YouTube, GitHub, Reddit, Gmail or calendar section. Do not read them.
- A page that fails to load or renders no text is unavailable, not empty. Try its feed if the source list gives one, then record the failure.

## Dates

- Every item needs a publication date taken from the page, the feed or the post itself. Collection time is not a publication date.
- Keep an item only when its publication date is inside the window. A page listing older entries is normal; skip them silently.
- A source that gives only a date, with no time, is inside the window when that date is today or yesterday; mark such items as date-only.
- When a date cannot be established, do not place the item in the main sections. List it under Source Status as undated.

## Merging and repeats

- Merge items about the same event into one entry: an official page, the official account's post, an employee's post about it and commentary from the searches belong together. Lead with the official source and attach the other links.
- Before writing, read the earlier reports in `inbox/research/last-24-hours/` from the previous two days, if any exist. An item an earlier report already covered appears again only when there is a real new development; mark it `（已报，更新：…）`. Say in Source Status which earlier reports were used, or that none exist.
- Posts from the searches whose text is only a link, a job advert, a giveaway or a generic tool list are noise. Drop them and give the dropped count.

## Writing

- Lead each entry with what changed and who it affects, then the evidence. One to three sentences per entry.
- Link every factual claim to its original source. For X posts give the measured likes and reposts from the tool; an unknown count stays unknown.
- No invented numbers, no guessed attribution. If two sources disagree, say so.
- A quiet day is normal. A section with nothing inside the window says so in one line rather than being padded.

## Stable result headings

Return the complete report with these headings:

# Last 24 Hours AI News - YYYY-MM-DD (Weekday)

State the window: start date/time to end date/time, with the zone.

## TL;DR
Three to six bullets, most consequential first.

## Top Story
One or two paragraphs with direct sources.

## Anthropic / Claude
Everything from the source list's Anthropic / Claude official pages and official accounts, with related posts from the Anthropic / Claude people merged in.

## OpenAI / Codex
Everything from the source list's OpenAI / Codex official pages and official accounts, with related posts from the OpenAI / Codex people merged in.

## Google and Others
Everything from the source list's Google and Others group.

## From the People
Posts from the source list's followed people that are not already merged into an entry above: opinions, tips, previews and hints. Group by person. Skip personal or off-topic posts.

## Coding Agents on X
The strongest posts from the coding-agents search: techniques, workflows, tools and notable opinions. Give likes and reposts.

## Marketing and Growth Engineering on X
The strongest posts from the marketing-related searches: how people use agents for marketing, growth, SEO, ads and outbound, and how the marketing / growth / GTM engineer role is described. Give likes and reposts.

## Source Status
A table with one row per entry in the source list (each official page and each X call): Source / Status / Items inside the window / Freshness or failure. Use the X labelling from the X data rubric and give posts read per call, any truncated call and the remaining budget. Add the undated items, the dropped-noise count and which earlier reports were used for the repeat check. End with the observed generation time. The bridge saves the complete answer; do not replace it with a short summary or a file link.
