SOFTWARE TESTING · AI-FIRST EDITION (2026)
HW03 — GUI & Usability Testing
on the Event Management System (EMS)
Design a shared GUI checklist · test your scenario · evaluate usability · go cross-platform.
Group + individual 4 scenarios A–D 3 tasks AI-first
SUT: https://promoter-starboard-prude.ngrok-free.dev/

AT A GLANCE
What you will deliver
Four graded tasks, one shared team checklist, everything logged the AI-first way.
| 1   | 2   | 3   | 4   |
| --- | --- | --- | --- |
GUI Checklist Usability Report Cross-Platform Findings + Skills
A team checklist (>40 items)  Heuristic evaluation of the  3 OS ×5 browsers ×3 device  Submit bugs to the form; build
applied to your 3+ screens. functions you own. types on your 3 screens. reusable Agent Skills.
| 30 pts | 25 pts | 25 pts | 20 pts |
| ------ | ------ | ------ | ------ |
CS423 · CSC15003 —Software Testing (AI-First)  ·  HW03 —GUI & Usability on EMS 2

THE SYSTEM UNDER TEST
EMS — Event Management System
A live web app of the Faculty of IT: create events, register, check-in, support, analytics.
https://promoter-starboard-prude.ngrok-free.dev/
WHAT IT DOES ACCESS
› Admin side —events, users, categories, check-in, support, settings, analytics. Web (SUT)
promoter-starboard-prude
› User side —browse & register for events, get a QR ticket, rate events, ask for
.ngrok-free.dev
support.
Admin
› UI-rich —forms, drag-drop reorder, uploads, rich-text, toasts, status colours,
admin@gmail.com
EN/VI. Admin@123
User side
https://zalo.me/g/rupogxlykt3yxd3snodl register your own
student/guest account
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 3

HOW THE WORK IS SPLIT
One team checklist, one scenario each
You share the checklist; you own a scenario end-to-end.
GROUP · shared INDIVIDUAL · your core
› Design ONE GUI checklist (>40 items). › Pick ONE scenario: A, B, C or D.
› Cover all four interface aspects IA-01…IA-04. › List ≥ 3 screens of that function group.
› Submit checklist + reference sources + AI prompts. › Run the checklist, usability & cross-platform on them.
NO DUPLICATION Inside a group, no two members may own the same scenario and the same set of screens.
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 4

CHOOSE ONE
The four scenarios
Each maps to a function group of EMS. Everyone in the team should try to cover all four.
Admin creates & manages events User registers for an event
A B
Event lifecycle: create, validate, configure, publish, Public discovery & registration: browse, event detail, sign-
approve, check-in. up, QR ticket.
Admin manages users User asks Support, Admin resolves
C D
User administration: roles, block/unblock, reset password, Support-request lifecycle across the user and the admin
export. sides.
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 5

SCOPE
List at least 3 screens
Choose ≥ 3 screens from your scenario's function group (examples below).
A · Events B · Register C · Users D · Support
• Events list + status filters • Home + featured carousel • Users list + filters • User: create request (+image)
• Add/Edit Event (upload, rich-text, • Event detail page • Assign role / edit user • User: my requests + response
date validation)
• Registration form (roles, waitlist) • Block / Unblock + Reset password • Admin: requests list
• Registration & Roles config (Pending/Resolved)
• My Registrations + QR ticket • Export to Excel
• Participants approval • Admin: request detail + reply
• Post-event star review
• Check-in tab
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 6

TASK 1 · 30 pts
GUI Checklist
Ground it in Nielsen / Norman / Shneiderman —then execute it on your screens.
PART A —SHARED (group) PART B —EXECUTION (individual)
› > 40 items across IA-01…IA-04. › Run the checklist on each of your ≥ 3 screens.
› AI drafts it; you review & add missed items. › Mark every item Passed / Failed per screen.
› For each added item, say WHY AI missed it. › Notes column: reason for each Fail.
› Submit checklist + sources + AI prompts. › Screenshots for Failed items; log every bug.
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 7

