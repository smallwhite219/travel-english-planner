# travel-english-planner Phase Log

## 2026-06-19 Slow Word Chinese Meaning Display

- model / agent: GPT-5 Codex
- goal: Show the Chinese meaning of each spoken Slow Word English term beside the term, instead of only showing the playback rhythm.
- task track: Fast Track UI/data fix with TDD-style validation update, followed by Release Track push after explicit user request.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\slow-word-practice.js`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Added `meaningZh` to every flattened slow-word entry via a term-to-Traditional-Chinese meaning map.
  - Replaced the active header rhythm badge with the active word's Chinese meaning.
  - Kept rhythm guidance as secondary explanatory copy and added per-card Chinese meanings under each English term.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed and now asserts every slow word has a Han-containing `meaningZh`.
  - `node node_modules\vite\bin\vite.js build` passed; Vite reported only the existing chunk-size warning.
- blockers / risks:
  - `gbrain query` and some sandboxed reads still failed in this Windows sandbox, so Brain lookup used direct Markdown/error-log fallback.
- release:
  - Staged only the Slow Word/data/validation/phase-log changes.
  - Pushed to `origin/main`; GitHub Pages Actions is expected to deploy from the `main` workflow according to `docs/release-topology.md`.

## 2026-06-19 Slow Word Rhythm Badge Visibility

- model / agent: GPT-5 Codex
- goal: Make the Traditional Chinese rhythm explanation visible beside the current Slow Word English title on the live page.
- task track: Fast Track UI copy/style patch + Release Track push after user reported the live page did not show the Chinese explanation clearly; no backend, secrets access, external AI dispatch, Pages mode, or workflow change.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Kept the existing detailed Chinese explainer.
  - Added a visible badge next to the active English title: `正常 1 次 → 慢速 3 次 → 正常 1 次`.
  - Styled the badge to wrap on narrow screens instead of disappearing.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.

## 2026-06-19 Slow Word Session Ordering and Skip Controls

- model / agent: GPT-5 Codex
- goal: Let the user arrange Slow Word playback order and temporarily exclude words for the current practice session without deleting them.
- task track: Precise Track frontend interaction update; no backend, secrets access, external AI dispatch, push, deploy, Pages mode, or workflow change.
- Brain / ErrorLog recall:
  - `gbrain query "travel english slow word order skip practice list"` was attempted but blocked by the Windows sandbox helper in this session.
  - Used Brain Markdown / direct file fallback and retained the relevant Web Speech / PowerShell encoding lessons from `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Added persistent browser-local ordering with `localStorage` key `travelEnglishSlowWordOrder`.
  - Added per-card up/down controls that reorder words within the current group view.
  - Added per-card `本次略過` / `加入本次`; skipped words are excluded from `Loop All` but remain visible and are not deleted.
  - Added `取消本次略過` and `重設順序` session tools.
  - Kept single-word looping disabled for skipped items to match the temporary exclusion semantics.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.

## 2026-06-18 Slow Word Chinese Rhythm Explanation

- model / agent: GPT-5 Codex
- goal: Add a Traditional Chinese explanation beside the Slow Word panel title so the playback rhythm is clear.
- task track: Fast Track UI copy/style patch; no backend, secrets access, external AI dispatch, push, deploy, Pages mode, or workflow change.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Added the explanation `節奏：正常 1 次 → 慢速 3 次 → 正常 1 次；慢速會念原英文單字。`
  - Kept the word count on the right and added CSS so the explanation wraps cleanly.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.

## 2026-06-18 Slow Word Slow Pass Uses Original Term

- model / agent: GPT-5 Codex
- goal: Stop slow-word playback from speaking artificial pronunciation chunks; use the original English term at slow rate instead.
- task track: Fast Track frontend TTS hotfix + Release Track push requested by user; no backend, secrets access, external AI dispatch, Pages mode, or workflow change.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Kept the visible slow-pronunciation guide on each card as a reading aid.
  - Removed the TTS-only respelling path for slow chunks.
  - Slow passes now speak the original English term at `0.65` rate, preserving the rhythm: normal once, slow three times, normal once.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.

