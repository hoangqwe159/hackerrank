# Table of Contents
[Learn New Tech (Tanstack query)](#learn-new-tech)
[Mentor](#mentor)
[Beyond responsibility](#beyond-responsibility)
[Prioritize (ToC)](#prioritize)
[Timely delivery without sacrificing quality (ToC)](#timely-delivery-without-sacrificing-quality)
[Lead (Migrate from react native)](#lead)
[Keep Team Motivated (Migrate from react native)](#keep-team-motivated)
[How to Handle Underperformance (Give feedback, teammate missed deadlines)](#how-to-handle-underperformance)
[Training (CMS app)](#training)
[Deal with Vague Requirements (PDF)](#deal-with-vague)
[Collaboration (PDF)](#collaboration)
[Complex Project (PDF)](#complex-project)
[Receive Feedback](#receive-feedback)
[Missed Deadline (ToC)](#missed-deadline)
[Earn trust after mistake (ToC)](#earn-trust-after-mistake)
[Failure (Text overflow)](#failure)
[Complex Task (Text overflow)](#complex-task)
[Simplify and Innovation (Text overflow)](#simplify-and-innovation)
[Disagree and Commit (Font thumbnail)](#disagree-and-commit)
[Conflict (Froala Editor)](#conflict)
[Give Feedback (Absurd sql)](#give-feedback)
[Customer (Absurd sql)](#customer)
[Bug Handling (Absurd sql)](#bug)
[Success (Absurd sql)](#success)
[Process Improvement (Migrate to NX)](#process-improvement)
[Tough Decision (PDF)](#tough-decision)
[Migration (Migrate from react native)](#migration)
[Hard customer (Migrate from react native)](#hard-customer)
[Requirements changed (PDF)](#requirements-changed)
[Tight deadlines (PDF)](#tight-deadlines)
[Stay up to date](#stay-up-to-date)
[Adapt new tech](#adapt-new-tech)
[Learn thing deeper](#learn-thing-deeper)

## Learn new tech
- Our app was struggling with redundant API calls and messy loading states across pages.
- I proposed we explore TanStack Query to improve data fetching and caching. Organized team workshop to collectively identify and define the problem, ensuring everyone had input
- Although I hadn’t used it before, I took ownership of the learning process.
    Started with purpose – I read use cases and real-world success stories to see why teams adopted it and what pain points it solved.
- Formed research group, divided investigation among team members, created shared workspace for findings
- Simulated edge cases like cache invalidation, stale data, and refetch intervals to test its strengths.
- After a week of individual research, we held a "Solution Showcase" session where each person presented their findings
- Rather than just showing features, we built small prototypes addressing our specific use cases
- The team demonstrated the findings: performance impact, learning curve, bundle size, and alignment with existing patterns
- Multiple pair-programming sessions, rotational leadership for different features – Walked a teammate through setting up query hooks and caching policies.
- Instead of implementing alone, I paired with different team members to create our first query hooks
- We established coding standards together through live coding sessions
- Created a shared library of custom hooks (usePaginatedQuery, useInfiniteQuery) with input from multiple developers
- Documented best practices – Summarized learnings in Confluence and added tips to our internal wiki for the whole team.

- The collaborative research process improved team dynamics and created a culture of shared technical decision-making
- Our documentation and evaluation framework was adopted by two other engineering teams
- Adoption of TanStack Query led to a noticeable boost in performance and dev productivity.
- It also reduced bugs around loading and error states by centralizing state logic.

---

## Mentor
## Beyond responsibility
- first joined, Recognized junior dev needed guidance to be productive, but mentoring wasn't my assigned responsibility, earn trust before offering guidance
- Goal: Help Harry succeed while maintaining my own delivery commitments
- Wanted to build sustainable knowledge-sharing culture for future team members
- small talk, how dev tools work, stay late to finish critical tickets, took ownership of features from end to end
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

## Prioritize
## Timely delivery without sacrificing quality
- At Desygner, I was working on a client-facing feature — the Table of Contents, which involved complex text layout across multiple pages.
- It had to be finished in one sprint for a client demo, so the deadline was fixed and very visible.
- At the same time, the feature had to be fast, stable, and reliable — no cutting corners.

- My goal was to deliver the feature on time, without compromising the performance, styling accuracy, or cross-page syncing logic.
- I also needed to ensure that we were all aligned on what exactly needed to be delivered.

- To manage both timeline and quality, I took several steps:
- I set up a quick meeting with key product and engineering stakeholders to:
- Verify the core requirements
- Co-prioritize the must-have vs nice-to-have items
- Assign the right resources based on expertise and availability
- I broke the work down into smaller tasks with clear estimates to better track progress and spot delays early.
- I prioritized the main user flow, saving optional styling polish or rare edge cases for after QA signoff.
- Set up Storybook components and unit tests early, so I could validate changes quickly and catch bugs fast.
- Used browser dev tools to monitor performance on large documents and ensure a smooth typing and navigation experience.
- Whenever I ran into a blocker or time risk, I gave the team a proactive update — not waiting until things slipped.

- I delivered the feature 2–3 days ahead of the deadline, giving QA extra buffer for thorough testing.
- The client demo went smoothly, and the feature worked well across all required devices.
- The team appreciated the structured planning and early risk communication.
- I earned trust from my tech lead and PM, and was later given more ownership over time-sensitive and cross-team projects.

## Lead
## Keep team motivated
- I was assigned the task to rewrite all UI components from NativeBase (React Native) to MUI (Capacitor).
- This was a big change, with new concepts like theme token, Tailwind, and styled-components.
- Some components were advanced and hard to rewrite, like FlatList, which uses virtualization under the hood in React Native.
- Requirement Understanding
- Planning & Task Breakdown
	- I decomposed the migration into modules
	- Each task was documented with expected input/output, test cases, and fallback plans.
- Assigning Tasks
    - I distributed tasks based on team members’ strengths — assigning complex architecture decisions to senior devs and UI porting to mid-level engineers.
    - For junior devs, I paired them on UI rewrites using the new component library to build familiarity.
    - I also acted as the go-to person for blockers and integration issues.
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
- I discussed the trades off, example, behaviour, give some data like what company use which model, why they use it ... 
- We agreed that the version-detection model is more user-friendly, and decided to use Yjs (a CRDT library) to implement it.
- We encountered a challenge: deciding on the network architecture.
- I organized a short technical workshop with the Backend team to evaluate:
    - A client-server model, offering long-term robustness but requiring complex backend logic to handle CRDT merges
    - A peer-to-peer model using WebRTC, much easier to implement in the short term with WebSocket signaling
- While the client-server model is more robust long-term, the CEO preferred a fast delivery for the upcoming US conference demo.

- I decided to split development into phases:
    - Phase 1: Use WebRTC for a quick win and deliver a working demo fast.
    - Phase 2: Plan future work for the backend team to transition to a client-server model for better robustness.
While I led the frontend integration, I worked closely with:
    - The QA team to define test cases for conflict resolution and offline recovery
    - The Designer team to ensure the UI handled collaboration states (e.g. “live editing”, “offline”, “conflict detected”) in a clear and intuitive way
    - The Backend team to outline future server-side sync and persistence for Phase 2
- Using Yjs and WebRTC, we successfully demoed the feature within 3 weeks of development.
- The feature played a vital role in convincing the user to sign our biggest contract with the company.
- I received great feedback from the client on the collaboration functionality and the overall execution.

---

## Receive feedback
## Missed deadline
## Earn trust after mistake
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
- In the next sprint, I delivered my tasks ahead of schedule and with fewer bugs.
- I also kept the team updated regularly, so they didn’t have to chase me for progress.
- My team lead and PM both noticed the change and praised my growth during sprint retro.
- Over time, they started trusting me with more complex features, and even asked for my input in planning sessions.
- I learned that trust isn’t just about one success—it’s about showing consistent improvement, being honest, and following through
---

## Failure
## Complex task
## Simplify and innovation
- Early days at Desygner, one of our biggest clients wanted to migrate their documents from InDesign to our SVG editor.
- They wanted the exact same editing experience as InDesign, including a tricky feature: Text Overflow.
- Text Overflow = link text boxes across pages, and let text flow and update live when editing.
- We had 3 main things to figure out:
1.	Page Preview – Let users drag and connect text boxes across pages.
2.	Performance – Handle large text quickly.
3.	Overflow Logic – Update text across pages smoothly as you type.

- Team Setup
- A new developer joined who was great with React, but not familiar with our Backbone.js codebase.
- I asked the new dev to build the Page Preview UI in React, in a separate repo.
- I made sure we used Storybook and unit tests, so the component was easy to test and reuse.
- I noticed the Page Preview was large, so I added lazy loading — now it only loads when needed.
- This way:
	- The new dev could be productive quickly without learning Backbone.
	- We isolated complexity, so the code was easier to maintain.
    - The Page Preview component was completed 3 days ahead of schedule, thanks to the modular design and focused scope.
	- The project became a stepping stone for future improvements in developer experience, showing how separating complex features into isolated, testable modules can boost team productivity.
    - This approach sparked internal discussions on investing in React migration and modern tooling across the platform.

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
- When I joined the company as a new senior engineer, my first major task was to build a rich text editor for our CMS platform.
- The manager had already chosen Froala Editor for the project, but I wasn’t asked for input.
- We had a tight one-month deadline to finish an MVP so the CEO could demo it to customers.
- The editor needed to support Web, iOS, and Android, and include advanced features like importing from Excel and Word, changes tracking and comment

- My job was to build the editor quickly, but I also wanted to make sure we picked the right tool for the long run.
- So before jumping in, I wanted to understand why Froala was selected, 
- and if any other tools might offer better flexibility and scalability.

- I asked my manager about why Froala Editor was chosen. He shared that it had an impressive product page, with features like Word import and change tracking, which sounded perfect at first glance.
- I agreed those features were important, but I explained that some open-source tools like ProseMirror can also support those features—even though they don’t advertise them upfront.
- I respectfully asked: “Would you give me a few days to review and compare options before we commit fully?” — and the team agreed.

- I asked my manager about why Froala Editor was chosen. He shared that it had an impressive product page, with features like Word import and change tracking, which sounded perfect at first glance.
- I agreed those features were important, but I explained that some open-source tools like ProseMirror can also support those features—even though they don’t advertise them upfront.
- I respectfully asked: “Would you give me a few days to review and compare options before we commit fully?” — and the team agreed.
- I built a React sandbox to test both Froala and ProseMirror.
- I used browser dev tools and ran performance benchmarks on common actions:
- Typing text
- Inserting images and tables
- Navigating long documents
- I measured things like input lag, bundle size, memory usage, and plugin support.
- I also noted some risks with Froala, like licensing cost, limited community support, and a few open security issues.
- I put all findings into a clear technical report and set up a meeting with my manager and tech lead.
- I walked them through the data, and showed how ProseMirror matched or exceeded Froala’s features, with the benefit of being open-source and more extensible.

- The team reviewed the analysis and decided to pivot to ProseMirror.
- We still finished the MVP on time, and the customer demo went smoothly.
- The editor later became one of the most powerful and flexible parts of the platform.
- My team appreciated how I handled the situation: I was respectful, data-driven, and focused on the long-term product quality.
- It helped me build trust quickly, and I was later asked to advise on other key tech decisions.
---

## Give feedback
## Customer
- Found a security issue with absurd-sql (runs SQLite on top of IndexedDB, stores unencrypted binary).
- I brought this up with our tech lead and explained that while absurd-sql works well for performance and offline use, it doesn’t meet the security needs of our client.
- I understood the tech lead’s point of view — binary data is splitted into chunks and hard for human read — but the client wanted to make sure their data was fully secure.
- Joined a 30-minute meeting with the client to understand their expectations. They confirmed that AES-256 encryption was a mandatory requirement.
- Proposed three clear technical options:
    - Ask the maintainer of absurd-sql if they could add native encryption support.
    - Fork (copy) the library ourselves and add AES-256 encryption.
    - Look into using a different library that already supports encrypted storage.
- Opened detailed issues in the absurd-sql GitHub repo to raise community awareness and start a dialogue with maintainers.
- While awaiting responses, I initiated a prototype of the forked approach, ensuring we had a viable fallback plan.
- The team acknowledged the security gap and appreciated the proactive communication
- The client was reassured by our approach and gained their confidence in our ability to meet their compliance standards.
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
	- Metro bundler was slow, lacked proper web support, and made debugging difficult.
	- NativeBase had performance issues and limited flexibility for responsive design.
	- Poor ecosystem for web and desktop development within React Native.
	- Hard to onboard new engineers due to non-standard dev flow.
	- Needed a stack that supports web-first, responsive, offline-ready, cross-platform apps.
- Requirement Understanding
	- Aligned with product/design/backend on:
	- Maintaining all existing app features across platforms.
	- Improving dev experience and build speed.
	- Reusing codebase where possible, rewriting only when necessary.
	- Key requirements:
	- Offline support, desktop/web parity, and mobile compatibility using Capacitor.
- Planning & Task Breakdown
	- I decomposed the migration into modules
	- Each task was documented with expected input/output, test cases, and fallback plans.
- Assigning Tasks
    - I distributed tasks based on team members’ strengths — assigning complex architecture decisions to senior devs and UI porting to mid-level engineers.
    - For junior devs, I paired them on UI rewrites using the new component library to build familiarity.
    - I also acted as the go-to person for blockers and integration issues.
- Setup & Standards
	- Switched to Vite for fast HMR and builds.
	- Introduced monorepo structure and shared design system with Tailwind.
	- Setup:
	- ESLint + Prettier + Husky + pre commit hooks for code quality and consistent formatting
	- Storybook for components
- Development & Support
	- We held weekly check-ins and async daily updates.
	- I reviewed all PRs related to core architecture 
	- Introduced Storybook for isolated UI testing and component documentation.
- Quality Assurance
	- Used Vitest + Playwright for unit and e2e testing.
	- Snapshot tests for visual regressions.
	- QA team involved early with preview deployments 
- Deployment & Monitoring
- Retrospective & Improvements
	- Post-migration, we saw a 60% improvement in dev build speed, a 40% decrease in bug reports, and onboarded two engineers in under a week.
	- In the retrospective, we decided to invest more in automated visual regression testing and gradually expand our design system coverage.
	- This transition significantly improved both developer and end-user experience, aligning our frontend tech with modern, maintainable, and performant practices.

# Hard customer
Recently, our frontend team completed a major migration from a custom UI library to MUI. The goal was to align with modern design standards, improve accessibility, and speed up development with a more maintainable component system.

However, after we deployed the first release, one of our long-time customers was very unhappy. They pointed out several visual and functional regressions and were frustrated by changes in workflows they were used to.

As the senior frontend engineer, I took the lead on handling this situation.
	1.	Empathy First:
I joined a call with the customer and listened carefully without pushing back. I acknowledged their pain and explained that while the system redesign aims for long-term gains, we take immediate concerns seriously.
	2.	Root Cause Analysis:
I worked with the team to map every issue they raised to either a regression, a deliberate UX decision, or a misunderstanding caused by missing documentation or training. For example, some form elements had slightly changed behaviors due to default props in MUI. Others were styling inconsistencies we could quickly address.
	3.	Structured Feedback Loop:
I proposed a weekly sync with the customer to batch feedback into releases instead of pushing ad-hoc changes. This gave us room to triage, prioritize, and test properly—without breaking the new foundation we had built.
	4.	Technical Guardrails:
I introduced visual regression testing using tools like Chromatic, so we could confidently detect unwanted UI shifts before release. This helped rebuild trust with the customer and stabilized our velocity.
	5.	Transparency:
I shared a changelog and roadmap to show what we were doing and why. By involving the customer earlier in future design decisions, their tone changed from reactive to collaborative.

⸻

Conclusion:
Migrating a UI system always causes friction, especially with legacy users. As a senior engineer, it’s not just about writing better code—it’s also about calming chaos, managing expectations, and building trust through structured process and empathy.

✅ Outcome:
	- The customer calmed down and became more collaborative.
	- Team velocity recovered, and we avoided shipping panic fixes.
	- The overall frontend codebase became more stable and testable post-migration.

⸻

# Insist on standard
	•	A junior developer on my team was working on porting UI components from NativeBase to MUI as part of our design system migration.
	•	I was responsible for doing a code review on their pull request.
	•	While the components were visually correct, I noticed they used a lot of hardcoded values — colors, spacing, font sizes — instead of using our theme tokens.

	•	My goal as a senior developer was to ensure our components followed consistent theming, so they would remain scalable, accessible, and maintainable.
	•	I also saw this as a chance to coach the junior dev and help improve our team’s overall code quality standards.

	•	In the code review, I provided specific feedback on where tokens should be used instead of hardcoded values — explaining the “why” behind theming consistency (e.g., dark mode support, design system alignment).
	•	I also paired 1:1 with the junior dev to walk through a few components and showed how to replace raw values with tokens from our MUI theme configuration.
	•	I realized this wasn’t a one-off issue, so I took the initiative to create a team-wide “UI Theming Best Practices” guide, with:
	•	Examples of good vs bad usage
	•	How to use theme.spacing() and theme.palette
	•	Auto-suggestions using our VSCode snippets and lint rules
	•	I also proposed a linting rule update to flag hardcoded values in styled components across the codebase.
	•	Finally, I shared the guide in our engineering Slack channel and presented it in our next frontend guild meeting, so other teams could also adopt it.

	•	The junior dev appreciated the feedback and said it helped them understand the bigger picture of design systems.
	•	The updated components became fully token-based, and we avoided future styling regressions during dark mode testing.
	•	Other teams adopted the same theming guide, and the lint rule helped catch dozens of violations in upcoming reviews.
	•	My manager gave positive feedback for improving team standards and scaling the solution across the org.
	•	This experience helped raise the overall code quality bar and fostered a culture of thoughtful, scalable UI development.


# Requirements changed
# Tight deadlines
S (Situation):
I was leading the frontend side of a complex feature for a PDF collaboration tool. The original goal was to support real-time multi-user editing, with offline support and manual conflict resolution.

I had researched multiple collaboration models — from floor control to versioning — and after discussion with the client, we aligned on using a version-detection model (like Google Docs) and a robust client-server architecture for syncing. This approach offered a centralized source of truth, persistent document states, and ensured robustness for joining and crashing clients.

⸻

T (Task):
I was ready to begin implementation with the backend team when our CEO introduced a new requirement:
We needed a working demo in three weeks for a major conference in the U.S.
The client-server model required significant backend engineering — and we simply didn’t have the time or capacity.
The new constraint: deliver the same real-time collaboration behavior, but deliver it fast.

⸻

A (Action):
I reassessed our options and proposed a change: for Phase 1, we’d use peer-to-peer communication via WebRTC to sync changes directly between browsers using Yjs (a CRDT library).

This decision meant sacrificing the centralized source of truth, persistent database storage, and a cleaner onboarding path for new participants. But it allowed us to:
	•	Avoid backend bottlenecks by having browsers sync state directly.
	•	Lower infrastructure cost during the demo phase.
	•	Accelerate delivery without blocking on server-side engineering.

To validate the idea, I:
	- Built a proof-of-concept using WebRTC + Yjs to ensure it met the client’s expectations.
	- Held a short technical workshop with the backend team to ensure we could safely migrate to client-server in Phase 2.
	- Documented the architecture and trade-offs transparently, especially around known weaknesses: synchronization issues, lack of a consistent source of truth, and inability to persist changes centrally.
	- Worked closely with the QA and Design teams to ensure the UI properly reflected sync states like “editing live,” “offline,” or “conflict detected.”

⸻

R (Result):
We delivered a fully working live collaboration demo in just three weeks, which helped the CEO secure our biggest client contract to date.
Even better, we laid a clear path for the client-server model afterward without rushing it.

This experience reinforced the importance of adapting without overcompromising. I stayed focused on user needs, clarified priorities with leadership, and found a way to ship value fast without sacrificing long-term quality.

# Stay up to date
I have been working at a big tech company for the past two years now and the company uses a mix of external and internal technologies for our front end stack. Because we have a huge code base and established practice of doing things, we tend to not upgrade libraries that often and change our technology choices. It was only after a year into the job that I realized that I have been too comfortable in my role since I have fully ramped up on the code base and haven't learnt anything new for the past year. It was then that I decided that I have to be proactive in my learning in order to keep my skills sharp and relevant.

The Front End ecosystem moves really fast and there's a joke that there's a new JavaScript library emerging every day. Thankfully the ecosystem is more stable compared to 2015/2016 when a new wave of front end tooling first emerged. To keep myself updated without suffering from JavaScript fatigue, I spend a weekend every month going through front end newsletters like "This Week in React" and "JavaScript Weekly" and reading engineering blogs. If I see something interesting or is relevant to my job, I will dive deeper into them by trying out small examples and building small prototypes in my company's code base. For example, I recently discovered React Query, which is a data fetching library for React that uses a declarative paradigm for fetching data and am trying to incorporate it into my work. I also recently discovered tRPC, a library that enforces type safety between client and server boundaries, which is an issue that has caused some bugs for us.

To make this learning process more fun and collaborative, I started a front end social club within my company by creating a new Slack channel and inviting a few like-minded coworkers to join. Anyone can share front end news they find interesting there and discuss front end technologies. It has been pretty well-received, with over 30 people currently in the channel and activity nearly everyday. A side effect of this initiative is that people also start asking questions about front end issues they are facing at work, and we created another Slack channel for people to get help on front end issues. Feedback has been really positive so far!

#  Adapt new tech
When I joined my first company, I was fresh out of college and had no experience with the front end stack that the company was using, which used React, Apollo, Styled Components, TypeScript for their front end stack and a Django + GraphQL back end. Back in college, I was mainly using Vue.js for front end development as it was the JavaScript framework of choice taught in the web development class and haven't used GraphQL before.

It was definitely a huge learning curve for me at the start and I was really afraid of underperforming due to my unfamiliarity with the tech stack. Thankfully I had a mentor who gave me a lot of guidance on the tech stack and came up with a number of onboarding tasks which were progressively harder. I first spent a few days reading the documentation websites of the technologies and trying out the examples on their websites. I made it a point to understand the problems that these libraries were solving and how they were better than prior art because I think knowing that is important for fully appreciating the library and using the right tool for the right job. I also looked up some resources that compared Vue.js to React, as they were quite similar yet had some differences. That helped me to learn React faster (fully grasping React hooks still took me some time though). When I had time at nights or on weekends, I'd explore building small projects using these new technologies and also rebuild my personal blog using Gatsby because it used both React and GraphQL.

Within two months, I felt like I had learnt so much and was comfortable with most of the code base. I could build full stack features without much guidance from my mentor. To help future new employees who might face the same onboarding challenge, I jotted down my learnings in our internal wiki along with links to the best resources for learning the topic. My manager appreciated the initiative and commended me for that. Today, it is part of our official engineering onboarding resource and I update it every once in a while. A few new joiners have also thanked me for sharing my knowledge in the wiki and making their onboarding process smoother.

# Learn thing deeper
S – Situation
	•	I was leading frontend development for a real-time collaboration feature in a PDF editing tool.
	•	The feature required multi-user editing, offline support, and manual conflict resolution.
	•	I realized that building this correctly would require a solid understanding of conflict resolution in distributed systems—something I didn’t yet fully grasp, especially around CRDTs.

⸻

T – Task
	•	I needed to upskill quickly and also bring the team along, so we could:
	•	Choose the right architecture (e.g. CRDTs, OT, versioning)
	•	Ship a working demo fast
	•	Set a strong foundation for long-term maintainability

⸻

A – Action
	•	I committed to deepening my knowledge and sharing it with the team:
	•	Spent evenings reading CRDT research papers, Yjs internals, and examples from similar tools like Figma and Google Docs.
	•	Built small prototypes using Yjs to simulate document syncing across tabs and offline re-sync scenarios.
	•	Once I was confident in the basics, I:
	•	Wrote clear internal documentation: what CRDTs are, how Yjs works, pros/cons vs alternatives like OT.
	•	Held a workshop with the team to break it all down simply and collaboratively.
	•	Asked the team:
➤ “Given what we now understand about Yjs, what cool things can we build with it?”
➤ This led to valuable discussion, like implementing cursor presence, undo history, and awareness indicators.
	•	Worked closely with backend engineers to ensure the eventual migration to client-server sync would be smooth.

⸻

R – Result
	•	I transformed a complex concept into something the whole team could understand and act on.
	•	We shipped a fully working P2P live collaboration demo in just 3 weeks, which helped secure a major client contract.
	•	The documentation and workshop empowered other devs to contribute confidently and extend the feature further.
	•	This experience reminded me that subject expertise isn’t just about knowing more—it’s about bringing others with you.

⸻




1. Customer Obsession
	- Tell me about a time you went above and beyond for a customer. v
	- Describe a time when you had to balance customer needs with technical limitations. v

2. Ownership
	- Tell me about a time you owned a project end-to-end. v
	- Have you ever taken responsibility for a problem that wasn’t technically yours? v

3. Invent and Simplify
	- Tell me about a time you simplified a complex system. v
	- Describe an innovation you introduced in your team. v

4. Are Right, A Lot
	- Describe a decision you made based on your judgment and data that turned out well. v
	- Tell me about a time you made a mistake and how you corrected it. v

5. Learn and Be Curious
	- How do you stay updated with new technologies? v
	- Tell me about a time you learned a new tool or framework on the job. v

6. Hire and Develop the Best
	- Have you ever mentored someone? How did it go? v
	- Describe a time you helped a peer grow professionally. v

7. Insist on the Highest Standards
	- Tell me about a time you weren’t satisfied with the quality of a project.
	- Describe a time when you pushed back on something that didn’t meet your standards.

8. Think Big
	- Describe a time when you proposed a bold or large-scale idea. v
	- Have you ever challenged the status quo at work? v

9. Bias for Action
	- Tell me about a time you made a quick decision under pressure.
	- Describe an instance when you took initiative without being asked. v

10. Frugality
	- Have you ever had to do more with less?
	- Tell me about a time you built a solution with limited resources. v

11. Earn Trust
	- How do you build trust with team members? v
	- Tell me about a time you had to rebuild trust after a mistake. v

12. Dive Deep
	- Describe a time when you found the root cause of a difficult bug. v
	- Tell me about a situation where you had to dig into data to solve a problem. v

13. Have Backbone; Disagree and Commit
	- Tell me about a time you disagreed with your manager or team and how you handled it. v

14. Deliver Results
	- Give an example of a time when you worked under a tight deadline. v
	- How do you ensure timely delivery without sacrificing quality? v

You were working on a project with a 15-day deadline, but after some time, you realized that the tasks would actually take 2-3 months to complete. How would you handle this situation?
Tell me a time where you did something without telling your manager. What was that? Why didn't you tell?
Tell me a time where you have taken out of your responsibility.
Tell me a time where you worked on tight deadlines.

Segment Tree
⸻

Based on your interview feedback, you're technically strong but need to demonstrate more senior-level collaboration and broader impact. Here are specific improvements based on your experiences:
Collaboration Improvements
Current State: You tend to work independently and solve problems solo
Senior Expectation: Drive collaborative solutions and enable others
Specific Actions:

Include stakeholders in problem-solving: When you discovered the TanStack Query solution, instead of just presenting the final POC, involve team members in the research phase. Create working groups to evaluate solutions together.
Facilitate cross-team alignment: In your PDF collaboration project, emphasize how you coordinated between Backend, QA, and Design teams, not just the technical decisions.
Create shared ownership: When migrating from React Native, show how you distributed knowledge and made the team collectively responsible for success.

Impact Beyond Your Code
Current State: Focus on technical execution and personal contributions
Senior Expectation: Drive organizational improvements and influence beyond your immediate team
Reframe Your Stories:

Mentoring Impact: Don't just mention Harry got a job at Westpac - emphasize how your mentoring approach became a template for onboarding other developers
Process Innovation: Your NX monorepo migration should highlight how it improved hiring, reduced onboarding time across teams, and influenced other projects
Knowledge Sharing: Your Confluence documentation and internal wiki contributions show scalable impact - emphasize adoption rates and feedback from other teams

Leadership Without Authority
Current State: You solve problems when assigned
Senior Expectation: Identify and drive solutions proactively across teams
Demonstration Examples:

Proactive Problem Identification: When you noticed the font preview performance issue, show how you influenced product roadmap decisions 3 months later
Cross-team Influence: Your security concerns with absurd-sql should emphasize how you influenced both client relationships and internal security practices
Strategic Technical Decisions: The WebRTC vs client-server decision shows strategic thinking - emphasize how you balanced business needs with technical debt

Communication & Stakeholder Management
Current State: Good technical communication
Senior Expectation: Translate technical complexity for diverse audiences and drive consensus
Specific Examples:

Client Management: Your late-night call with the US client shows great dedication, but emphasize how you managed expectations and built trust
Executive Communication: When presenting architecture options to the CEO, show how you provided clear trade-offs and business implications
Team Communication: Your handling of the MUI migration customer complaints demonstrates senior-level crisis management

Systemic Thinking
Current State: Focus on immediate technical solutions
Senior Expectation: Consider long-term architectural and organizational implications
Reframe Your Approach:

Technical Strategy: Your component library and design system work shows architectural thinking - emphasize how it influenced company-wide standards
Process Improvement: The retrospective improvements you mention should show how you drive continuous improvement culture
Risk Management: Your phased approach to PDF collaboration shows strategic risk mitigation

Action Items for Future Interviews

Lead with Impact: Start stories with business/team outcomes, then explain technical details
Show Initiative: Emphasize times you identified problems before they were assigned to you
Demonstrate Influence: Show how your technical decisions influenced other teams or became company standards
Highlight Mentoring Scale: Show how your mentoring approach was adopted by others or improved team practices
Connect Technical to Business: Always tie technical decisions to business value and stakeholder outcomes

The key is shifting from "I solved this problem" to "I drove this outcome that benefited the organization and enabled others to succeed." Your technical skills are clearly strong - now you need to show the leadership impact that distinguishes senior engineers.

Amazon Interview Experience:-

Round 1(Coding Data Structures):-

LP Questions:-

Tell me about time when u took something significant out of area of responsibility and why did yout take that task and what is the ooutcome.
Can you describe a time when u realise u needed a deeper level of subject level expertise and what did u do for that.
Coding problems:-

1.You have balloons arranged in a line, each with a number written on it.
When you shoot a balloon, your score is calculated as (shooting_order × balloon_value).
For example, if you shoot a balloon with value 5 as your 3rd shot, you get 3 × 5 = 15 points.
Given an array of balloon values, find the maximum possible total score you can achieve by shooting all balloons.

2.Design a system to allocate and free server IDs from a fixed pool of servers with IDs from 1 to N.

allocate() → Return the smallest available ID that hasn't been allocated yet. If no ID is available, return -1.

free(id) → Mark a previously allocated ID as available again.

Round 2(Coding Problem Solving):-

LP Questions:-

Tell me about a time when you were trying to understand a complex problem on your team and you had to dig into the details to figure it out.
Who did you talk with or where did you have to look to find the most valuable information? How did you use that information to help solve the problem?

Give me an example of a time when you were able to deliver an important project under a tight deadline. What sacrifices did you have to make to meet the deadline?
How did they impact the final deliverable? What was the final outcome?


Time when you went above and beyond your job responsibilities.
Tell me about a time you had multiple solutions and you had to select an optimal one.

Coding Questions:-

num1 = [1, 2, 7]
num2 = [3, 14, 26]

you have to create a new array that will contain in sorted fashion.

Talked about both scenarios if input arrays are sorted or unsorted.

2.Input: orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]
Output: 6

type=
0 -> buy
1 -> sell

[price, qty, type]

how many orders you will not able to process.

[[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]

Even solving all the question efficently in optimised way before time got a call from recutiur saying that its NO in both rounds.

This round went well. I managed to draw the HLD completed the following:

Functional Requirements
Non Functional Requirements
DB Schema
Services
I was also questioned on choice of DB, Design and multiple failure scenarios which I was able to answer.\

It was related to finding triplets in 2nd array given some index condtion in first array.