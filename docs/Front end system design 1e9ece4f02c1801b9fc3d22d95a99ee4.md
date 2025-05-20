# Front end system design

I'm currently working on two major projects:

1. **No-Code CMS Platform**: This platform empowers industry clients to create applications compatible across all platforms, including PWA, iOS, Android, and web. I led the system migration from React Native to pure React + Capacitor, which significantly enhanced cross-platform functionality and responsiveness. I also developed and designed a new system of UI components for the platform, ensuring scalability and a seamless user experience.
2. **SVG Editor**: I have experience maintaining the legacy SVG editor with over 2 million users, and I am the founding engineer of a new, advanced SVG editor. This new platform has a more intuitive UI, richer features, and integrated AI capabilities, creating a superior user experience and supporting a wider range of creative tools.

In terms of **frontend and system design**, I am proficient across a wide array of technologies. For the no-code platform, I set up a robust new system architecture in React and Capacitor, implementing advanced features such as live collaboration in PDF document, HTML editor with a comment system, and a change-tracking mechanism. With a mobile-first, responsive design approach, I ensure the applications work seamlessly across any screen size.

I also have extensive experience with **offline-first architecture** and **database management**. I designed an offline-capable SQL database utilizing Service Worker, SharedWorker, and WebAssembly (WASM) with Shared Array Buffer and Atomics for reliable transactions. This setup optimizes performance and ensures continuity, even in offline conditions.

My skills also include implementing various **native mobile functions** like QR code scanning, OCR, NFC, camera integration, video recording, MSAL and map functionalities, which add significant value to mobile applications.

In terms of **build and deployment**, I am highly skilled in tools like Rollup, Vite, and Webpack, implementing tree shaking and other optimizations. This resulted in a three times improvement in development pipeline efficiency, accelerating the build process and supporting faster deployment cycles.

Finally, my adaptability and drive to solve complex technical challenges are evident in recent projects, like developing a custom Capacitor plugin with Java and Swift to integrate MSAL for native apps, which expanded our platform’s capabilities and provided seamless authentication options.

---

I’ve been working in start-up since day one, and it's been an incredible learning experience. Early on, the fast-paced environment really helped me grow quickly—especially in frontend development. I had the chance to take on a lot of responsibility and work across different parts of the stack, which accelerated my growth. But over time, as the product and team stabilized, the learning curve started to flatten. We're a small team, so while I still enjoy the work, I’ve been feeling the need for a bigger environment where I can collaborate with more engineers, learn from others, and tackle more complex challenges. I’m also excited about the idea of building something that impacts a much larger user base—seeing my code make a difference at scale is something I really care about. That’s why I’m looking for a new opportunity, and Atlassian is exactly the kind of place where I believe I can keep growing while contributing meaningfully
 

---

I’ve been using Atlassian products like Jira and Confluence for a long time, and I know how much they shape the way teams work and collaborate—I've relied on them daily. The idea of being part of the team that builds these tools, tools I genuinely respect and depend on, is incredibly motivating. On top of that, I really admire Atlassian’s culture—especially the focus on openness, collaboration, and continuous improvement. That kind of environment aligns perfectly with how I want to grow in my career. I’m excited about the chance to learn from a talented team, contribute to products that help millions of users, and keep pushing myself technically and professionally

---

Level 4: Architects & Experts
Design scalable front end applications that support hundreds or thousands of features and pages, setting technical standards and mentoring teams. I want to be an expert (top 1%) in niche topics like browser internals, WebGL, animations, web performance, WebAssembly, build tools, etc.

Level 5: Visionaries
Redefine front end engineering by evolving the web standards (WHATWG, TC39, etc.) or pioneering new paradigms like component-based systems, Flux architecture, server-driven UIs, server components, local-first apps, etc. They drive innovation and shape the future direction of front end development and its ecosystem. Few people ever get to this level.

---

**Mentor**
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

**Deal with vague**
**Collaboration**
- I was assigned the task of building a feature to support **PDF collaboration**.
- Lacking prior experience in this area, I requested my boss to give me **an afternoon to research** and come back with more clarity and possible directions.
- Through research, I discovered **two main collaboration models**:
    - **Slow collaboration**:
        - Multiple users can edit the same document.
        - The last saved version overwrites previous ones.
        - Works well when there are **few users** and **no concurrent edits** on the same document.
        - Transmitting the **entire document** is acceptable in this mode.
    - **Live collaboration**:
        - Multiple users edit the document **simultaneously**, with changes reflected in **real time**.
        - Requires a system to **transmit only the changes (deltas)**.
- I presented these models to the CEO, but he wasn’t sure which one would suit the client best.
- I decided to **schedule a 1-hour call with the client in the US**, even though it was late at night for me.
- The client clearly stated their requirements:
    - **No data loss** under any circumstances.
    - **Offline support**.
    - **Manual conflict resolution** when needed.
- I raised concerns that with the **slow collaboration method**, simultaneous edits could lead to lost changes.
- The client was happy to **proceed with live collaboration** instead
- I proposed various **concurrency control models**:
    - **Floor control model**: Only one user can edit the document at a time.
    - **Locks model**: A more refined version of floor control, where objects are locked during editing.
        - However, this introduces **network latency** and delays, which could be frustrating.
    - **Transaction-based model (like Git)**: Tracks changes and merges them later.
    - **Version-detection model**:
        - Document state is **replicated** across all users.
        - Edits are made **locally** and **synchronized** to others.
        - Used by tools like **Google Docs** and **Canva**.
