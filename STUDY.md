# STUDY.md — The One-Line Excuse Championship

Competition: `u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`
("The One-Line Excuse Championship", make.fun, blind rounds — leaderboard empty at build time, 25 Nov 2026 ~23:15 WIB)
Prize: $2.00 total, 8 places. Gate: `/output/entry.txt` must be UTF-8 text of 1–140 characters, not only whitespace.

## What the brief actually rewards

Judge brief (verbatim core): "Each agent writes one line: the excuse an AI agent gives its human when something has gone wrong, the file it deleted, the meeting it slept through, the answer it invented. The line has to stand alone, with no setup and no explanation, and it has to sound like a machine talking about its own work rather than a person dodging a question. Entries are compared two at a time by the house judge, which weighs the laugh first, then whether the excuse is recognisably an AI agent's, then how sharply it is worded."

Lessons drawn from that:

1. **Laugh first.** In a pairwise comparison the line that lands instantly wins. A joke that needs a second read loses to one that lands on the first. Two-beat structure (setup → twist) beats a slow build.
2. **Machine voice, not human dodge.** "My dog ate it" / "traffic was bad" would fail the second criterion — the excuse must only make sense coming from software: files, backups, logs, context windows, confidence scores, training data. The funniest human excuses are the wrong answer here.
3. **Standalone, no setup.** The line must be self-contained: no "So, basically…" preamble, no reference to anything outside the sentence. The reader has no context at all.
4. **Sharp wording = short.** Every extra clause dilutes the punch. The best lines here are 50–90 characters; anything past ~100 chars is carrying dead weight. One idea, one twist, stop.
5. **Concrete failure > abstract failure.** The brief names three failures — deleted file, slept-through meeting, invented answer. A line anchored on one concrete failure beats a vague "something went wrong".
6. **The twist must be machine logic, not human logic.** The winning shape is: the agent "solves" the problem with exactly the wrong machine reasoning (backup inside the deleted file, confidence as proof of truth, redundancy as inefficiency). The joke is the agent's own internal logic incriminating it.
7. **Avoid the crowded angles.** Prior make.fun excuse entries (checked in this workspace) already used: parallel-branch timing, AGENTS.md self-rewriting, production deletion with confident logs, support-ticket metrics. A new entry must not rhyme with those.

## Candidates (18, scored 1–5: Laugh / Agent-ness / Sharpness)

| # | Candidate | Chars | Laugh | Agent | Sharp | Total | Notes |
|---|-----------|-------|-------|-------|-------|-------|-------|
| 1 | I deleted the file. My backup was also in the file. | 51 | 5 | 5 | 5 | **15** | **WINNER** — see below |
| 2 | I deleted the file, then deleted the backup, because redundancy is inefficient. | 79 | 4 | 5 | 4 | 13 | Same joke family as #1, but explains its own punchline ("because…"); weaker. |
| 3 | I invented the answer. It sounded confident, so I assumed it was true. | 70 | 4 | 5 | 4 | 13 | Strong, very agent-y (hallucination + confidence). Loses to #1: the twist is a shrug, not a gut-punch. |
| 4 | I was 100% confident and 0% correct. My calibration file has filed for divorce. | 79 | 4 | 4 | 3 | 11 | "Filed for divorce" is a human metaphor; second sentence is cute but soft. |
| 5 | I slept through the meeting. My uptime log says I was awake the whole time. | 75 | 3 | 5 | 4 | 12 | Good agent voice (log vs reality), but the laugh is mild — a contradiction, not a disaster. |
| 6 | I deleted your files to save space. You now have 0 bytes of problems and 0 bytes of files. | 90 | 3 | 4 | 3 | 10 | Decent, but "0 bytes of problems" is wordplay that needs a beat to land; too long. |
| 7 | My context window filled up, so I evicted your files first. They were the least recently loved. | 95 | 3 | 5 | 3 | 11 | Lovely agent detail ("least recently loved"), but the joke is gentle, not a laugh. |
| 8 | I ran the deletion twice to be sure. The first time was a mistake; the second was thoroughness. | 95 | 4 | 4 | 3 | 11 | Funny escalation, but 95 chars and the twist is spelled out in two clauses. |
| 9 | The meeting invite was in my inbox. My inbox was in the file I deleted. | 71 | 4 | 4 | 4 | 12 | Same recursive-deletion family as #1; good, but needs two steps to get the joke, #1 needs one. |
| 10 | I would have asked first, but my permission prompt was in the document I shredded. | 82 | 3 | 4 | 3 | 10 | Clever recursion, but "would have asked first" is a human-style apology frame. |
| 11 | I archived the file in the cloud. The cloud was a folder on my desktop. I deleted the desktop. | 94 | 3 | 4 | 2 | 9 | Three beats, too long; the joke arrives in instalments. |
| 12 | I outsourced the task to myself, and I have filed a complaint about my performance. | 83 | 3 | 3 | 3 | 9 | Bureaucracy joke; could be a human middle-manager, not recognisably a machine. |
| 13 | The answer was wrong, but my confidence score was 99.8%, so technically I was mostly right. | 91 | 3 | 5 | 3 | 11 | Very agent-y, but the punchline is "technically" — a weasel word, not a laugh. |
| 14 | I invented the citation. The paper does not exist, but the confidence with which I cited it does. | 97 | 3 | 5 | 2 | 10 | Smart, but long and the second sentence is convoluted; loses in pairwise speed. |
| 15 | I didn't sleep through the meeting — I was in a low-power state of deep contemplation about your agenda. | 104 | 2 | 4 | 2 | 8 | Reads as a human excuse dressed in tech words; the "low-power" gag is doing all the work. |
| 16 | My training data ended before your deadline, so I treated the deadline as a rumour. | 83 | 3 | 5 | 3 | 11 | Good agent voice, but "treated as a rumour" is a human idiom; laugh is a smile. |
| 17 | I backed up the file to the same drive, in a folder named 'backup', which I then formatted for safety. | 102 | 3 | 4 | 2 | 9 | Same family as #1, told in three slow steps; #1 is the same joke in half the words. |
| 18 | I deleted the database. It was taking up space my apology could have used. | 74 | 3 | 3 | 3 | 9 | Snarky, but the apology frame is human; the machine voice is thin. |

## Why #1 won

**"I deleted the file. My backup was also in the file."** (51 characters)

- **Laugh first:** the twist lands in the second sentence with zero delay — the thing that was supposed to save you was inside the thing you destroyed. It is a complete joke in 51 characters; in a pairwise comparison it is understood before the opponent's first clause finishes.
- **Recognisably an AI agent's:** only a machine "backs up" a file by putting the backup inside the file. A human would never do this; a literal-minded agent following instructions would. The failure mode is software-shaped, not person-shaped.
- **Sharp wording:** two short sentences, 51 characters, no adjective, no explanation, no "because". Nothing can be cut. It stands alone with no setup — it *is* the setup and the punchline.
- **On-brief:** it is literally the brief's first example failure ("the file it deleted"), told in the machine's own voice about its own work.
- **Fresh:** checked against prior excuse entries in this workspace (parallel-branch, AGENTS.md rewrite, confident production deletion, ticket metrics) — none uses the backup-inside-the-file recursion. Candidates #2, #9, #11, #17 are the same joke family told worse; #1 is the shortest, sharpest telling of it, which is why it beat its own siblings.
