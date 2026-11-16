# Last 24 Hours AI News — source list

This is the complete source list for the Last 24 Hours AI News workflow. To add or remove a source, edit only this file: the workflow reads every entry here and nothing else, and the report rubric names no individual source. Each row below gets its own row in the report's Source Status table.

## Official pages

Read each page (or its feed when the page does not render) and keep only entries published inside the window. The Group column decides which report section an item belongs to.

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
| Google and Others | Google DeepMind blog | https://deepmind.google/blog/ (feed: https://deepmind.google/blog/rss.xml) |
| Google and Others | Google AI blog | https://blog.google/technology/ai/ (feed: https://blog.google/technology/ai/rss/) |
| Google and Others | Hugging Face blog | https://huggingface.co/blog (feed: https://huggingface.co/blog/feed.xml) |
| Google and Others | Latent Space | https://www.latent.space/ (feed: https://www.latent.space/feed) |

## X calls, in priority order

Read with `x_research_data`, `operation: search`, `sinceHours: 24`. Make the calls in the order of this table, one call per row, exactly as written. Priority 1 is official accounts, priority 2 is followed people, priority 3 is topic searches: if the reading budget runs out, the lower-priority calls are the ones left unmade. Keep the parentheses: without them a filter applies only to the last term.

| Priority | Tier | Call | Query | sort | maxResults |
|---|---|---|---|---|---|
| 1 | Official accounts | Anthropic / Claude official (3) | `(from:AnthropicAI OR from:claudeai OR from:ClaudeDevs) -filter:replies` | Latest | 20 |
| 1 | Official accounts | OpenAI / Codex official (3) | `(from:OpenAI OR from:OpenAIDevs OR from:ChatGPTapp) -filter:replies` | Latest | 20 |
| 2 | People | Anthropic / Claude people (6) | `(from:bcherny OR from:_catwu OR from:trq212 OR from:lydiahallie OR from:delba_oliveira OR from:DarioAmodei) -filter:replies` | Latest | 20 |
| 2 | People | OpenAI / Codex people (7) | `(from:sama OR from:gdb OR from:markchen90 OR from:merettm OR from:thsottiaux OR from:embirico OR from:simpsoka) -filter:replies` | Latest | 20 |
| 2 | People | Also followed (1) | `from:karpathy -filter:replies` | Latest | 20 |
| 3 | Topic searches | Coding agents | `("Claude Code" OR Codex OR "coding agent") min_faves:100 -filter:replies lang:en` | Top | 20 |
| 3 | Topic searches | Marketing / growth / GTM engineering | `("marketing engineering" OR "marketing engineer" OR "growth engineering" OR "growth engineer" OR "GTM engineering" OR "GTM engineer") min_faves:10 -filter:replies lang:en` | Top | 20 |
| 3 | Topic searches | Coding agents used for marketing | `("Claude Code" OR Codex) (marketing OR growth OR SEO OR ads OR outbound) min_faves:20 -filter:replies lang:en` | Top | 20 |

People: Boris Cherny, Cat Wu, Thariq, Lydia Hallie, Delba, Dario Amodei; Sam Altman, Greg Brockman, Mark Chen, Jakub Pachocki, Tibo, Alexander Embiricos, Kath Korevec; Andrej Karpathy.

## X reading budget

The calls above read at most 160 posts, inside the 200-post run budget. Do not add X calls, raise `maxResults`, or repeat a call. When a result warns that more matches exist than were returned, name that call as truncated in Source Status. If the tool stops at a budget, report what was read and which calls were not made.