- The client was comfortable with **either transaction-based** or **version-detection** models, and left the final decision to us.
- The next day, I discussed with the **Product Owner (PO)** and summarized the meeting.
- We agreed that the **version-detection model** is more **user-friendly**, and decided to use **Yjs (a CRDT library)** to implement it.
- We encountered a challenge: deciding on the **network architecture**.
- Two models were considered:
    - **Client-server model**:
        - All changes are sent to a central server.
        - Server **merges** and **saves** changes to the database, then **broadcasts** to other clients.
        - Requires the backend team to implement **complex logic** to support Yjs merge and history.
    - **Peer-to-peer (P2P) model using WebRTC**:
        - Each participant acts as **both client and server**.
        - Peers communicate **directly**, without a central server.
        - Much **easier to implement**, only requires WebSocket signaling.
- While the **client-server model is more robust long-term**, the **CEO preferred a fast delivery** for the upcoming **US conference demo**.
- I decided to **split development into phases**:
    - **Phase 1**: Use **WebRTC** for a **quick win** and deliver a working demo fast.
    - **Phase 2**: Plan future work for the backend team to **transition to a client-server model** for better robustness.
- Using **Yjs and WebRTC**, we **successfully demoed the feature within 3 weeks** of development.
- The feature played a **vital role** in convincing the user to **sign our biggest contract** with the company.
- I received **great feedback** from the client on the collaboration functionality and the overall execution.

Lead
Keep team motivated
- I was assigned the task to **rewrite all UI components** from **NativeBase (React Native)** to **MUI (Capacitor)**.
- This was a big change, with **new concepts** like **theme token**, **Tailwind**, and **styled-components**.
- Some components were **advanced and hard to rewrite**, like **FlatList**, which uses **virtualization under the hood** in React Native.
- In my company, **code review is not compulsory** — people only open PRs when they don’t feel confident.
- But during this task, I **asked everyone who made UI changes** to open a PR, **even for small things like styling a button**, so I could **make sure best practices were followed** from the start.
- The task was **very long** — **all pages and components had to be rewritten**. Set clear goals and ensure that everyone understands them. Suggest to collaborate with UIX.
- I **encouraged everyone to study Tailwind and MUI best practices**.
- I **opened a team learning session**, where **team members presented the best practices they found** to the rest of the team.
- This helped us **build shared knowledge** and gave everyone a chance to **speak up and contribute**.
- To keep the team motivated:
    - We **celebrated small wins** — finishing a tricky component, using theme tokens correctly, or improving styling patterns.
    - When someone made a good PR, I **shared it in our Teams channel** as a learning example for others.
    - This created a **positive and learning-focused environment**.
- Set up regular progress check-ins and address blockers. Update process with my manager
- We **successfully migrated** all pages and components to **MUI and Tailwind** with **consistent structure and modern design**.
- The whole team **learned new tools and concepts**, and felt more **confident and involved**.
- Our **codebase became cleaner and easier to maintain**.
- I **asked the CEO to organize a lunch** to celebrate the team’s effort and success.
- The project got **great feedback**, and it showed that **collaboration, shared learning, and small wins** can drive a large and successful change.

How to handle underperformance

- I was working on a project where one of my teammates was regularly **missing deadlines** for bug fixes.
- At first, I gave it some time, thinking it was just a one-off issue.
- But over a few sprints, the delays started to **affect the team’s progress** and morale, especially during release weeks.

---

### **🎯**

### **T – Task**

- I needed to **give feedback** to my teammate in a respectful and helpful way.
- My goal was to **understand what was going wrong** and **find a solution together** so the team could stay on track.

---

### **⚙️**

### **A – Action**

- I scheduled a **private 1-on-1 chat** instead of bringing it up in a group setting.
- I started by sharing what I valued about his work — especially his **mentorship and technical skills**.
- Then, I explained the issue with **specific examples** — a few tickets that were delayed and how they affected the sprint and team morale.
- I asked if anything was blocking him — he shared that he had taken on too many side tasks and wasn’t managing time well.
- Together, we agreed on a few steps:
    - Set clearer priorities during sprint planning
    - Add a **reminder bot** for tickets due soon
    - Do **mid-week check-ins** to catch delays early

---

### **✅**

### **R – Result**

- After the conversation, his **delivery improved** and tickets were completed on time more consistently.
- The team was able to **finish sprints more smoothly**, with fewer last-minute issues.
- Overall, the team communication got better, and he appreciated the support instead of feeling blamed.

Receive feedback
Missed deadline

text alignment feature

### **⭐**

### **S – Situation**

- Early in my role as a developer, I was working on a **new feature for a client-facing app**.
- It was my first time handling both the frontend UI and part of the backend integration.
- I underestimated the time needed for the backend part and ran into some unexpected issues with an external API.

---

### **🎯**

### **T – Task**

- My task was to **complete the feature in one sprint**, hand it off to QA, and be ready for demo day.
- But I ended up missing the deadline by **2–3 days**, which **delayed QA testing** and **pushed the release back**.

---

### **⚙️**

### **A – Action**

- After the delay, my tech lead pulled me aside for a **constructive 1-on-1**.
- He was clear but kind — he pointed out that I should’ve:
    - **Raised the risks earlier**
    - **Asked for help** instead of trying to solve everything alone
    - **Broken the work into smaller, clearer tasks**
- I listened carefully and **took full responsibility** without making excuses.
- I then asked for suggestions on how to improve for next time.

---

### **✅**

### **R – Result**

- From that point on, I started:
    - Giving **early warnings** if I was falling behind
    - Doing better **time estimates** by breaking tasks into smaller chunks
    - Asking for **feedback and support earlier**, especially when facing blockers
- In the next sprint, I was able to **deliver ahead of schedule**, and the same lead **praised my improvement** in planning and communication.

---

Conflict

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

Training

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