## 2026-06-18 Slow Word Rhythm Update

- model / agent: GPT-5 Codex
- goal: Change Slow Word playback rhythm to normal once, slow three times, normal once, then move to the next word or repeat the same word.
- task track: Fast Track frontend TTS behavior update; no backend, secrets access, external AI dispatch, push, deploy, Pages mode, or workflow change.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Reused the existing `speakSlowWordSequence` for both all-word looping and single-word looping.
  - Added a final normal-speed pronunciation after the three slow-pronunciation passes.
  - Updated the visible status labels to `Normal 1/2`, `Slow 1/3` through `Slow 3/3`, and `Normal 2/2`.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.

## 2026-06-18 Slow Word TTS Pronunciation Respelling Hotfix

- model / agent: GPT-5 Codex
- goal: Stop browser TTS from spelling slow-pronunciation chunks such as `pih` and `NIH` letter by letter.
- task track: Fast Track frontend TTS hotfix; no backend, secrets access, external AI dispatch, push, deploy, Pages mode, or workflow change.
- root cause:
  - The visible slow-pronunciation guide uses stress caps and artificial syllables such as `STEE`, `NIH`, and `pih`.
  - Browser Web Speech voices may interpret uppercase multi-letter chunks as acronyms and some non-word chunks as letter sequences.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- fix:
  - Keep the visible card text unchanged.
  - Normalize the text sent to TTS by splitting on `/`, lowercasing multi-letter chunks, preserving true single-letter chunks, and respelling `pih` / `NIH` as `pihh` / `nihh`.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.
- blockers / risks:
  - Actual pronunciation still depends on the selected browser English voice; Web Speech API does not support reliable phoneme-level control.

## 2026-06-18 Split Slow Word Into Standalone Tab

- model / agent: GPT-5 Codex
- goal: Move Slow Word out of the Speech page into its own bottom-navigation tab at the same level as Speech.
- task track: Precise Track frontend route / UI structure update; no backend, secrets access, external AI dispatch, push, deploy, Pages mode, or workflow change.
- Brain / ErrorLog recall:
  - `gbrain query "travel english tts slow word pronunciation page tab"` was attempted but blocked by the Windows sandbox helper in this session.
  - Used Brain Markdown / direct file fallback and reread `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SlowWordPractice.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\App.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\components\BottomNav.jsx`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Created a standalone `SlowWordPractice` page that owns slow-word TTS state, voice selection, rate control, category filtering, all-word looping, and single-word looping.
  - Removed the slow-word panel and playback state from `PresentCoach`, keeping Speech focused on slides, speaker notes, sentence practice, and click-to-pronounce script words.
  - Added a `Slow` bottom-navigation tab next to `Speech`.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.
- blockers / risks:
  - No browser click-through screenshot was completed in this phase.
  - Slow Word pronunciation quality still depends on browser Web Speech API and installed English voices.

## 2026-06-18 Slow Word Pronunciation Loop

- model / agent: GPT-5 Codex
- goal: Add a slow-word practice field to the Speech page using the user-provided `C:\Users\bai\Downloads\slowWord.txt`, with all-word looping and single-word looping.
- task track: Precise Track frontend TTS behavior update; user requested implementation scope directly; no backend, secrets access, routing, push, deploy, Pages mode, or external AI dispatch.
- Brain / ErrorLog recall:
  - `gbrain query "travel english tts slow word pronunciation PresentCoach"` was attempted; sandbox helper failed first, then sandbox-external retry returned `No brain configured. Run: gbrain init`.
  - Used Brain Markdown / direct file fallback and read `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`.
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\brain\skills\engineering\spec-driven\SKILL.md`
  - `D:\vibeCode\brain\skills\engineering\tdd\SKILL.md`
  - `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\utils\tts.js`
  - `C:\Users\bai\Downloads\slowWord.txt`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\slow-word-practice.js`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Added a dedicated `slow-word` data module with 5 groups and 126 pronunciation items from `slowWord.txt`.
  - Reused the existing browser Web Speech API wrapper and English voice selector; no external TTS service or API key was added.
  - Slow-word sequence speaks the English term once, then speaks the slow pronunciation guide three times at `0.65` rate.
  - Added all-word loop by selected category and single-word loop from each word card; the existing Stop / Pause / Resume controls handle the loop modes.
  - Kept slide playback, sentence practice, and click-to-pronounce word behavior unchanged.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed and now validates the slow-word groups, unique ids, and required sample items.
  - `node node_modules\vite\bin\vite.js build` passed after sandbox-external retry; Vite emitted the existing chunk-size warning only.
  - Vite preview HTTP smoke passed for `http://127.0.0.1:4176/travel-english-planner/` with `200 OK`; preview process PID `22936` was closed afterward.
