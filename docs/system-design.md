1. Requirements (5 mins)
- Functional
- Does it support offline?
- Does it support live update?
- Doest it require SEO?
- Is there any authentication required?

- Non-functional
- Demographics (internationalization) and Accessibility: Semantic HTML + ARIA attribute + screen reader + shortcut
- Performance: TTI, FCP, LCP, fetching
- Security: XSS, Cross-site request forgery
- UIX, responsive
- Scalability:  should be optimized for performance, ensuring it remains efficient and responsive even as the data size or the number of users grows
- CI/CD, tooling, testing strategy
- Observability + Analytics: Ensure logging mechanisms to track system health and performance, keeping in mind the cost implications of log storage. Consider storing logs selectively or aggregating them.

2. Architecture
    - SSR vs CSR
    - **SSR**: for a fast initial load but the benefits of SSR will only be limited to performance gains because chat applications don't need to be SEO-friendly
    - **CSR**:  Rendering in the browser, by dynamically adding DOM elements into the page using JavaScript. Best for interactive content.
    - **Hybrid approach** which gives the best of both worlds: a fast initial load with SSR then hydrating the page to attach event listeners for user interactions.
    - Diagram MVC
      - Model: Represents the data layer of the application. It communicates with the database and updates the view whenever the data changes.
      - View: Represents the user interface and the presentation of the data. It displays the data from the model to the user and sends the user commands to the controller.
      - Controller: Interacts with both the model and the view. It takes the user input from the view, processes it (with possible updates to the model), and returns the output display.
    - Components: composable and reusable UI components that can adapt across products. Atomic components, Presentation-Container
    - List some sample flows: lazy load, progressive fetch, pagination
3. Data model
    - State management: Redux, Zustand, React Context
      - Redux: high boilerplate, lot of setups, requires external library, require custom memoization, mature and huge community support. One project, does not require re-setup
      - Zustand, react-sweet-state: Minimalistic and flexible state management, simple API, good performance for medium-sized apps but built with React Context and Hooks for better performance and debugging. State logic is co-located with component logic (feels like useState, but global).  Supports partial state subscriptions to avoid unnecessary renders. 
      -  avoid Redux to reduce boilerplate, opting instead for something more hook-centric and efficient for their scale.
    - Data to be persisted
      - localstorage: Simple, persists after refresh, Accessible from any tab, small size limit. Should use when we open new tab, the data shared across tab
      - sessionStorage: Ends with tab/window session, Isolated to the tab that set it. Should use when only we want to persist the state after refresh, clear when open new tab
      - IndexedDB: large, async, support a lot of data type, best use for offline support, store documents, image assets
    - Client data model
    - Data normalization: Whenever possible, aim for a normalized data structure on the client. Normalization means storing each entity type separately by ID rather than nesting full objects within other objects. This approach avoids data duplication, keeps your state consistent, and simplifies updates.
4. Interface (API)
    - HTTP vs Websocket
    - Why HTTP2: HTTP/2 allows multiple requests to be sent over a single connection, reducing round-trip times and speeding up how assets load. Always enable HTTP/2 on your server if possible.
      - REST API: simple, can support HTTP2, easy load balancing, cons: longer latency, connection timeouts and traffic overhead => Basic CRUD
      - GraphQL: fetch what you need, avoid overload, but longer latency if not optimized => good for complex, interrelated data structures
      - Websocket: real-time, bidirectional, single TCP connection but High server load for many concurrent clients,  can be overkill for simple operations => real time features
    - Cursor or offset: Cursor-based pagination: The server returns a cursor pointing to the following item, which the client uses to fetch the next set of results. is more robust when data changes rapidly. Unlike page-based pagination (pages 1, 2, and 3), which can show duplicate or missing results if new items are added or old ones are deleted between requests, cursor-based pagination always starts from the last item received. This keeps the data consistent as the user scrolls and ensures smooth UX even as new items arrive. Cons: more complex, hard to debug as need to traverse, no page jumping
    - Versioning
5. Optimization
- Network:
- Images: Pull specific image sizes based on the viewport using web-compressed formats like WebP, when available; otherwise, use PNG.
- Compression: Utilize GZIP or Brotli for text compression to minimize the payload size sent over the network.
- Rendering Optimizations
- Infinite scrolling + lazy load items as they enter the viewport, reducing initial load times.
- Virtualization: is beneficial for performance when dealing with long lists.
- Hybrid Rendering: Utilize a combination of Server-Side Rendering (SSR) for the initial load and Client-Side Rendering (CSR) for dynamic interactions, capitalizing on the strengths of both rendering methods

- JavaScript Optimizations
- Always compress your assets, whether you’re shipping JS, CSS, images, or data. Smaller files mean faster delivery and a snappier user experience.
- Dynamic Imports: Import only what you need and use lazy loading for non-critical features such as modals.
- Code Splitting: Implement bundle splitting to separate critical resources and defer non-critical ones, which can reduce the initial load time.
- Inline critical css for above-the-fold content, write CSS in JS and using compile tool to output them as atomic CSS
    - Styles are easier to find
    - Styles are more convenient to maintain
    - No need to worry about cascading nature of style sheets
    - Tidier codebase
    - Manipulate styles in more powerful ways, such as nested rules