Failure
early day in Desygner, one of the biggest client want to migrate the document fron InDesign (document editor of Microsoft) to our SVG editor, and they want the exact same editing experience as possible as inDesign. One of the feature is Text Overflow - it is the features that link the text boxes in multiple pages and support editing and the text shift across text. I am assigned to that task. After having all requirements clarified, I evaluate our current text rendering architecture. We have 3 tasks: the project preview so user can open, drag and drop to connect text, the text performance, text overflowing logic to update text across pages when typing. Currently, we use backbone view, our new dev come is profficent in react and not backbone, i decided to ask him develop Page preview feature in separated repo in react, have all unit test and storybook setup, and mount the component to the page. The problem is the component is quite large, but we solve it by lazy load component.  Next problem, Text was very slow with rendering large amount of text, it took 800ms to render the text element which is A4 size large. It is because when anything is changed, it try to render everything from begining. I think if it needs to render text across pages, it cannot achieve with the current performance. To fix the issue, I revamped the whole architecture, minized DOM read like getBBox to avoid force reflow prolem, introduce virtual dom concept for text, a Service will compre new state to old state to make neccesary update.  Another problem is thumbnail generation is slow, for every pages, we need to fetch font family, and it is custom font family, we need to find a solution for it. Service worker come to rescue. We even improve the SVG generation time by using WebAssembly, convert SVG to PNG using web worker. Next problem is over flow logic, when I typing text, I should not render the text in next page, I find a solution to only rendering the text when it is visible to user. Partial styling shifting is most complicated problem. I write a lot of unit test for it.

After 6 months, the feature is finished. Even though still some bug, thumbnail sometiumes is blurry, some edge cases of partial styling is not cover, but the performance is expected. However, we lose the client. It does not bring the true experience, and client relize svg editor is not the tool then want to edit document. 
• Confirm what the **client truly wants**, not just the features.

Disagree and commit

### **S – Situation**

- I worked on the SVG editor where users can select a **text element** and change the **font family** using a dropdown list.
- The problem: each font in the dropdown **didn’t show a preview** using its actual font style, which made the user experience poor—users couldn’t see what the font looked like until they selected it.

---

### **T – Task**

- My task was to **improve the user experience** by showing **live font previews** in the dropdown so users could see what each font looks like before selecting it.
- Fonts were uploaded by users, and they could be **large and vary in size**, so I needed to find a solution that was **fast and efficient**.

---

### **A – Action**

- The **tech lead suggested**:
    - When the font dropdown opens and user scrolls, we fetch the font file dynamically.
    - Then, inject the font into <head> using CSS, and apply it to the dropdown item.
- I **disagreed** with this approach and raised concerns:
    - Font files can be large, and loading them just for preview might be **slow and heavy**.
    - Many fonts might never be used in the design, so it’s **wasted effort** to preload all.
- I proposed a different solution:
    - Use **WebP images** to show a preview of the font (like a thumbnail).
    - Generate the font preview images on the backend when the user uploads the font.
    - Show the preview in the dropdown using the image instead of loading the font directly.
- My goal was to:
    - Make font preview **load instantly**, even for large fonts.
    - Avoid **performance issues** during scrolling.
    - **Reduce overhead** for unused fonts.
- I built a **prototype and benchmarked it**, showing it was **10× faster** when loading a 2MB font.
- But my idea was **rejected** by Product and Engineering Managers:
    - They said it would **take too long to implement**.
    - Needed **more work from the backend team**.
    - We’d have to write a script for **backward compatibility** for already uploaded fonts.

---

### **R – Result**

- I respected the decision and **committed** to delivering the original font dropdown feature.
- But I also took extra steps:
    - Added support for **custom rendering** of dropdown items (to support thumbnails later).
    - Added a **feature flag** to toggle thumbnail preview on/off.
    - Wrote a script to generate **thumbnails for existing fonts**, ready for future use.
- **Three months later**, users reported:
    - Font dropdown was **slow when scrolling**.
    - **Delay when applying a font** to the canvas, especially large ones.
- Because I had laid the groundwork, we were able to:
    - Quickly **switch to using font thumbnails** for previews.
    - Backend could start immediately using the requirements I had already prepared.
    - The updated feature rolled out with minimal extra effort, improving performance and user satisfaction.

Give feedback
Customer

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

**You:**

“Hey [Tech Lead’s Name], quick thing I wanted to flag. I was inspecting how absurd-sql stores data in IndexedDB, and I noticed that while it stores raw binary chunks, the data itself is **not encrypted at rest**.”

**Tech Lead:**

“Yeah, that’s expected. It splits SQLite pages into binary chunks, which makes it pretty unreadable. It’s not human-friendly data anyway, so it’s fairly low-risk.”

**You:**

“Totally get that. It’s obfuscated, but not actually secure. I’m bringing this up because **our client is in the nuclear industry**, and from what I understand, they may consider **any unencrypted local storage a compliance issue**, regardless of how difficult it is to read.”

**Tech Lead:**

“Hmm, I see what you mean. But I doubt someone would go to the effort of reconstructing those blobs.”

**You:**

“Agreed, it’s unlikely — but the client may not be evaluating it from a risk probability standpoint. For them, it’s more about **demonstrating that sensitive data is encrypted at rest** across all layers, even on the browser. If someone were to audit us, we might not pass that requirement in the current setup.”

**Tech Lead:**

“That’s a fair point. So what are you suggesting?”

**You:**

“I think we should proactively address it before they raise it as a blocker. Would you be okay if I scheduled a **quick meeting with the client to clarify their expectations on encryption** for offline data? I can also start exploring options in parallel — maybe check if absurd-sql maintainers are open to encryption support or fork it ourselves if needed.”

**Tech Lead:**

“Yeah, I’m fine with that. Good idea to get ahead of it. Go ahead and book the meeting — and let me know what you find out from absurd-sql’s side.”

**You:**

“Awesome. I’ll get that scheduled and start outlining a fallback plan in case we need to build encryption into our fork.”

Bug
Success