- blockers / risks:
  - No visual browser click-through screenshot was completed in this phase.
  - Actual pronunciation quality still depends on the installed browser English voice and Web Speech API behavior.

## 2026-06-17 Speech v14 PDF and Pronunciation Script Refresh

- model / agent: GPT-5 Codex
- goal: Update the PresentCoach speech PDF and bilingual pronunciation script from the user-provided v14 PDF and DOCX.
- task track: Fast Track content/data/asset refresh; no commit, push, deploy, backend, secrets access, or external AI dispatch.
- user-specified sources:
  - `C:\Users\bai\Downloads\__發音講稿.docx`
  - `C:\Users\bai\Downloads\TBICS2026_TALPer_SRL4L_v14_20260617.pptx.pdf`
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\TBICS2026_TALPer_SRL4L_15min.pdf`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- intermediate artifacts:
  - `D:\vibeCode\outputs\travel-english-speech-v14\source-extract.json`
  - `D:\vibeCode\outputs\travel-english-speech-v14\docx-paragraphs.txt`
  - `D:\vibeCode\outputs\travel-english-speech-v14\extract_sources.py`
  - `D:\vibeCode\outputs\travel-english-speech-v14\generate_talper_data.py`
  - `D:\vibeCode\outputs\travel-english-speech-v14\preview_smoke.ps1`
- key decisions:
  - Rebuilt `talper-presentation.js` from the first 16 official slide sections in the DOCX.
  - Replaced the stable PDF asset path with the user-provided v14 PDF; the updated PDF has 16 pages.
  - Preserved visible pronunciation pause cues (`/`, `//`, `///`) in the displayed English script and removed Markdown bold markers from website data.
  - Kept `narrationScript` as clean TTS text without Markdown bold markers or pause slash cues.
  - Excluded DOCX rehearsal notes, red warning blockquotes, pronunciation tables, and Q&A appendix content from the website speech script.
  - Used Brain Markdown / direct file fallback because `gbrain` was unavailable in the sandbox session.
- verification:
  - DOCX extraction found 16 slide sections; PDF page-count check found 16 pages.
  - `node scripts\validate-talper-presentation.mjs` passed: validated 16 TALPer slides and checked the new Slide 14 and Slide 15 discussion sections.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/TBICS2026_TALPer_SRL4L_15min-BegcFMvD.pdf`.
  - Vite preview HTTP smoke passed:
    - `http://127.0.0.1:4175/travel-english-planner/` returned `200 OK`.
    - `http://127.0.0.1:4175/travel-english-planner/assets/TBICS2026_TALPer_SRL4L_15min-BegcFMvD.pdf` returned `200 OK`, `Content-Type: application/pdf`, `Content-Length: 1280924`.
  - Build emitted the existing Vite chunk-size warning only.
- blockers / risks:
  - No browser click-through smoke test was run in this phase.
  - Sentence pronunciation still depends on browser Web Speech API support and installed English voices.
- release:
  - User requested GitHub push after local verification.
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.
  - No Pages mode, workflow, deployment branch, or Vite base change was made.
  - Live GitHub Pages source mode was not independently verified through repository settings in this phase.

## 2026-06-17 Speech Slide 8 and Sentence Pronunciation Update

