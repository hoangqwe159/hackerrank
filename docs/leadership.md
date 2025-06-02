# Table of Contents
1. [Learn New Tech](#learn-new-tech)
2. [Mentor](#mentor)
3. [Prioritize](#prioritize)
4. [Lead](#lead)
5. [Keep Team Motivated](#keep-team-motivated)
6. [How to Handle Underperformance](#how-to-handle-underperformance)
7. [Training](#training)
8. [Deal with Vague Requirements](#deal-with-vague)
9. [Collaboration](#collaboration)
10. [Complex Project](#complex-project)
11. [Receive Feedback](#receive-feedback)
12. [Missed Deadline](#missed-deadline)
13. [Failure](#failure)
14. [Complex Task](#complex-task)
15. [Disagree and Commit](#disagree-and-commit)
16. [Conflict](#conflict)
17. [Give Feedback](#give-feedback)
18. [Customer](#customer)
19. [Bug Handling](#bug)
20. [Success](#success)
21. [Process Improvement](#process-improvement)
22. [Tough Decision](#tough-decision)
23. [Migration](#migration)

## Learn new tech
- Our app was struggling with redundant API calls and messy loading states across pages.
- I proposed we explore TanStack Query to improve data fetching and caching.
- Although I hadn’t used it before, I took ownership of the learning process.
    Started with purpose – I read use cases and real-world success stories to see why teams adopted it and what pain points it solved.
- Dove into official docs and examples – Instead of skimming, I rebuilt our use case in a small sandbox project with mock APIs.
- Practiced intentionally – Simulated edge cases like cache invalidation, stale data, and refetch intervals to test its strengths.
- Presented a proof of concept – Demoed how TanStack Query could cut API calls by ~40% and simplify component logic.
- Led a pair-programming session – Walked a teammate through setting up query hooks and caching policies.
- Wrote a reusable abstraction – Created a usePaginatedQuery() hook to make implementation consistent across the app.
- Documented best practices – Summarized learnings in Confluence and added tips to our internal wiki for the whole team.
- Adoption of TanStack Query led to a noticeable boost in performance and dev productivity.
- It also reduced bugs around loading and error states by centralizing state logic.
- More importantly, I helped upskill the team and ensured we could move faster with confidence.

---

## Mentor
- first joined, earn trust before offering guidance
- how how dev tools work, stay late to finish critical tickets, took ownership of features from end to end
- sharing my learning style: my side projects, micro learning from social media
- Harry actively reads tech blog and share stuff to me
- find chance to make learning more interesting:
    - new release of platform we uses everyday
    - they expose source map, we can see through whole source code
    - gather teammate, engage people to discuss
- pair programming: never over assit, debounce vs throttle and ask question
- code review:  strike a balance between feedback and encouragement. I always explain the reasoning behind my suggestions and invite them to challenge or question me
- inspiring others to become their best: encourage lead daily standup, take ownership of small feature, demo his work in Teams
- trust deepens, privately with questions about career growth: courses, CV, question format, fullstack, backend, frontend, behaviour questions
- he got offer with 20% in a big company, he decided to stay back because of my mentoring

---

## Priotize
- In my previous job as Front End Engineer in a startup, I was once in a situation where I had to deliver several important features at very short notice, since different teams were making feature requests at the time.
- As I recognized that it was not possible for me to achieve all of them with good quality and also in a timely manner. I had to find a way to deconflict their priorities.
- What I did was to arrange a quick meeting with all relevant product and engineering stakeholders to co-prioritize and assign the appropriate resources to support this project.
- I listed the features requested from every team and worked with all the relevant stakeholders to identify each feature's contribution to business objectives, while also roughly estimating the engineering effort for each one.
- This helped us to deprioritize features that had very high engineering effort but little contribution to the objectives.
- For projects that were not realistically possible to achieve within the timelines, we were able to negotiate for more engineering resources to delegate these feature work to.
- After that, to ensure my own timelines were met, I broke down my features into smaller tasks and planned them into daily and weekly milestones, reviewing my progress regularly with the team.
- With this planning effort, I was able to achieve all the required features by the expected timeline.

## Lead
## Keep team motivated
- I was assigned the task to rewrite all UI components from NativeBase (React Native) to MUI (Capacitor).
- This was a big change, with new concepts like theme token, Tailwind, and styled-components.
- Some components were advanced and hard to rewrite, like FlatList, which uses virtualization under the hood in React Native.
- Requirement Understanding
- Planning & Task Breakdown
	•	I decomposed the migration into modules
	•	Each task was documented with expected input/output, test cases, and fallback plans.
- Assigning Tasks
    •	I distributed tasks based on team members’ strengths — assigning complex architecture decisions to senior devs and UI porting to mid-level engineers.
    •	For junior devs, I paired them on UI rewrites using the new component library to build familiarity.
    •	I also acted as the go-to person for blockers and integration issues.
- In my company, code review is not compulsory — people only open PRs when they don’t feel confident.
- But during this task, I asked everyone who made UI changes to open a PR, even for small things like styling a button, so I could make sure best practices were followed from the start.
- The task was very long — all pages and components had to be rewritten. Set clear goals and ensure that everyone understands them. Suggest to collaborate with UIX.
- I encouraged everyone to study Tailwind and MUI best practices.
- I opened a team learning session, where team members presented the best practices they found to the rest of the team.
- This helped us build shared knowledge and gave everyone a chance to speak up and contribute.
- To keep the team motivated:
    - We celebrated small wins — finishing a tricky component, using theme tokens correctly, or improving styling patterns.
    - When someone made a good PR, I shared it in our Teams channel as a learning example for others.
    - This created a positive and learning-focused environment.
- Set up regular progress check-ins and address blockers. Update process with my manager
- We successfully migrated all pages and components to MUI and Tailwind with consistent structure and modern design.
- The whole team learned new tools and concepts, and felt more confident and involved.
- Our codebase became cleaner and easier to maintain.
- I asked the CEO to organize a lunch to celebrate the team’s effort and success.
- The project got great feedback, and it showed that collaboration, shared learning, and small wins can drive a large and successful change.

---

## How to handle underperformance
- I was working on a project where one of my teammates was regularly missing deadlines for bug fixes.
- At first, I gave it some time, thinking it was just a one-off issue.
- But over a few sprints, the delays started to affect the team’s progress and morale, especially during release weeks.

- I needed to give feedback to my teammate in a respectful and helpful way.
- My goal was to understand what was going wrong and find a solution together so the team could stay on track.

- I scheduled a private 1-on-1 chat instead of bringing it up in a group setting.
- I started by sharing what I valued about his work — especially his mentorship and technical skills.
- Then, I explained the issue with specific examples — a few tickets that were delayed and how they affected the sprint and team morale.
- I asked if anything was blocking him — he shared that he had taken on too many side tasks and wasn’t managing time well.
- Together, we agreed on a few steps:
    - Set clearer priorities during sprint planning
    - Add a reminder bot for tickets due soon
    - Do mid-week check-ins to catch delays early

- After the conversation, his delivery improved and tickets were completed on time more consistently.
- The team was able to finish sprints more smoothly, with fewer last-minute issues.
- Overall, the team communication got better, and he appreciated the support instead of feeling blamed.

---

## Training
- I was working on a CMS app and was responsible not only for delivering the platform but also for elevating the skills of a new mid-level teammate who had never worked on cross-platform projects before.
- I set up a kickoff meeting to introduce our technical roadmap and initiated a series of internal tech talks covering topics like:
    - What is PWA and how it works
    - How to build an offline-first app
    - Using SQL on top of IndexedDB, and how it’s actually faster than raw IndexedDB
    - Accessibility best practices
    - How to use a design system effectively
- find chance to make learning more interesting:
    - new release of platform we uses everyday
    - they expose source map, we can see through whole source code
    - gather teammate, engage people to discuss
- I initiated regular pair programming sessions to help him with tasks and cover:
    - React best practices
    - When to use Redux vs Zustand in our context
    - Why React Context works well for dependency injection
    - Concepts like debounce vs throttle — but I never over-assisted; instead, I asked guiding questions to spark thinking
- I used code reviews as teaching opportunities, not as gatekeeping. I always explained the reasoning behind my suggestions and invited open discussion — I wanted to strike a balance between feedback and encouragement.
- I aimed to inspire growth and ownership:
    - Encouraged him to lead daily standups
    - Let him take ownership of small features
    - Supported him in demoing his work to the team on Microsoft Teams
- Over time, trust deepened. He started asking me privately about career growth — we talked about:
    - Courses to take
    - How to shape his CV
    - The format of tech interviews
    - How to approach frontend, backend, fullstack roles
    - Behavioral questions
- In the end, he got laid off purely due to business performance reasons. Since I was his direct mentor, I had to be the one — alongside our CEO — to deliver the news.
- He was extremely angry and walked out of the office right after the meeting.
- But later that night, he called me. He apologized, and I told him it was all good — he’s an extremely talented developer, and I believed he’d find something soon.
- I supported him with mock interviews and helped tailor his CV to match the next opportunity.
- Now, he’s a software engineer at Westpac — the biggest company in the Gold Coast.

---

## Deal with vague
## Collaboration
## Complex project
- I was assigned the task of building a feature to support PDF collaboration.
- Lacking prior experience in this area, I requested my boss to give me an afternoon to research and come back with more clarity and possible directions.
- Through research, I discovered two main collaboration models:
    - Slow collaboration:
        - Multiple users can edit the same document.
        - The last saved version overwrites previous ones.
        - Works well when there are few users and no concurrent edits on the same document.
        - Transmitting the entire document is acceptable in this mode.
    - Live collaboration:
        - Multiple users edit the document simultaneously, with changes reflected in real time.
        - Requires a system to transmit only the changes (deltas).
- I presented these models to the CEO, but he wasn’t sure which one would suit the client best.
- I decided to schedule a 1-hour call with the client in the US, even though it was late at night for me.
- The client clearly stated their requirements:
    - No data loss under any circumstances.
    - Offline support.
    - Manual conflict resolution when needed.
- I raised concerns that with the slow collaboration method, simultaneous edits could lead to lost changes.
- The client was happy to proceed with live collaboration instead
- I proposed various concurrency control models:
    - Floor control model: Only one user can edit the document at a time.
    - Locks model: A more refined version of floor control, where objects are locked during editing.
        - However, this introduces network latency and delays, which could be frustrating.
    - Transaction-based model (like Git): Tracks changes and merges them later.
    - Version-detection model:
        - Document state is replicated across all users.
        - Edits are made locally and synchronized to others.
        - Used by tools like Google Docs and Canva.
- The client was comfortable with either transaction-based or version-detection models, and left the final decision to us.
- The next day, I discussed with the Product Owner (PO) and summarized the meeting.
- We agreed that the version-detection model is more user-friendly, and decided to use Yjs (a CRDT library) to implement it.
- We encountered a challenge: deciding on the network architecture.
- Two models were considered:
    - Client-server model:
        - All changes are sent to a central server.
        - Server merges and saves changes to the database, then broadcasts to other clients.
        - Requires the backend team to implement complex logic to support Yjs merge and history.
    - Peer-to-peer (P2P) model using WebRTC:
        - Each participant acts as both client and server.
        - Peers communicate directly, without a central server.
        - Much easier to implement, only requires WebSocket signaling.
- While the client-server model is more robust long-term, the CEO preferred a fast delivery for the upcoming US conference demo.
- I decided to split development into phases:
    - Phase 1: Use WebRTC for a quick win and deliver a working demo fast.
    - Phase 2: Plan future work for the backend team to transition to a client-server model for better robustness.
- Using Yjs and WebRTC, we successfully demoed the feature within 3 weeks of development.
- The feature played a vital role in convincing the user to sign our biggest contract with the company.
- I received great feedback from the client on the collaboration functionality and the overall execution.

---

## How to handle underperformance
- I was working on a project where one of my teammates was regularly missing deadlines for bug fixes.
- At first, I gave it some time, thinking it was just a one-off issue.
- But over a few sprints, the delays started to affect the team’s progress and morale, especially during release weeks.
- I needed to give feedback to my teammate in a respectful and helpful way.
- My goal was to understand what was going wrong and find a solution together so the team could stay on track.
- I scheduled a private 1-on-1 chat instead of bringing it up in a group setting.
- I started by sharing what I valued about his work — especially his mentorship and technical skills.
- Then, I explained the issue with specific examples — a few tickets that were delayed and how they affected the sprint and team morale.
- I asked if anything was blocking him — he shared that he had taken on too many side tasks and wasn’t managing time well.
- Together, we agreed on a few steps:
    - Set clearer priorities during sprint planning
    - Add a reminder bot for tickets due soon
    - Do mid-week check-ins to catch delays early
- After the conversation, his delivery improved and tickets were completed on time more consistently.
- The team was able to finish sprints more smoothly, with fewer last-minute issues.
- Overall, the team communication got better, and he appreciated the support instead of feeling blamed.

---

## Receive feedback
## Missed deadline
- Early in my role as a developer, I was working on a new feature for a client-facing app.
- Table of contents
-  At first, I thought the challenge was mostly visual—drawing linked text boxes and syncing their content—but I underestimated the technical depth, especially when it came to text layout performance and live update behavior.
- As I got deeper, I ran into unexpected blockers:
	• Move between page is slow
    - respect the styling
- My task was to complete the feature in one sprint, hand it off to QA, and be ready for demo day.
- But I ended up missing the deadline by 2–3 days, which delayed QA testing and pushed the release back.
- After the delay, my PM pulled me aside for a constructive 1-on-1.
- He was clear but kind — he pointed out that I should’ve:
    - Raised the risks earlier
    - Asked for help instead of trying to solve everything alone
    - Broken the work into smaller, clearer tasks
- I listened carefully and took full responsibility without making excuses.
- I then asked for suggestions on how to improve for next time.
- From that point on, I started:
    - Giving early warnings if I was falling behind
    - Doing better time estimates by breaking tasks into smaller chunks
    - Asking for feedback and support earlier, especially when facing blockers
- In the next sprint, I was able to deliver ahead of schedule, and the team lead praised my improvement in planning and communication.

---

## Failure
## Complex task
- Early days at Desygner, one of our biggest clients wanted to migrate their documents from InDesign to our SVG editor.
- They wanted the exact same editing experience as InDesign, including a tricky feature: Text Overflow.
- Text Overflow = link text boxes across pages, and let text flow and update live when editing.
- We had 3 main things to figure out:
1.	Page Preview – Let users drag and connect text boxes across pages.
2.	Performance – Handle large text quickly.
3.	Overflow Logic – Update text across pages smoothly as you type.

- Team Setup
- Our system used Backbone.js, but a new dev joined who was good at React, not Backbone.
- I asked him to build the Page Preview in React in a separate repo, with unit tests and Storybook.
- It worked well, but the component was large — fixed that with lazy loading.

- The Performance Problem
- Text rendering was super slow — ~800ms to render one A4 text element.
- It was because we were re-rendering everything on any change.
- I realized this won’t work for multi-page editing. So I:
- Rebuilt the text rendering system
- Reduced heavy DOM reads like getBBox() to avoid layout thrashing.
- Added a “virtual DOM” for text — a service compares old vs new and only updates what’s needed.

- More Issues: Thumbnail and Fonts
- Thumbnail generation was slow because we had to load custom fonts every time.
- Fixed this using Service Worker to cache fonts.
- Also used WebAssembly + Web Worker to convert SVG to PNG faster.

- Overflow Logic
- Typing should not render next page’s text unless needed.
- I optimized it to only render visible text.
- Partial styling (e.g., bold text splitting across pages) was the hardest part.
- Wrote a lot of unit tests to catch bugs and edge cases.
- After 6 months, the feature was done.
- Still had small bugs: blurry thumbnails, some styling edge cases.
- But performance was much better, and system was stable.

- But We Lost the Client: “It doesn’t feel like InDesign. We realize SVG editor isn’t the right tool for us.”
- Don’t just copy features — confirm what the client really wants.
- Performance, clean code, cool tech don’t matter if the product doesn’t solve the real problem. Solving the wrong problem well is still solving the wrong problem.
- Validate the experience early, not just the features.

- Even though the project failed:
- I revamped the text engine for speed and flexibility.
- Built a React-based component system others now use.
- Introduced virtual DOM diffing, Service Workers, WASM optimizations.
- Improved performance across the whole editor.
- Set a new tech standard for future projects.

---

## Disagree and commit
- I worked on the SVG editor where users can select a text element and change the font family using a dropdown list.
- The problem: each font in the dropdown didn’t show a preview using its actual font style, which made the user experience poor—users couldn’t see what the font looked like until they selected it.
- My task was to improve the user experience by showing live font previews in the dropdown so users could see what each font looks like before selecting it.
- Fonts were uploaded by users, and they could be large and vary in size, so I needed to find a solution that was fast and efficient.
- The tech lead suggested:
    - When the font dropdown opens and user scrolls, we fetch the font file dynamically.
    - Then, inject the font into <head> using CSS, and apply it to the dropdown item.
- I disagreed with this approach and raised concerns:
    - Font files can be large, and loading them just for preview might be slow and heavy.
    - Many fonts might never be used in the design, so it’s wasted effort to preload all.
- I proposed a different solution:
    - Use WebP images to show a preview of the font (like a thumbnail).
    - Generate the font preview images on the backend when the user uploads the font.
    - Show the preview in the dropdown using the image instead of loading the font directly.
- My goal was to:
    - Make font preview load instantly, even for large fonts.
    - Avoid performance issues during scrolling.
    - Reduce overhead for unused fonts.
- I built a prototype and benchmarked it, showing it was 10× faster when loading a 2MB font.
- But my idea was rejected by Product and Engineering Managers:
    - They said it would take too long to implement.
    - Needed more work from the backend team.
    - We’d have to write a script for backward compatibility for already uploaded fonts.
- I respected the decision and committed to delivering the original font dropdown feature.
- But I also took extra steps:
    - Added support for custom rendering of dropdown items (to support thumbnails later).
    - Added a feature flag to toggle thumbnail preview on/off.
    - Wrote a script to generate thumbnails for existing fonts, ready for future use.
- Three months later, users reported:
    - Font dropdown was slow when scrolling.
    - Delay when applying a font to the canvas, especially large ones.
- Because I had laid the groundwork, we were able to:
    - Quickly switch to using font thumbnails for previews.
    - Backend could start immediately using the requirements I had already prepared.
    - The updated feature rolled out with minimal extra effort, improving performance and user satisfaction.

---

## Conflict
- Joined company as a new senior engineer
- First major assignment was developing HTML editor component for CMS platform
- Manager had pre-selected Froala Editor without prior consultation
- Project had tight one-month deadline for MVP delivery
- CEO needed component for customer demo
- Requirements included cross-platform support (Web, iOS, Android) and specific features like Excel/Word import
- Evaluate if Froala Editor was the best technical choice for long-term success
- Assess potential risks and limitations of the pre-selected solution
- Determine if alternative solutions might better serve project requirements
- Navigate challenging situation of questioning an existing decision respectfully
- Conducted comprehensive technical evaluation of Froala Editor
- Researched alternative solutions, focusing on ProseMirror
- Created proof of concept implementations in React sandbox
- Performed detailed analysis including bundle size, load time, and feature gap comparison
- Documented concerns about Froala: licensing costs, limited community support, security vulnerabilities
- Prepared technical report comparing options
- Organized meeting with manager and tech lead to present findings
- Demonstrated how ProseMirror could match Froala's features through plugins
- Presented evidence-based argument focusing on stability and long-term benefits
- Team agreed to pivot to ProseMirror based on technical analysis
- Successfully implemented editor component as planned
- Component became one of platform's most powerful and extensible features
- Built trust with team through evidence-based decision making

---

## Give feedback
## Customer
- Found a security issue with absurd-sql (runs SQLite on top of IndexedDB, stores unencrypted binary).
- I brought this up with our tech lead and explained that while absurd-sql works well for performance and offline use, it doesn’t meet the security needs of our client.
- I understood the tech lead’s point of view — binary data is splitted into chunks and hard for human read — but the client wanted to make sure their data was fully secure.
- 30-minute meeting with the client, they wanted the data to be protected using AES-256 encryption, a strong encryption standard
    - Ask the maintainer of absurd-sql if they could add encryption support.
    - Fork (copy) the library ourselves and add AES-256 encryption.
    - Look into using a different library that already supports encrypted storage.
- The team acknowledged the security gap and appreciated the proactive communication
- Began exploring the fork option while openning issues in the open source
- The process strengthened our relationship with the client and demonstrated our commitment to meeting their expectations.

---

## Bug
## Success
- We’re using Capacitor to build a cross-platform app (iOS, Android, Web), and Drizzle to wrap native SQLite access for storing user data.
- The app supports multiple user logins and saves multiple user profiles.
- On Web, we have a function that deletes user data before showing the login page. Since it uses IndexedDB, it’s easy to download and delete the data.
- On iOS and Android, it’s different because we use native SQLite, which stores encrypted databases.
- To delete a database, the library only allows deletion after creating a connection – which requires the user’s password (used as the encryption key).
- This was a problem because at the pre-login stage, we don’t have the user’s password, so we couldn’t connect to delete it.
- My first proposed solution was to show a modal asking for the password when clicking delete.
- But that dragged the PO into the loop for feedback, and they didn’t like it. They knew the client would prefer the simple step we already have on the web.
- I explained the situation and made a compromise: if there’s no other way, I’ll go with the modal, but I wanted to explore deeper first.
- I dug into how the DB is stored on mobile, and found that it’s just a file on the device:
    - On iOS, I could use the Capacitor FileSystem plugin to delete that DB file directly.
    - But on Android, the FileSystem plugin only lets you delete files from certain allowed folders. The DB file isn’t in those folders.
- After searching more, I found that Android has a native API (context.deleteDatabase(name)) that can delete a DB without needing the encrypted key.
- To use that API, I needed to write a native Android call from JavaScript – which meant creating a new Capacitor plugin.
- I was short on time and knew starting a Capacitor plugin from scratch would take too long – and I might miss my boss’s demo that night.
- So I implemented a workaround: added a new method to an existing Capacitor plugin we already had.
- I wrote the unit test, published a new version, and the app was ready in time.
- I also created a ticket so that the next day I can migrate the code into a new plugin the proper way.
- In the end, I finished the critical ticket in a day, and my boss was able to demo the app successfully that night.

---

## Process improvement
- When I first joined the project, I inherited a legacy SVG editor that was over 10 years old—a fork of svg-edit with a codebase full of OOP patterns (Factory, Facade, Backbone MVC). It was deeply coupled and hard to work with.
- Onboarding new developers was a real struggle. The code was all vanilla JavaScript, UI was tangled with business logic, there were barely any tests, and modern devs just aren’t used to that kind of environment anymore.
- At the same time, we were expected to keep shipping new features. So I knew we couldn’t just pause everything for a full rewrite—we needed a progressive modernization strategy.
- I took the lead on designing that path forward. First, I set up an NX monorepo to give us a modern workspace and allow us to develop the new system while still referencing or running the old code.
- In the short term, I mounted new React components inside the old vanilla JS app, so we could start improving user experience and developer velocity without a full rewrite right away.
- Then I cloned the legacy repo into the monorepo, stripped out all the UI, and kept just the SVG core logic.
- From there, I started rewriting functionality in TypeScript, moving from OOP to functional programming, using the old svg-edit as a guide but improving on its limitations.
- I introduced unit tests to make sure everything worked as expected while we gradually modernized the logic.
- I also led the rebuild of our major UI components—like the page preview, toolbar, and sidebars—completely in React.
- These new components were built with theming, responsiveness, and reusability in mind. They’re now being reused across different parts of the platform and in upcoming editor projects.
- I set up Vite for fast hot reload, added Storybook for component testing and documentation, and enforced consistent styling and patterns across the board.
- The new system is now framework-agnostic, modular, and much more extensible—no more tight coupling. Exporting SVG to image/video/PDF, deleting/reordering pages—these are now shared modules used inside and outside the editor.
- I documented everything clearly and ran training sessions to bring the team along. Devs told me they felt 2x more productive, with way fewer runtime bugs.
- Looking back, we not only upgraded the tech—we transformed the development experience and set the foundation for future editors to be built faster and better.

---

## Tough decision
- I was assigned the task of building a feature to support PDF collaboration.
- After several meetings with the client, I learned their must-haves:
    - Live collaboration (real-time editing with conflict management)
    - No data loss
    - Offline support
    - Manual conflict resolution
- I needed to choose a collaboration architecture that:
    - Met the client’s requirements
    - Delivered something quickly for an upcoming US conference demo, as requested by the CEO
    - Could scale and be maintainable in the long run
- The two main architecture options were:
    - Client-server model: robust and better for long-term use, but complex to build, especially with our current tech stack
    - Peer-to-peer (P2P) model using WebRTC: much faster to implement since it is serverless, but less scalable, it can overhead the server by it require too much saving and harder to manage over time
- I researched and compared both models:
    - Client-server: All users sync through a central server; this allows more control over document merging and version history, but it required complex backend logic for Yjs and high effort from our backend team.
    - P2P/WebRTC: Peers talk directly to each other; easier and faster to build, only requiring a signaling server (via WebSocket), but with trade-offs in long-term maintainability.
- I created a sandbox environment with a basic Node.js setup as a server to test and compare the performance of the two models.
- I also:
    - Discussed with the backend team to understand:
        - The effort needed to build a full client-server setup with merge handling and document history
        - The minimal effort to build just a signaling server
    - Found out that while Yjs provides a Node.js server library, it does not support Go, which is our current backend language — making the client-server option even more challenging for now
- I gathered all the findings and presented them to the CEO and manager.
- I chose to go with P2P/WebRTC for Phase 1, to deliver a fast, working solution for the conference.
- I planned Phase 2 to upgrade to a client-server model after the demo, once we had more time and backend resources.
- I worked with the team to implement the solution using Yjs for real-time editing, WebRTC for syncing, and a simple WebSocket signaling server.
- I also documented my findings, including the current setup and the challenges we’d face with a client-server migration in the future.
- We delivered the feature in just 3 weeks, right in time for the US conference.
- The demo impressed the client and played a key role in closing the biggest contract our company had ever signed.
- We now have a clear roadmap to gradually migrate to a more robust client-server model without rushing.

---

## Migration
- Why We Transitioned
	•	Metro bundler was slow, lacked proper web support, and made debugging difficult.
	•	NativeBase had performance issues and limited flexibility for responsive design.
	•	Poor ecosystem for web and desktop development within React Native.
	•	Hard to onboard new engineers due to non-standard dev flow.
	•	Needed a stack that supports web-first, responsive, offline-ready, cross-platform apps.
- Requirement Understanding
	•	Aligned with product/design/backend on:
	•	Maintaining all existing app features across platforms.
	•	Improving dev experience and build speed.
	•	Reusing codebase where possible, rewriting only when necessary.
	•	Key requirements:
	•	Offline support, desktop/web parity, and mobile compatibility using Capacitor.
- Planning & Task Breakdown
	•	I decomposed the migration into modules
	•	Each task was documented with expected input/output, test cases, and fallback plans.
- Assigning Tasks
    •	I distributed tasks based on team members’ strengths — assigning complex architecture decisions to senior devs and UI porting to mid-level engineers.
    •	For junior devs, I paired them on UI rewrites using the new component library to build familiarity.
    •	I also acted as the go-to person for blockers and integration issues.
- Setup & Standards
	•	Switched to Vite for fast HMR and builds.
	•	Introduced monorepo structure and shared design system with Tailwind.
	•	Setup:
	•	ESLint + Prettier + Husky + pre commit hooks for code quality and consistent formatting
	•	Storybook for components
- Development & Support
	•	We held weekly check-ins and async daily updates.
	•	I reviewed all PRs related to core architecture 
	•	Introduced Storybook for isolated UI testing and component documentation.
- Quality Assurance
	•	Used Vitest + Playwright for unit and e2e testing.
	•	Snapshot tests for visual regressions.
	•	QA team involved early with preview deployments (Vercel + GitHub Actions).
- Deployment & Monitoring
- Retrospective & Improvements
	•	Post-migration, we saw a 60% improvement in dev build speed, a 40% decrease in bug reports, and onboarded two engineers in under a week.
	•	In the retrospective, we decided to invest more in automated visual regression testing and gradually expand our design system coverage.
	•	This transition significantly improved both developer and end-user experience, aligning our frontend tech with modern, maintainable, and performant practices.

# Hard customer
🎯 Context:
	•	Our frontend team recently completed a full migration from a custom UI kit to MUI (Material UI).
	•	The goal was to improve consistency, accessibility, and long-term maintainability.
	•	One major customer became frustrated with the changes, reporting multiple regressions and requesting constant fixes and releases.

⸻

🧠 My Role as Senior Frontend Engineer:
	•	Listened Actively:
	•	Joined customer calls directly to hear concerns.
	•	Acknowledged their frustration without being defensive.
	•	Clarified that we valued their feedback and wanted to stabilize the experience quickly.
	•	Analyzed Feedback Systematically:
	•	Categorized all reported issues:
	•	Actual regressions caused by the migration.
	•	Intentional UX changes that needed better communication.
	•	Usability issues due to differences in MUI defaults.
	•	Prioritized issues based on user impact and fix complexity.
	•	Created a Feedback Pipeline:
	•	Suggested weekly batch releases instead of one-off hotfixes.
	•	Set up a feedback board to make their requests more visible and trackable.
	•	Helped the team avoid burnout and context switching.
	•	Implemented Quality Guardrails:
	•	Introduced visual regression testing with tools like Chromatic or Percy.
	•	Wrote unit tests for custom MUI overrides to ensure consistent behavior.
	•	Reviewed the theme customization to better match their branding expectations.
	•	Improved Transparency and Trust:
	•	Shared a public changelog and upcoming roadmap.
	•	Presented clear reasons for certain UI changes.
	•	Involved the customer in validating early versions of upcoming features.

⸻

✅ Outcome:
	•	The customer calmed down and became more collaborative.
	•	Team velocity recovered, and we avoided shipping panic fixes.
	•	The overall frontend codebase became more stable and testable post-migration.

⸻