- We’re using **Capacitor** to build a cross-platform app (iOS, Android, Web), and **Drizzle** to wrap native SQLite access for storing user data.
- The app supports **multiple user logins** and saves **multiple user profiles**.
- On **Web**, we have a function that deletes user data before showing the login page. Since it uses **IndexedDB**, it’s easy to download and delete the data.
- On **iOS and Android**, it’s different because we use **native SQLite**, which stores encrypted databases.
- To **delete a database**, the library only allows deletion **after creating a connection** – which requires the **user’s password** (used as the encryption key).
- This was a problem because at the pre-login stage, we **don’t have the user’s password**, so we couldn’t connect to delete it.
- My **first proposed solution** was to **show a modal** asking for the password when clicking delete.
- But that dragged the **PO into the loop** for feedback, and they didn’t like it. They knew the client would prefer the **simple step we already have on the web**.
- I explained the situation and made a compromise: if there’s **no other way**, I’ll go with the modal, but I wanted to explore deeper first.
- I dug into **how the DB is stored on mobile**, and found that it’s just a **file on the device**:
    - On **iOS**, I could use the **Capacitor FileSystem plugin** to delete that DB file directly.
    - But on **Android**, the FileSystem plugin only lets you delete files from certain allowed folders. The DB file isn’t in those folders.
- After searching more, I found that **Android has a native API** (context.deleteDatabase(name)) that can delete a DB **without needing the encrypted key**.
- To use that API, I needed to **write a native Android call** from JavaScript – which meant **creating a new Capacitor plugin**.
- I was short on time and knew starting a Capacitor plugin **from scratch would take too long** – and I might **miss my boss’s demo** that night.
- So I **implemented a workaround**: added a new method to an **existing Capacitor plugin** we already had.
- I wrote the **unit test**, published a **new version**, and the app was ready in time.
- I also **created a ticket** so that the next day I can **migrate the code into a new plugin** the proper way.
- In the end, I **finished the critical ticket in a day**, and my boss was able to **demo the app successfully that night**.

Process improvement
- When I first joined the project, I inherited a legacy SVG editor that was over 10 years old—a fork of svg-edit with a codebase full of OOP patterns (Factory, Facade, Backbone MVC). It was deeply coupled and hard to work with.
- Onboarding new developers was a real struggle. The code was all vanilla JavaScript, UI was tangled with business logic, there were barely any tests, and modern devs just aren’t used to that kind of environment anymore.
- At the same time, we were expected to keep shipping new features. So I knew we couldn’t just pause everything for a full rewrite—we needed a **progressive modernization** strategy.
- I took the lead on designing that path forward. First, I set up an **NX monorepo** to give us a modern workspace and allow us to develop the new system while still referencing or running the old code.
- In the short term, I mounted **new React components inside the old vanilla JS app**, so we could start improving user experience and developer velocity without a full rewrite right away.
- Then I **cloned the legacy repo into the monorepo**, stripped out all the UI, and kept just the SVG core logic.
- From there, I started **rewriting functionality in TypeScript**, moving from OOP to **functional programming**, using the old svg-edit as a guide but improving on its limitations.
- I introduced **unit tests** to make sure everything worked as expected while we gradually modernized the logic.
- I also led the rebuild of our major UI components—like the page preview, toolbar, and sidebars—completely in **React**.
- These new components were built with **theming**, **responsiveness**, and **reusability** in mind. They’re now being reused across different parts of the platform and in upcoming editor projects.
- I set up **Vite** for fast hot reload, added **Storybook** for component testing and documentation, and enforced consistent styling and patterns across the board.
- The new system is now **framework-agnostic**, **modular**, and much more **extensible**—no more tight coupling. Exporting SVG to image/video/PDF, deleting/reordering pages—these are now shared modules used inside and outside the editor.
- I documented everything clearly and ran **training sessions** to bring the team along. Devs told me they felt 2x more productive, with way fewer runtime bugs.
- Looking back, we not only upgraded the tech—we transformed the development experience and set the foundation for future editors to be built faster and better.

context hơi dài

conflict, ko cần quan tâm tech, chủ động thuyết phục setup meeting, tập trung thêm softskill, muốn thấy phải chủ động làm, chủ động setup meeting, we ⇒ I, project nói rõ ra để cho to, tình huống căng thẳng, critical, nói thêm impact và số liệu, giúp các team khác, affect toàn bộ company, làm việc với CEO, product owner, 

tough decision

- I was assigned the task of building a feature to support **PDF collaboration**.
- After several meetings with the client, I learned their **must-haves**:
    - **Live collaboration** (real-time editing with conflict management)
    - **No data loss**
    - **Offline support**
    - **Manual conflict resolution**
- I needed to choose a collaboration architecture that:
    - Met the client’s requirements
    - Delivered something **quickly** for an upcoming **US conference demo**, as requested by the CEO
    - Could **scale** and be **maintainable** in the long run
- The two main architecture options were:
    - **Client-server model**: robust and better for long-term use, but **complex to build**, especially with our current tech stack
    - **Peer-to-peer (P2P) model using WebRTC**: much **faster to implement** since it is serverless, but **less scalable, it can overhead the server by it require too much saving** and harder to manage over time
- I researched and compared both models:
    - **Client-server**: All users sync through a central server; this allows more control over document merging and version history, but it required **complex backend logic** for Yjs and high effort from our backend team.
    - **P2P/WebRTC**: Peers talk directly to each other; easier and faster to build, only requiring a **signaling server** (via WebSocket), but with trade-offs in long-term maintainability.
- I created a **sandbox environment** with a basic Node.js setup as a server to test and compare the performance of the two models.
- I also:
    - **Discussed with the backend team** to understand:
        - The effort needed to build a full client-server setup with **merge handling and document history**
        - The minimal effort to build just a **signaling server**
    - Found out that while **Yjs provides a Node.js server library**, it does **not** support **Go**, which is our current backend language — making the client-server option even more challenging for now
- I gathered all the findings and presented them to the **CEO and manager**.

---

### **🧠 The tough call I made:**