- model / agent: GPT-5 Codex
- goal: Refresh Slide 8 speaker notes from the updated `__發音講稿.docx` and add sentence-level pronunciation practice.
- task track: Precise Track content + frontend TTS behavior update + Release Track push to `origin/main`; no backend, secrets access, deployment-mode change, or external AI dispatch.
- user-specified source:
  - `C:\Users\bai\Downloads\__發音講稿.docx`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- intermediate artifacts:
  - `D:\vibeCode\outputs\travel-english-speech-v13\source-extract.json`
  - `D:\vibeCode\outputs\travel-english-speech-v13\update_slide8_only.py`
- key decisions:
  - Updated only Slide 8 from the refreshed DOCX so the Slide 1 `zong-en bai` hotfix is preserved.
  - Added sentence-level TTS controls under each English paragraph using compact speaker buttons with numbered labels.
  - Kept existing whole-deck, whole-slide, and single-word pronunciation behaviors unchanged.
  - Reused the existing Web Speech API wrapper; no external TTS service or API key was added.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 15 TALPer slides and checked the refreshed Slide 8 text.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/index-DBv5F2Ym.js` / `assets/index-B4opLB7s.css`.
  - Vite preview HTTP smoke passed:
    - `http://127.0.0.1:4174/travel-english-planner/` returned `200 OK`.
    - `http://127.0.0.1:4174/travel-english-planner/assets/TBICS2026_TALPer_SRL4L_15min-DPgBIttj.pdf` returned `200 OK`.
  - Build emitted the existing Vite chunk-size warning only.
- blockers / risks:
  - In-app Browser control tool was not available through tool discovery in this session, so no visual click-through smoke test was completed.
  - Sentence pronunciation depends on browser Web Speech API support and installed English voices.
- release:
  - User requested GitHub push after local verification.
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.
  - Live GitHub Pages source mode was not independently verified through repository settings in this phase.
- next step:
  - After push, verify GitHub Actions / Pages status if GitHub auth and network access are available.

## 2026-06-16 Speech v13 Presenter Name Hotfix

- model / agent: GPT-5 Codex
- goal: Correct the Slide 1 presenter name in the v13 speech script from `Bor-Chen Kuo` to `zong-en bai`.
- task track: Fast Track content hotfix + Release Track push to `origin/main`; no backend, secrets access, deployment-mode change, or external AI dispatch.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Updated the visible English script, the TTS-only `narrationScript`, and `talperPresentationMeta.speaker` together so the speech page stays internally consistent.
  - Left the existing Traditional Chinese translation untouched because the user requested only the English line.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 15 TALPer slides.
  - `node node_modules\vite\bin\vite.js build` passed with the existing chunk-size warning only.
- release:
  - User requested push after the local correction.
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.

## 2026-06-16 Speech v13 PDF and Pronunciation Script Refresh

- model / agent: GPT-5 Codex
- goal: Update the PresentCoach speech PDF and bilingual pronunciation script from the user-provided v13 PDF and DOCX.
- task track: Precise Track content/data/frontend compatibility update; no commit, push, deploy, backend, secrets access, or external AI dispatch.
- user-specified sources:
  - `C:\Users\bai\Downloads\__發音講稿.docx`
  - `C:\Users\bai\Downloads\TBICS2026_TALPer_SRL4L_v13_20260616.pptx.pdf`
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\brain\errorLog\2026-06-11-travel-english-speech-refresh-process-errors.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\release-topology.md`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\TBICS2026_TALPer_SRL4L_15min.pdf`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- intermediate artifacts:
  - `D:\vibeCode\planned\26-06-16-update-travel-english-planner-speech-slides-script-codex.md`
  - `D:\vibeCode\outputs\travel-english-speech-v13\source-extract.json`
  - `D:\vibeCode\outputs\travel-english-speech-v13\mapping-review.json`
  - `D:\vibeCode\outputs\travel-english-speech-v13\*.py`
  - `D:\vibeCode\outputs\travel-english-speech-v13\*.mjs`