TASK 2 · 25 pts
User Testing → Usability Report
Design a scenario, run it with 5 real users, then analyse the results.
THE 5-USER PROTOCOL WHAT TO COLLECT
› Design —a goal-based task scenario on your screens.
› Task success rate
› Recruit 5 —real users outside the class (contacts masked).
› Time on task
› Run sessions —moderated, think-aloud, observe neutrally.
› Errors / hesitations
› Collect —success, time, errors + SUS / UEQ-S + probes.
› Analyse —rank by severity → prioritised recommendations. › SUS or UEQ-S score
› Open-ended probes
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 8

TASK 3  ·  25 pts
Cross-Browser / Cross-Platform
Build a compatibility matrix for each of your 3 screens.
| 3   |                   | 5   |          | 3   |                |
| --- | ----------------- | --- | -------- | --- | -------------- |
|     | Operating systems |     | Browsers |     | Device classes |
Windows · macOS · Android / iOS Chrome · Firefox · Safari · Edge · Opera Desktop · Tablet · Phone
COVERAGE   Not all 45 combos —but hit every OS, every browser and every device class at least once, per screen.
TOOLS   BrowserStack / LambdaTest trial · overlay MSSV@....edu.vn on every screenshot beside the EMS URL.
CS423 · CSC15003 —Software Testing (AI-First)  ·  HW03 —GUI & Usability on EMS 9

REPORT EVERYTHING TWICE
Bugs & usability findings
Every defect and suggestion goes to the form AND into one aggregated log.
1 · GOOGLE FORM 2 · AGGREGATED LOG
Submit each finding at: › One file consolidating all your findings.
forms.gle/ › Columns: ID · Screen · Type · Severity · Fix · Screenshot ·
CJQFQCAXcsDbXDMM9 Timestamp.
Use your student-ID email › Must match your form submissions (TA cross-checks).
MSSV@....edu.vn
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 10

HOW TO WORK
The AI-first rules
Use AI as a disciplined assistant —and prove it.
› Guide, don't dump —drive the AI step-by-step through the technique, not one generic prompt.
› Human review —you own the correctness; never submit raw AI output.
› AI Audit Report —log every AI interaction: tool, time, prompt, output (mandatory appendix).
› AI Critique —200–300 words on where the AI was wrong, biased or incomplete.
› Anti-cheat —real EMS screenshots, real cross-platform captures, real participants.
› Git log —one commit per step: design, execution, bug logging, evaluation.
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 11

GRADING
How it adds up
100 points across five graded components.
| #   | Component | Scope | Pts |
| --- | --------- | ----- | --- |
1a Shared checklist (>40 items) + sources + AI prompts group 15
1b Checklist execution on ≥3 screens + bug reports individual 15
2 Usability Report (heuristics + severity + fixes) individual 25
| 3   | Cross-browser / platform matrix             | individual | 25  |
| --- | ------------------------------------------- | ---------- | --- |
| 4   | Findings submission (form) + aggregated log | individual | 10  |
| 5   | Agent Skills + demo videos                  | individual | 10  |
|     | Total                                       |            | 100 |
CS423 · CSC15003 —Software Testing (AI-First)  ·  HW03 —GUI & Usability on EMS 12

SUBMISSION
What to hand in
Individual ZIP + shared group artefacts on Moodle.
YOUR ZIP CONTAINS REMEMBER
› Main report (Markdown + PDF). Filename
<MSSV>_HW03_AI_
› Bug & Usability Findings Log.
GUIUsability_EMS_<grade>.zip
› Cross-platform screenshots (with your email).
• No late submission.
› AI Audit Report + AI Critique.
• Missing a required doc → 0.
› Git commit log + Agent Skills + README.
• Shared prompts between students → 0.
• Oral defence: random 30%.
CS423 · CSC15003 —Software Testing (AI-First) · HW03 —GUI & Usability on EMS 13

GET STARTED
Your first five moves
1 Form your team & pick who takes A, B, C, D.
2 Open the SUT and register your own user account.
3 Together, draft the >40-item checklist (AI + review).
4 List your ≥ 3 screens and run the checklist.
5 Evaluate usability, go cross-platform, log every finding.
Questions? lqvu@fit.hcmus.edu.vn · and the TA team (see the brief).