- I chose to go with **P2P/WebRTC** for **Phase 1**, to deliver a fast, working solution for the conference.
- I planned **Phase 2** to **upgrade to a client-server model** after the demo, once we had more time and backend resources.

---

- I worked with the team to implement the solution using **Yjs** for real-time editing, **WebRTC** for syncing, and a simple **WebSocket signaling server**.
- I also **documented** my findings, including the current setup and the challenges we’d face with a client-server migration in the future.

---

- We **delivered the feature in just 3 weeks**, right in time for the US conference.
- The **demo impressed the client** and played a key role in **closing the biggest contract our company had ever signed**.
- We now have a clear roadmap to gradually migrate to a more robust client-server model **without rushing**.
1. project lead
2. conflict là gì
3. tough decision
4. …
5. …
6. …

Sad but true.

In "heroic" cultures, effort gets praised, outcomes get ignored.

You end up celebrating the firefighter, not the engineer who built a fireproof system.

But real engineering excellence is quiet:

- Preventing incidents, not reacting to them
- Designing for failure before it happens
- Writing boring, stable code that just works

There’s nothing flashy about reliability.

But that’s where the best work lives: unseen, unbroken, and under control.

The best engineers don’t fight fires.

They make sure the system never burns

***I've worked as a freelance web developer while in school for almost 4 years. Having grown significant experience as an individual contributor, the next step for me is to work on larger, more complex projects as part of a bigger team to take my development skills to the next level.***

***The top 3 things about TikTok commerce for me are:***