- key decisions:
  - Rebuilt `talper-presentation.js` from the first 15 official `## Slide N` sections in the DOCX.
  - Replaced the stable PDF asset path with the user-provided v13 PDF; the updated PDF has 15 pages.
  - Preserved visible pronunciation pause cues (`/`, `//`, `///`) in the displayed English script.
  - Added `narrationScript` and updated `PresentCoach` so browser TTS reads clean text without Markdown bold markers or pause slash cues.
  - Removed the old v10 PPTX existence gate from presentation validation because the user provided v13 PDF, not a v13 PPTX, and the UI opens the PDF asset.
  - Skipped DOCX blockquote reminders and practice-advice headings when building slide scripts.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 15 TALPer slides.
  - `npm run build` was blocked by PowerShell execution policy for `npm.ps1`; reran with bundled Node.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/TBICS2026_TALPer_SRL4L_15min-DPgBIttj.pdf`.
  - Data smoke check passed: deck title `TBICS2026_TALPer_SRL4L_v13_20260616`, 15 slides, first slide `Title`, last slide `Thank You`, PDF asset size `1185865` bytes.
  - PDF asset page-count check passed: 15 pages.
  - Vite preview HTTP smoke passed:
    - `http://127.0.0.1:4173/travel-english-planner/` returned `200 OK`.
    - `http://127.0.0.1:4173/travel-english-planner/assets/TBICS2026_TALPer_SRL4L_15min-DPgBIttj.pdf` returned `200 OK`, `Content-Type: application/pdf`, `Content-Length: 1185865`.
  - Build emitted the existing Vite chunk-size warning only.
- blockers / risks:
  - In-app Browser control tool was not available through tool discovery in this session, so no visual browser click-through smoke test was completed.
  - No v13 PPTX source was provided; the repository still contains the older v10 PPTX asset, but the speech page uses the updated v13 PDF.
- release:
  - User requested GitHub update after local verification.
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.
  - Pages workflow file confirmed locally at `.github/workflows/deploy.yml`.
- release risks:
  - Live GitHub Pages source mode was not independently verified through repository settings in this phase.
  - Push may trigger the existing GitHub Actions Pages workflow; post-push workflow status was not yet checked at the time of this local log entry.
- next step:
  - After push, verify GitHub Actions / Pages status if GitHub auth and network access are available.

## 2026-06-10 Speech Template PDF and Claude Script Refresh

