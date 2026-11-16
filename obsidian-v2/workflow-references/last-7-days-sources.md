# Last 7 Days AI News — source list

This is the complete source list for the Last 7 Days AI News workflow. Edit this file to add or remove a source; the workflow reads every entry and nothing else. Each entry gets its own row in the report's Source Status table.

## Official pages

Read each page (or its feed when the page does not render) and keep only entries published inside the window.

| Group | Source | URL |
|---|---|---|
| Anthropic / Claude | Anthropic News | https://www.anthropic.com/news |
| Anthropic / Claude | Anthropic Engineering | https://www.anthropic.com/engineering |
| Anthropic / Claude | Claude Blog | https://www.claude.com/blog |
| Anthropic / Claude | Claude Platform release notes | https://platform.claude.com/docs/en/release-notes/overview |
| Anthropic / Claude | Claude apps release notes | https://support.claude.com/en/articles/12138966-release-notes |
| Anthropic / Claude | Claude Code changelog | https://code.claude.com/docs/en/changelog |
| OpenAI / Codex | OpenAI News | https://openai.com/news/ (feed: https://openai.com/news/rss.xml) |
| OpenAI / Codex | OpenAI developer blog | https://developers.openai.com/blog |
| OpenAI / Codex | OpenAI API changelog | https://developers.openai.com/api/docs/changelog |
| OpenAI / Codex | Codex changelog | https://developers.openai.com/codex/changelog (feed: https://developers.openai.com/codex/changelog/rss.xml) |
| Google and others | Google DeepMind blog | https://deepmind.google/blog/ (feed: https://deepmind.google/blog/rss.xml) |
| Google and others | Google AI blog | https://blog.google/technology/ai/ (feed: https://blog.google/technology/ai/rss/) |
| Google and others | Hugging Face blog | https://huggingface.co/blog (feed: https://huggingface.co/blog/feed.xml) |
| Google and others | Latent Space | https://www.latent.space/ (feed: https://www.latent.space/feed) |

## X accounts (14)

Read with `x_research_data`, `operation: search`, `sinceHours: 168`, `sort: Latest`, original posts only. Use exactly these three calls:

| Call | Query | maxResults |
|---|---|---|
| Anthropic / Claude people (6) | `(from:bcherny OR from:_catwu OR from:trq212 OR from:lydiahallie OR from:delba_oliveira OR from:DarioAmodei) -filter:replies` | 40 |
| OpenAI / Codex people (7) | `(from:sama OR from:gdb OR from:markchen90 OR from:merettm OR from:thsottiaux OR from:embirico OR from:simpsoka) -filter:replies` | 40 |
| Also followed (1) | `from:karpathy -filter:replies` | 20 |

People: Boris Cherny, Cat Wu, Thariq, Lydia Hallie, Delba, Dario Amodei; Sam Altman, Greg Brockman, Mark Chen, Jakub Pachocki, Tibo, Alexander Embiricos, Kath Korevec; Andrej Karpathy.

## X searches (3)

Read with `x_research_data`, `operation: search`, `sinceHours: 168`, `sort: Top`. Keep the parentheses: without them the like threshold applies only to the last term.

| Topic | Query | maxResults |
|---|---|---|
| Coding agents | `("Claude Code" OR Codex OR "coding agent") min_faves:300 -filter:replies lang:en` | 40 |
| Marketing / growth / GTM engineering | `("marketing engineering" OR "marketing engineer" OR "growth engineering" OR "growth engineer" OR "GTM engineering" OR "GTM engineer") min_faves:20 -filter:replies lang:en` | 20 |
| Coding agents used for marketing | `("Claude Code" OR Codex) (marketing OR growth OR SEO OR ads OR outbound) min_faves:50 -filter:replies lang:en` | 20 |

## X reading budget

The six calls above read at most 180 posts, inside the 200-post run budget. Do not add X calls, raise `maxResults`, or repeat a call. If the tool stops at a budget, report what was read and which calls were not made.