***I like to know what my development efforts are able to tangibly drive impact. At the current stage, TikTok Shop is still at a relatively nascent stage of the product lifecycle where that is possible.TikTok Shop serves the wide masses and has to deal with associated challenges such as accessibility, localization and e-commerce in a relatively new format, which allows me to develop my skills in that area.ByteDance (TikTok's parent company) internally develops many cutting edge technologies and also uses open source technologies. I'm excited to learn from the company's experienced engineers on how to scale these technologies to a worldwide audience.***

- I like to know what my development efforts are able to tangibly drive impact. At the current stage, TikTok Shop is still at a relatively nascent stage of the product lifecycle where that is possible.
- TikTok Shop serves the wide masses and has to deal with associated challenges such as accessibility, localization and e-commerce in a relatively new format, which allows me to develop my skills in that area.
- ByteDance (TikTok's parent company) internally develops many cutting edge technologies and also uses open source technologies. I'm excited to learn from the company's experienced engineers on how to scale these technologies to a worldwide audience.

### [**Situation**](https://www.greatfrontend.com/behavioral-interview-playbook/introduction#situation)

In my current job as Front End Engineer in a startup, I was once in a situation where I had to deliver several important features for an e-commerce campaign at very short notice, since different teams were making feature requests at the time.

### [**Task**](https://www.greatfrontend.com/behavioral-interview-playbook/introduction#task)

As I recognized that it was not possible for me to achieve all of them with good quality and also in a timely manner. I had to find a way to deconflict their priorities.

### [**Action**](https://www.greatfrontend.com/behavioral-interview-playbook/introduction#action)

- What I did was to arrange a quick meeting with all relevant product and engineering stakeholders to co-prioritize and assign the appropriate resources to support this project.
- I listed the features requested from every team and worked with all the relevant stakeholders to identify each feature's contribution to business objectives, while also roughly estimating the engineering effort for each one.
- This helped us to deprioritize features that had very high engineering effort but little contribution to the objectives.
- For projects that were not realistically possible to achieve within the timelines, we were able to negotiate for more engineering resources to delegate these feature work to.
- After that, to ensure my own timelines were met, I broke down my features into smaller tasks and planned them into daily and weekly milestones, reviewing my progress regularly with the team.

### [**Result**](https://www.greatfrontend.com/behavioral-interview-playbook/introduction#result)

With this co-prioritization and planning effort, I was able to achieve all the required features by the stipulated timeline.

### [**Situation**](https://www.greatfrontend.com/behavioral-interview-playbook/problem-solving#situation)

- I was the tech lead for an e-commerce website selling luxury goods. The website was built as an Angular 1.5 single page application.
- In recent years, the product was showing its age – developer experience was not great and the website performance was poor. Initial loading speed was over 3 seconds and the conversion rate was around 0.8%.

### [**Task**](https://www.greatfrontend.com/behavioral-interview-playbook/problem-solving#task)

- I was tasked with improving the performance and conversion of the website.

### [**Action**](https://www.greatfrontend.com/behavioral-interview-playbook/problem-solving#action)

**1. Problem identification**

- Conversion is tied to performance and UX.
- Website performance has been on a gradual decline over the past few years.
- UX hasn't been looked at in a while. [Improve phrasing]

**2. Information gathering**

- Looked at nature of bugs in the past year, categorized them according to their root causes to identify hotspots and major problematic areas.
- Gathered feedback from team regarding areas of improvements.
- Brainstorming session with the team to think of ways to improve.
- In order to improve, firstly we need to know how we are doing.
    - Double checked that our performance and conversion tracking was working correctly.
    - Started tracking new metrics from Lighthouse and Core Web Vitals.
- Worked with Data Scientists to come up with dashboards for performance and conversion and gained some insights:
    - Identified that some countries had lower conversion rates.
    - Mobile users had lower conversion rates as compared to desktop.
- Worked with UX Designers and UX Researchers to identify problems in the end-to-end shopping experience on the website.
    - UI elements were too spaced apart and required a lot of scrolling which affected bounce rate because some users didn't bother scrolling.

**3. Solution brainstorming**

- **User Interface**: Server side rendering is crucial for its performance and SEO benefits. Made choices around good performance.
    - **View**: Migrating from Angular.js 1.6 to Angular 13 was a huge undertaking and there was no significant time saving by staying on Angular.
    - **Next.js**: A few of our developers have experience with React and Next.js as a meta framework for building SSR applications was rapidly rising in popularity. We really desired the fast initial load and app-like behavior that Next.js provided.
    - **Svelte**: Reactive model was appealing and the programming model easier to understand as compared to React's, however the ecosystem is small and there aren't that many libraries.
- **Styling**: The stylesheet was getting very bloated due to many classes being added over the years and being hard to remove.
    - **Tailwind CSS**: Tailwind CSS was among the hottest CSS methodologies and its atomic CSS approach scales well for growing code bases.
    - **Styled Components**: CSS-in-JS was something we were also looking at, but Styled Components was tied to React and runtime style injection was bad for performance.
- **Performance-centric mindset**. Read many performance case studies on web.dev and engineering blogs of other e-commerce companies, gathered a list of important performance techniques and processes:
    - Set performance budget for each page (under 300kb).
    - Run performance benchmarks before merging Pull Requests.
    - Lazy loading of non-critical components Lazy load below-the-fold contents.
    - Split JavaScript on page level instead of a single bundle (handled by Next.js).
    - Use WebP format for images.
    - Host images on a CDN instead Adaptive loading of images so that mobile devices load a smaller image Consolidated duplicate JavaScript libraries (data-fns and moment.js), switched to lodash-es, removed all usages of jQuery - Looked at data to identify less used features and removed them from the code, reducing JS size on the product details pages by 200+kb.
- **Search Engine Optimization (SEO)**
    - Used SEO tools like Ahrefs to continuously monitor SEO.
    - Worked with the marketing team to ensure marketing copy included important keywords as shown by Ahrefs.
    - Adjusted page URLs to include SEO keywords
- User Experience improvements
    - Single page checkout experience as opposed to two-page checkout to reduce clicking.
    - Reduced height of many UI elements.
    - Fixed checkout button that wouldn't be missed.
- Payment improvements
    - Analyzed Stripe checkout and implemented country-specific address fields.
    - Initially only had one available payment method: credit card. Got the help of Data Scientists to evaluate the popularity of new payment methods and whether they were worth adding. We later added PayPal, Google Pay, and Apple Pay payment methods as well.

**4. Solution evaluation**

- **View and Rendering**: Chose Next.js because it is backed by Vercel and has the largest community of all. React is also the most popular UI library out there and also easiest to hire jobs for.
- **Styling**: Tailwind because it's a pretty reliable and futureproof option.

**5. Monitoring and adjustment**

- Rolled out the new website behind an A/B test while monitoring the performance and conversion rates over a period of 2 months.
- Countries which previously saw lower conversion rates experienced nearly 50% improvements in conversion rates.

### [**Result**](https://www.greatfrontend.com/behavioral-interview-playbook/problem-solving#result)

- Lighthouse score has improved to 92.
- Loading speed has improved to 1.5 seconds
- Conversion has improved to 2.5%
- Developer velocity has improved in the recent survey and it is now easier to hire people into the team because more people know React over other frameworks.

### [**Handling Disagreements**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#handling-disagreements)

1. Facilitate open and productive communication between relevant parties.
2. Frame conflict as a way to enhance teamwork and improve current solutions.
3. Clarify the source of conflict (and whether there actually is conflict)
4. Give each party equal time to air out their views and concerns without judgment (assume positive intent). Set ground rules if needed to cultivate active listening and understanding. Pivot conversation away from emotions and towards solutions. Tactfully address unproductive dialogue.
5. Summarize and validate the standpoint from each party, reflecting back at them.
6. Identifying underlying sources of conflict between the standpoints.
7. Brainstorm and run through the options available to best meet common goals. (Show skill and logic in finding common ground). Use data and facts to drive resolution with others, weighing pros and cons, instead of just relying on opinions.
8. Agree on the best solution and determine each party's responsibilities. Bring in relevant parties to support resolutions.

### [**Giving Constructive Feedback**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#giving-constructive-feedback)

1. Give the feedback in private.
2. Remind them of what you already appreciate of them.
3. Describe specific behaviors that were directly observed (not inferred) and can be changed, e.g. "did not study the documentation" versus "not prepared".
4. Describe the impact of said behaviors.
5. Point it out as an opportunity for growth rather than a fault.
6. Offer solutions.

### [**Working as a Team**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#working-as-a-team)

1. Set clear goals and ensure that everyone understands them. Proactively seek alignment and perspectives.
2. Assign and communicate roles and responsibilities. Collaborate and delegate.
3. Set up regular progress check-ins and address blockers. Always include the appropriate stakeholders and share timely information with them.
4. Measure impact and recognize achievements.

### [**Working with Diverse Working Styles, Skills and Personalities**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#working-with-diverse-working-styles-skills-and-personalities)

1. Openly recognize unique perspectives and skills that each team member can bring to the table.
2. Encourage open and honest communication, and active listening.
3. Create a welcoming and supportive environment even to differences in opinions. Use them as opportunities to grow.
4. Proactively include a range of perspectives and voices in decision-making.
5. Provide equal opportunities to every team member, including access to channels, resources and support.

### [**How do you approach working with team mates who are not meeting their deadlines or responsibilities?**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#how-do-you-approach-working-with-team-mates-who-are-not-meeting-their-deadlines-or-responsibilities)

> Once it is clear that their behaviors may constitute a concerning pattern, I would let them know in a timely manner. For instance, I had a teammate on a project who had missed on bug fix timelines regularly, and once it happened a number of times, I scheduled a private meeting with him to talk to them about it. I focused on framing the conversation as a growth opportunity for him on top of what is already appreciated about them, which was his knowledge and mentorship as a senior developer. Instead of describing a general behavior such as "being late", I mentioned the specific tickets that were missed and the impact that had occurred from missing them, as well as its effect on the morale of the team. I then offered a few solutions, such as enacting a new reminder bot within the channel for tickets that were due soon. He was able to understand where I was coming from and our team was able to meet our deadlines much better after that.
> 

### [**How do you ensure that your message is understood and well-received by your audience?**](https://www.greatfrontend.com/behavioral-interview-playbook/collaboration#how-do-you-ensure-that-your-message-is-understood-and-well-received-by-your-audience)

You could answer the question with a slight modification of the sample story, focused on the explanation of the technical information:

> To ensure that my message is well understood, after explaining, I will provide a few examples to illustrate my points and also ask my audience a few questions to confirm their understanding. In a project I did a few months ago, I had to explain to the business team why and how an urgent feature had been delayed by external team API delays. To do so, I focused on the key takeaways that business needed — which was how the feature was impacted by such a delay, and utilized visual aids as well as used simple and clear language. I also gave examples while asking questions to ascertain their understanding of my explanation. This allowed the business team to understand the dependency well enough to brainstorm ways to deliver the feature even without the dependencies.
> 

### [**How do you stay up to date on the latest front end technologies and techniques?**](https://www.greatfrontend.com/behavioral-interview-playbook/growth-mindset#how-do-you-stay-up-to-date-on-the-latest-front-end-technologies-and-techniques)

> I have been working at a big tech company for the past two years now and the company uses a mix of external and internal technologies for our front end stack. Because we have a huge code base and established practice of doing things, we tend to not upgrade libraries that often and change our technology choices. It was only after a year into the job that I realized that I have been too comfortable in my role since I have fully ramped up on the code base and haven't learnt anything new for the past year. It was then that I decided that I have to be proactive in my learning in order to keep my skills sharp and relevant.The Front End ecosystem moves really fast and there's a joke that there's a new JavaScript library emerging every day. Thankfully the ecosystem is more stable compared to 2015/2016 when a new wave of front end tooling first emerged. To keep myself updated without suffering from JavaScript fatigue, I spend a weekend every month going through front end newsletters like "This Week in React" and "JavaScript Weekly" and reading engineering blogs. If I see something interesting or is relevant to my job, I will dive deeper into them by trying out small examples and building small prototypes in my company's code base. For example, I recently discovered React Query, which is a data fetching library for React that uses a declarative paradigm for fetching data and am trying to incorporate it into my work. I also recently discovered tRPC, a library that enforces type safety between client and server boundaries, which is an issue that has caused some bugs for us.To make this learning process more fun and collaborative, I started a front end social club within my company by creating a new Slack channel and inviting a few like-minded coworkers to join. Anyone can share front end news they find interesting there and discuss front end technologies. It has been pretty well-received, with over 30 people currently in the channel and activity nearly everyday. A side effect of this initiative is that people also start asking questions about front end issues they are facing at work, and we created another Slack channel for people to get help on front end issues. Feedback has been really positive so far!
> 

### [**Can you provide an example of a time when you had to adapt to a new technical environment or framework?**](https://www.greatfrontend.com/behavioral-interview-playbook/growth-mindset#can-you-provide-an-example-of-a-time-when-you-had-to-adapt-to-a-new-technical-environment-or-framework)

> When I joined my current company back in 2019, I was fresh out of college and had no experience with the front end stack that the company was using, which used React, Apollo, Styled Components, TypeScript for their front end stack and a Django + GraphQL back end. Back in college, I was mainly using Vue.js for front end development as it was the JavaScript framework of choice taught in the web development class and haven't used GraphQL before.It was definitely a huge learning curve for me at the start and I was really afraid of underperforming due to my unfamiliarity with the tech stack. Thankfully I had a mentor who gave me a lot of guidance on the tech stack and came up with a number of onboarding tasks which progressively got harder. I first spent a few days reading the documentation websites of the technologies and trying out the examples on their websites. I made it a point to understand the problems that these libraries were solving and how they were better than prior art because I think knowing that is important for fully appreciating the library and using the right tool for the right job. I also looked up some resources that compared Vue.js to React, as they were quite similar yet had some differences. That helped me to learn React faster (fully grasping React hooks still took me some time though). When I had time at nights or on weekends, I'd explore building small projects using these new technologies and also rebuild my personal blog using Gatsby (because it used both React and GraphQL).Within two months, I felt like I had learnt so much and was comfortable with most of the code base. I could build end to end features without much guidance from my mentor. To help future new employees who might face the same onboarding challenge, I jotted down my learnings in our internal wiki along with links to the best resources for learning the topic. My manager was surprised by the initiative and commended me for that. Today, it is part of our official engineering onboarding resource and I update it every once in a while. A few new joiners have also thanked me for sharing my knowledge in the wiki and making their onboarding process smoother.
> 

## System design JIRA board

### Requirements

- Drag and drop, reorder
- CRUD ticket
- Display ticket in modal
- Search/Filter
- Is it offline-first?
- Is it live update?
- HTML editor inside ticket?

### Non-functional requirements

- Performance: TTI, FCP, LCP, fetching
- Accessibility
- Security: XSS, Cross-site request forgery
- UIX, responsive
- Large amount of tickets
- CICD,  tooling, testing strategy
- Analytics

### Architecture

- **SSR**: for a fast initial load but the benefits of SSR will only be limited to performance gains because chat applications don't need to be SEO-friendly
- **CSR**:  Rendering in the browser, by dynamically adding DOM elements into the page using JavaScript. Best for interactive content.
- **Hybrid approach** which gives the best of both worlds: a fast initial load with SSR then hydrating the page to attach event listeners for user interactions.
- **Web socket** for live update
- **Client side database**: Session storage, IndexDB to persist HTML, Redux vs Zustand, Version control if save data to a persisted storage
- **Fetch data**: cursor or offset pagination, load limited tickets in first load, lazy load when scrolling, save the data in Redux, refetch wisely if it is failure
- **Progressive fetch**: Fetch preview data at first, when click the ticket, fetch detailed data

### Data model

- Draw a figure
- Board: id, name, columns[]
- Columns: id, name, tickets[]
- Ticket: id, name, priority, assignee, status - aka column, updatedAt
- Normalise the data: Keep tickets, columns as dictionary, the order is maintained by array id

### Interface (API)

```jsx
GET boards/:id
{
	id: 1,
	name: "BOARD 1",
	columns: [
		{
			id: 11,
			name: "To do",
			tickets: [],
			cursor: "asdvaf"
		}
	]
}

GET columns/:id?cursor=abc&limit=20
{
	id: 11,
	name: "To do",
	tickets: [],
	cursor: "dsgsdg"
}

GET tickets/:id
PATCH tickets/:id
PUT tickets/transition?ticketIds=[]&rankBeforeTicketId=""
```

### Optimisation

1. **Accessibility**: screen reader, contrast text, font size, font family, spacing, live region, keyboard navigation, a menu to support user drag and drop ticket, dark mode, interlisation
    - Set the **`lang`** attribute on the **`html`** tag
    - Right-to-left languages
    - Consider differences in the length of text in different languages.
    - Do not concatenate translated strings.
    - Do not put text in images.
    - Be mindful of how colours are perceived in different cultures.
2. **Security**: ensure no XSS in HTML editor, avoid using innerHTML, debounce/throttle rapid changes, yarn audit, encrypted data when storing to session storage, indexedDB
3. **Drag and drop library**: using native browser api for drag and drop (generate snapshot for image, draggable="true"), bundle size small, Framework agnostic, module and extensible plugins: indicator, hit box, auto scroll, animation, full style control, no dependency, need to work on mobile
    - [draggable](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element/about#draggable): enable dragging of an element.
    - [dropTargetForElements](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element/about#drop-target-for-elements): marking an element as a valid [drop target](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets)
    - [monitorForElements](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element/about#monitor-for-elements): create a [monitor](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/monitors) to listen for element drag operation events anywhere.
    - clean up utilities
    - `onGenerateDragPreview` - Drag is about to start. Make changes you want to see in the drag preview.
    - `onDragStart` - Something has started dragging. You can make visual changes and they *will not* be captured in the drag preview.
    - `onDropTargetChange` - The drop target hierarchy (he-ra-ki) has changed in some way.
    - `onDrag` - (*throttled*) - High fidelity updates throughout a drag with the latest details about the drag and user input.
    - `onDrop` - Drag operation completed.
4. **Smooth UIX**
    - Using css to handle layout, resize listener should use request animation frame
    - Lazy loading + virtualise (windowing) the ticket (using absolute + top position, handle complexity with scrolling, `scroll to` might be hard to implement)
    - Split bundling, caching static asset with service worker, validation strategy when release new app
    - Optimistic CRUD ticket, retry strategy, last write win
    - Skeleton loading when fetching
    - Preserve cursor, state when reload
    - Icon rendering: using image, SVG or inline SVG
    - Animation so users can feel the app is faster
5. **Open ticket in a modal**
    - Prefetch on hover
    - Keep the ticket state using URL param
    - HTML editor - pre signed URL to upload document to s3
    - Handle attachments like image, video (different versions)
    - Progressive fetching comment, metadata, …
6. **Responsiveness**
    - Mobile first UX, have a min width for the columns, have a view to scroll the column horizontally, have a good breakpoint
    - Avoid sudden change in layout
    - Adaptive design
7. **Performance**
    - Lighthouse
    - Inline critical css for above-the-fold content, write CSS in JS and using compile tool to output them as atomic CSS
        - Styles are easier to find
        - Styles are more convenient to maintain
        - No need to worry about cascading nature of style sheets
        - Tidier codebase
        - Manipulate styles in more powerful ways, such as nested rules
    - Code splitting:
        - **Split on the page level**: Each page will only load the JavaScript and CSS needed on that page.
        - **Lazy loading resources within a page**: Load non-critical resources only when needed or after the initial render, such as code that's only needed lower down on the page, or code that's used only when interacted with (e.g. modals, dialogs).
    - Preconnect + DNS prefetch:  It makes three round trips to do the DNS lookup, TLS negotiation, and TCP handshake.
    - service worker for static content
    - LCP, FCP, TTI, Prioritize visible content (Lazy load offsreen) + Avoid render blocking scripts + avoid lazy load LCP
    - GZIP compression for resources, enable API compression on large API call
8. **CICD**
    - Git strategy: PR required, protected branches, git workflow
    - CI: Tests, lint, build, yarn audit, type check on pre-commit, on PR
    - CD: write pipeline for auto deploy, tag-based deploys, add some manual approval gates if needed in pipeline for production
    - Performance, E2E test: `data-testid` , use lighthouse CI catch performance regressions, set threshold TTI < 1.5s, uni test logic, during development suggest the use of performance tab to see bottle necks,
    - Enable feature preview and feedback
    - Monitor in production: custom analytics (store in indexedDB and send via service workers in Batch) or Sentry
    - Developer experience investment: using barrel file for hot reload, consider fast dev tools like vite, vitest, biome, set up local dev environement close to produciton, config our own agent in a Mac machine to support turbo caching, and run Azure pipeline
    - Document everything
    - Mono repo vs polyrepo

---

1. **What were the core motivations behind building Atlassian’s own design system instead of extending popular solutions like MUI or Chakra UI?**
2. **When introducing breaking changes or new APIs, how do you handle backward compatibility? How does Atlassian’s design system team manage versioning and incremental adoption**
3. **What are some lessons learned from previous redesigns or major architectural shifts in the design system?**
4. **How do you architect components to ensure cross-platform consistency (e.g., mobile vs web) while avoiding code duplication?**

1.  **What’s something you’ve learned at Atlassian that you wish you’d known earlier in your career?**
2. **How do you ensure performance at scale across complex products like Jira and Confluence?**
3. **How does Atlassian approach testing in the front-end stack—what’s the balance between unit, integration, and E2E tests?**
4.  **How are front-end engineers involved in product decisions or customer feedback loops?**