- model / agent: GPT-5 Codex
- goal: Update the speech page slide PDF and bilingual speaker notes from the user-provided template PDF and Claude script text.
- task track: Fast Track content/asset refresh; no release, push, deploy, backend, routing, or secrets access.
- user-specified sources:
  - `C:\Users\bai\Downloads\TBICS_template_21.05.2026.pdf`
  - `C:\Users\bai\Downloads\claude 講稿.txt`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\TBICS2026_TALPer_SRL4L_15min.pdf`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Preserved the existing speech PDF import path so `PresentCoach` continues to load the deck without UI changes.
  - Parsed 14 `## Slide N` sections from the new script and paired each English rehearsal line with its Traditional Chinese prompt.
  - Set the speech source link to the new PDF asset because no replacement PPTX was provided.
  - Updated presentation validation from 13 to 14 slides.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 14 TALPer slides.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/TBICS2026_TALPer_SRL4L_15min-BaWwRp17.pdf`.
  - Data smoke check confirmed the new deck title, 14-slide count, and readable Traditional Chinese text on slides 1 and 14.
  - Build emitted the existing Vite chunk-size warning only.
- release:
  - User requested GitHub push after local verification.
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.
- blockers / risks:
  - Pages source mode was not independently verified through repository settings in this phase; local release topology still records this as an ambiguity before changing deployment mode.

## 2026-06-10 Speech Script User Revision Import

- model / agent: GPT-5 Codex
- goal: Replace only the speech page bilingual script under the speed controls with the user-edited Markdown file while preserving existing speech playback and word-pronunciation features.
- task track: Fast Track content replacement + Release Track push to `origin/main`; no UI behavior, PDF/PPTX asset, backend, or secrets change.
- user-specified source:
  - `C:\Users\bai\Downloads\TBICS2026 TALPer 15min 中英對照講稿.md`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Parsed 13 `## Slide N` sections from the Markdown and replaced only `script` / `scriptZh`.
  - Removed Markdown bold markers from the website data because the speech panel renders plain text, not Markdown.
  - Preserved existing slide metadata, v10 PDF/PPTX links, speed control, whole-slide playback, all-slides playback, and clickable English word pronunciation.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 13 TALPer slides.
  - Data smoke check confirmed the new opening sentence and Traditional Chinese text are present, with no `????`, literal `\\n`, or `**` markers.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/index-DWUpvswA.js`.
  - Build emitted the existing Vite chunk-size warning only.

## 2026-06-10 Speech Script Encoding Hotfix

- model / agent: GPT-5 Codex
- goal: Fix live speech script display after the v10 release rendered literal `\n\n` and Chinese text as question marks.
- task track: Fast Track bugfix on released content + Release Track push to `origin/main`; no backend change, secrets access, or feature scope change.
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- root cause:
  - The previous data generation wrote escaped newline sequences as literal `\\n\\n` inside the displayed text.
  - Chinese translations had already been damaged into `????` before commit due to an encoding/write step.
- fix:
  - Rewrote the speech data using UTF-8 template literals so real line breaks and Traditional Chinese text are preserved.
  - Kept the existing v10 PDF/PPTX assets and word-pronunciation behavior unchanged.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 13 TALPer slides.
  - `Select-String` check found no literal `\\n` or `????` in `talper-presentation.js`.
  - `node node_modules\vite\bin\vite.js build` passed and emitted `assets/index-BQSB8lgS.js`.
  - Build emitted the existing Vite chunk-size warning only.

## 2026-06-10 Speech v10 PDF and Notes Correction

- model / agent: GPT-5 Codex
- goal: Replace the speech page slide PDF and speaker notes with the user-specified v10 files after the live page still showed the older PDF.
- task track: Precise Track content/asset correction + Release Track push to `origin/main`; no external AI dispatch, backend change, or secrets access.
- user-specified sources:
  - `C:\Users\bai\Downloads\TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend.pptx`
  - `C:\Users\bai\Downloads\TBICS2026_TALPer_SRL4L_15min_speaker_notes_v10.md`
- files modified / generated:
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\TBICS2026_TALPer_SRL4L_15min.pdf`
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend.pptx`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Exported the specified v10 PPTX to the exact PDF path consumed by `PresentCoach`.
  - Rebuilt `talper-presentation.js` from the specified v10 speaker notes.
  - The v10 notes contain English script and Chinese prompt notes, not full paragraph-by-paragraph translations; to satisfy the requested display format, the site data now uses the v10 English text and a matching Traditional Chinese translation paragraph after each English paragraph.
  - Updated validation from 12 slides to 13 slides to match the specified v10 notes.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 13 TALPer slides.
  - `node node_modules\vite\bin\vite.js build` passed and emitted updated v10 PPTX/PDF assets in `dist`.
  - Build emitted the existing Vite chunk-size warning only.

## 2026-06-10 Speech Word Pronunciation Release

- model / agent: GPT-5 Codex
- goal: Publish the speech page update to GitHub with clickable English word pronunciation in the bilingual speaker notes.
- task track: Precise Track frontend behavior change + Release Track push to `origin/main`; no external AI dispatch, backend change, or secrets access.
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\release-topology.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\scripts\validate-talper-presentation.mjs`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\PresentCoach.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\index.css`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Fetched and rebased onto `origin/main` after remote advanced with `Add bilingual speech notes`, `Replace speech deck with TBICS 15min version`, and `Simplify terms practice filters`.
  - Skipped the overlapping local 15-minute deck commit to preserve the remote bilingual speaker-note content.
  - Added click-to-pronounce only to English script tokens inside the bilingual speaker notes; Chinese translation remains static.
  - Used the existing browser Web Speech API wrapper; no external TTS API or key was added.
  - Preserved the existing PDF slide viewer from the remote version.
- verification:
  - `node scripts\validate-talper-presentation.mjs` passed: validated 12 TALPer slides.
  - `node node_modules\vite\bin\vite.js build` passed.
  - Build emitted the existing Vite chunk-size warning only.
- release:
  - Target branch: `main`.
  - Remote: `https://github.com/smallwhite219/travel-english-planner.git`.
  - Expected deployment path: existing GitHub Actions Pages workflow on push to `main`.