- Batch Requests: When possible, group similar network requests into a single batch. This reduces the number of round trips and makes better use of available bandwidth.
- Caching: service worker for static content + tanstack query
- Resilience in slow networks: skeletons, retries, optimistic UI. Cover state transitions and UI edge cases: error → retry → loading again, race conditions.
- Preconnect + DNS prefetch
- memoization strategies, useMemo,useCallback, React.memo, and avoiding unnecessary renders.

- Security Considerations
- Data Validation: Rigorously validate all data on the server side to prevent SQL injection and other forms of attacks.
- API Security: Protect APIs with rate limiting, debounce/throttle rapid changes and access controls to prevent abuse. 
- HTTPS: Employ HTTPS to encrypt data in transit and prevent man-in-the-middle attacks.
- Cross-Site Scripting (XSS) Protection: Sanitize user input to prevent the execution of malicious scripts. Most modern frameworks provide built-in XSS protection.
- Configure CORS policies to control which cross-origin requests are permitted, preventing unwanted web pages from pulling resources or making API requests.
- Regular Audits: Conduct regular security audits and update dependencies to patch known vulnerabilities.

- Accessibility Considerations
- Semantic HTML: Use semantic HTML tags to provide meaningful structure and help screen readers interpret the content.
- Aria Attributes: Apply ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility, especially in dynamic content and complex user interfaces.
- Keyboard Navigation: Ensure all interactive elements are operable with keyboard-only controls.
- Maintain high contrast ratios for text and interactive elements to support users with visual impairments.
- Font size with REM, font family, spacing
- Alt Text for Images: Provide descriptive alt text for images, so screen readers can convey the information they contain.
- Responsive Design: Ensure the application is usable on a range of devices and screen sizes.
- Error Handling: Design clear error messages and provide suggestions for resolution to assist users when they encounter input errors.
- Testing: Perform accessibility testing with real users, including those who rely on assistive technologies.
- Internationalization
    - Set the **`lang`** attribute on the **`html`** tag
    - Right-to-left languages
    - Consider differences in the length of text in different languages.
    - Do not concatenate translated strings.
    - Do not put text in images.
    - Be mindful of how colours are perceived in different cultures.

- CI/CD
- Git strategy: PR required, protected branches, git workflow
- CI: Tests, lint, build, yarn audit, type check on pre-commit, on PR
- CD: write pipeline for auto deploy, tag-based deploys, add some manual approval gates if needed in pipeline for production
- Performance, E2E test: `data-testid` , use lighthouse CI catch performance regressions, set threshold TTI < 1.5s, unit test logic, during development suggest the use of performance tab to see bottle necks,
- Enable feature preview and feedback
- Monitor in production: custom analytics (store in indexedDB and send via service workers in Batch) or Sentry
- Developer experience investment: using barrel file for hot reload, consider fast dev tools like vite, vitest, biome, set up local dev environment close to production, config our own agent in a Mac machine to support turbo caching, and run Azure pipeline
- Document everything
- Mono repo vs polyrepo
- 
- 
- 
get REALLY specific with performance optimiztions - talk about code splitting, lazy loading, memoization strategies, virtual lists for large datasets

their products are component-heavy so emphasize composable architecture that can scale across multiple products

accessibility is huge for them - talk about your approach to a11y

their products need to work globally with diff network conditions - emphasize resilience

testing strategies (unit, integration, e2e) - they care about maintainability

I've seen them ask specifically about state transitions and edge cases

sounds like last time u covered the standard bases but didnt go deep enough into the specifics that make Atlassian unique. they want to see that youve thought about the specific challenges their products face.

good idea to do a mock with someone who knows their process well or has worked there before. those specific insights make all the difference.

https://www.atlassian.com/blog/atlassian-engineering/rendering-like-butter-a-confluence-whiteboards-story
we chose an architecture which affords us choice, not one which locks us in.

3rd party
in progress, chuyen giua
chart trong dash 
state machine programming pattern
https://relay.dev/
https://relay.dev/docs/tutorial/fragments-1/

Component driven method + 
microservice architecture

ci cd, b

Design a service like pastebin
dealing with difficult customer, unanticiapted obstacle
Can you talk to me on your biggest contribution in a project ?
I was asked LFU cache problem. (leetcode hard).
Tell me about a time you disagreed with a team member in your group and how did you overcome this issue?
What is your greatest weakness
Asked to find the closest numbers between two lists
design a media player for a mobile device

describe a time multiple responsibilities were given to you and how did you manage them
Loop1: LP questions plus leetocode style question Loop2: LP questions plus LLD question(OOP design question) - (25minutes Lps + 15 minutes OOP design question) -Very advantageous if you use proper OOP, design patterns, solid principles and Abstraction to write the best Logical and Maintananable code) Loop3: LP questions plus System design question(HLD round) -(Lps 25 minutes + 30 minutes System design on the bluescape platform) Loop4: LP questions plus leetocode style question (Lps 30 minutes + DSA theory 5minutes + coding part 20 minutes) Loop5: Baraiser round (LPs only for 55 minutes plus 5 minutes for me to ask questions at the end)