- blockers / risks:
  - Pages source mode still not independently verified through repository settings.
  - Web Speech API pronunciation depends on browser and installed English voices.

## 2026-06-06 TBICS 15-minute Speaker Practice Content

- model / agent: GPT-5 Codex
- goal: Add the revised TBICS 15-minute speaker-note vocabulary, sentence patterns, and script sentences to the existing conference listening / vocabulary drill flow, with a core-to-complete practice hierarchy.
- task track: Precise Track content/data update; no release, push, deploy, external AI dispatch, SRS logic change, or roleplay behavior change.
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
  - `D:\vibeCode\projects\travel-english-planner\src\data\conference-listening.js`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\TermsDrill.jsx`
  - `D:\vibeCode\outputs\manual-20260605-tbics-15min\presentations\tbics-15min\output\TBICS2026_TALPer_SRL4L_15min_speaker_notes_v2.md`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\data\conference-listening.js`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Added dedicated `TBICS 15-min` sections instead of overwriting the previous 20-minute conference practice material.
  - Organized practice into `Core` sections for fast pre-presentation memorization and `Complete` sections for long-form listening coverage.
  - Included vocabulary, reusable sentence patterns, and full script sentences, with special coverage for coding framework and ENA explanation.
  - Kept the existing deterministic/local learning flow; no public AI/API path was added.
- verification:
  - `npm run build` passed.
  - Data validation confirmed the six new TBICS 15-minute sections exist and contain 176 total practice items.
- blockers / risks:
  - No live GitHub Pages deployment was performed in this phase.
- next step:
  - Use Vocabulary Drill filter sections beginning with `TBICS 15-min Core` for focused practice, then switch to `TBICS 15-min Complete` sections for full listening coverage.

## 2026-06-03 Rule-Based Roleplay Feedback

- model / agent: GPT-5 Codex
- goal: Add the first version of the discussed high-effectiveness English learning loop without public AI/API risk.
- task track: Precise Track frontend behavior change; no release, push, deploy, or AI platform dispatch.
- files read:
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\release-topology.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\TravelRoleplay.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SRSStudySession.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SRSDashboard.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\utils\srsService.js`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\src\pages\TravelRoleplay.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SRSStudySession.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\pages\SRSDashboard.jsx`
  - `D:\vibeCode\projects\travel-english-planner\src\utils\srsService.js`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Keep all feedback deterministic and local; no `llmService`, external AI, API key, or remote scoring path was added.
  - Add response practice inside the existing `TravelRoleplay` page instead of creating a parallel learning surface.
  - Store scenario response reinforcement cards in browser localStorage and make SRS sessions review them alongside existing morphology cards.
- verification:
  - `git -C D:\vibeCode\projects\travel-english-planner diff --check` passed with only existing line-ending warnings.
  - `npm run build` passed.
- blockers / risks:
  - In-app Browser verification was attempted twice, but the Browser/Node runtime failed during Windows sandbox startup. No interactive browser smoke test was completed in this phase.
- next step:
  - If the rule-based feedback feels too rigid, extend the local rule set and scenario answer bank before considering any optional AI mode.

## 2026-06-01 Governance Gate Hardening

- model / agent: GPT-5 Codex
- goal: Apply the same task gate, release topology, and handoff discipline learned from the `typing-rpg-srs` review to `travel-english-planner`.
- task track: Fast Track rule/document patch; no runtime code change.
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\brain\knowledge-base\integrated-orchestration-handoff-framework.md`
  - `D:\vibeCode\brain\skills\engineering\spec-driven\SKILL.md`
  - `D:\vibeCode\brain\skills\engineering\planning\SKILL.md`
  - `D:\vibeCode\projects\travel-english-planner\package.json`
  - `D:\vibeCode\projects\travel-english-planner\vite.config.js`
  - `D:\vibeCode\projects\travel-english-planner\.github\workflows\deploy.yml`
- files modified:
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\release-topology.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Treat this project as a standalone git repository.
  - Treat `smallwhite219/travel-english-planner` as the authoritative remote.
  - Require Release Track before any push, deploy, workflow, branch, remote, or Pages action.
  - Flag the coexistence of GitHub Actions Pages deploy and `gh-pages -d dist` script as a release ambiguity that must be verified before deployment.
  - Require explicit routing approval before AI platform dispatch.
- verification:
  - `Test-Path` confirmed `AGENTS.md`, `docs\release-topology.md`, `docs\task-state.md`, and `docs\phase-log.md` exist.
  - `git -C D:\vibeCode\projects\travel-english-planner diff --check -- AGENTS.md docs/...` completed with no whitespace errors.
  - `Get-Content` read back `docs\release-topology.md` after writing.
- blockers:
  - GitHub Pages source mode was not live-verified in repository settings; verify before changing deployment.
- next step:
  - On the next feature or deployment task, start from `docs\task-state.md` and `docs\release-topology.md`.

## 2026-06-01 VoxCPM Presentation Audio Generation

- model / agent: GPT-5 Codex
- goal: Generate fixed VoxCPM English narration audio for the 21 TALPer `PresentCoach` slide scripts only.
- task track: Precise Track asset generation; no frontend playback behavior was changed in this phase.
- files read:
  - `D:\vibeCode\AGENTS.md`
  - `D:\vibeCode\brain\SKILL.md`
  - `D:\vibeCode\brain\knowledge-base\integrated-orchestration-handoff-framework.md`
  - `D:\vibeCode\brain\skills\engineering\spec-driven\SKILL.md`
  - `D:\vibeCode\brain\skills\engineering\tdd\SKILL.md`
  - `D:\vibeCode\projects\travel-english-planner\AGENTS.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\release-topology.md`
  - `D:\vibeCode\projects\travel-english-planner\docs\task-state.md`
  - `D:\vibeCode\projects\travel-english-planner\src\data\talper-presentation.js`
- files modified / generated:
  - `D:\vibeCode\projects\travel-english-planner\scripts\generate-talper-voxcpm-audio.py`
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\audio\voxcpm-en\manifest.json`
  - `D:\vibeCode\projects\travel-english-planner\src\assets\talper-presentation\audio\voxcpm-en\slide-01.wav` through `slide-21.wav`
  - `D:\vibeCode\projects\travel-english-planner\docs\phase-log.md`
- key decisions:
  - Used `openbmb/VoxCPM-0.5B` instead of VoxCPM2 because local GPU was not available and full VoxCPM2 is too heavy for this machine.
  - Generated static WAV assets only; did not integrate the audio into `PresentCoach` playback UI in this phase.
  - Stored reusable model/cache assets under `D:\vibeCode\.cache\voxcpm-py312`, `D:\vibeCode\.cache\huggingface`, and `D:\vibeCode\.cache\modelscope` for future reruns.
  - Disabled VoxCPM denoiser for the full batch to avoid additional ModelScope runtime dependency and cache writes.
- execution result:
  - Generated 21 WAV files.
  - Manifest contains 21 slide entries.
  - Total generated narration duration: 1236.7 seconds.
  - Generated audio asset size: about 39.6 MB.
- verification:
  - `python -m py_compile scripts/generate-talper-voxcpm-audio.py` passed.
  - Audio verification reported `wav_count: 21`, `manifest_count: 21`, and no missing slide files.
  - `npm run test:presentation` passed and validated 21 TALPer slides.
- blockers / risks:
  - No local NVIDIA GPU was detected via `nvidia-smi`, so all generation ran on CPU and was slow.
  - During the initial smoke test, ModelScope's default cache wrote the denoiser model under `C:\Users\bai\.cache\modelscope`; full batch generation subsequently used D-drive cache settings and `load_denoiser=False`. Cleanup of the C-drive cache was not performed because it is outside the project workspace and should be an explicit user-approved cleanup action if desired.
- next step:
  - If playback integration is requested, wire `manifest.json` and the WAV files into `PresentCoach` as an optional static-audio source while preserving existing browser TTS fallback.
