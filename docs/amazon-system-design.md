# Requirements

## Functional
- CRUD
- View
- Search

Out of scope

## Non-functional
- CAP Theorem: Should your system prioritize consistency or availability?
- Environment constraints:
- Scalability: bursty traffic, scale reads or writes more**
- Latency: How quickly
- Durability: can  tolerate some data loss?
- Fault Tolerance:  redundancy, failover, and recovery mechanisms.
- Compliance
- Security: XSS, Cross-site request forgery, Authentication / Authorization, Encryption (HTTPS, database encryption)
- CI/CD, tooling, testing strategy
- Observability + Analytics: Ensure logging mechanisms to track system health and performance, keeping in mind the cost implications of log storage. Consider storing logs selectively or aggregating them.
- Real time update?
- Dealing with contention: does all data fit in a single database
=> yes: hight contention: transaction + pessimistic locking, low contention: transaction + OCC
=> no: saga pattern + phase commit
- When in doubt, start with pessimistic locking in a single database. Improve later
- Dealing with contention
- Multi-step Processes
- Scaling reads
- Scaling writes
- Handling Large Blobs
- Managing Long Running Tasks
# Core Entities
URL shortener: original URL, short URL, user
Dropbox: File, File Metadata, User
Youtube: Video, Video Metadata, User
Trading platform: User, Symbol (stock), Order
Tickets booking: Events, Users, Venue, Performers, Tickets, Bookings
New feeds: User, Follow, Post, Like, Media
Instagram: User, Follow, Post, Like, Media
Chat App: User, Chat Room, Messages, Attachment
Leetcode: Problem, Submission, Leaderboard, User
Uber: Rider, Driver, Fare, Driver Location
Web Crawler: Input URL, Output text
Ad click aggregator: Ad click data from users, Ad click metrics for advertisers.
Stripe: Merchant, PaymentIntent, Transaction
Delivery service: Item, Inventory, Distribution Centre, Order, Order Item
# Interface (API)
- GET, POST /user ...
- With each of these requests, the user information will be passed in the headers (either via session token or JWT). should avoid passing user information in the request body, as this can be easily manipulated by the client.
- 
- HTTP vs Websocket
- Why HTTP2: HTTP/2 allows multiple requests to be sent over a single connection, reducing round-trip times and speeding up how assets load. Always enable HTTP/2 on your server if possible.
  - REST API: simple, can support HTTP2, easy load balancing, cons: longer latency, connection timeouts and traffic overhead => Basic CRUD
  - GraphQL: fetch what you need, avoid overload, but longer latency if not optimized => good for complex, interrelated data structures
  - Websocket: real-time, bidirectional, single TCP connection but High server load for many concurrent clients,  can be overkill for simple operations => real time features
- Cursor or offset: Cursor-based pagination: The server returns a cursor pointing to the following item, which the client uses to fetch the next set of results. is more robust when data changes rapidly. Unlike page-based pagination (pages 1, 2, and 3), which can show duplicate or missing results if new items are added or old ones are deleted between requests, cursor-based pagination always starts from the last item received. This keeps the data consistent as the user scrolls and ensures smooth UX even as new items arrive. Cons: more complex, hard to debug as need to traverse, no page jumping
- Versioning


# Data Flow
# High Level Design
- Client: Users will interact with the system through the clients website or app. All client requests will be routed to the system's backend through an API Gateway.

- API Gateway: entry point for clients to access the different microservices of the system. Request Validation, routing, authentication, rate limiting, and logging. Horizontal Scaling: API Gateways are typically stateless, add more gateway instances behind a load balancer to distribute incoming requests.

- Load balancer:

- Services:
  - Searching: Elastic search, Database indexes
  - Redis:
    -  Distributed Lock: Traditional databases with ACID properties use transaction locks to keep data consistent, which is great for ensuring that while one user is updating a record, no one else can update it, but they're not designed for longer-term locking. Distributed locks are perfect for situations where you need to lock something across different systems or processes for a reasonable period of time. For example, if you have a Redis instance with a key ticket-123 and you want to lock it, you can set the value of ticket-123 to locked. If another process tries to set the value of ticket-123 to locked, it will fail because the value is already set to locked. Once the first process is done with the lock, it can set the value of ticket-123 to unlocked and another process can acquire the lock. E-Commerce Checkout System, Ride-Sharing Matchmaking, Distributed Cron Jobs, Online Auction Bidding System
  - Queue: (Kafka)
  Buffer for Bursty Traffic: In a ride-sharing application like Uber, queues can be used to manage sudden surges in ride requests. During peak hours or special events, ride requests can spike massively. A queue buffers these incoming requests, allowing the system to process them at a manageable rate without overloading the server or degrading the user experience.
Distribute Work Across a System: In a cloud-based photo processing service, queues can be used to distribute expensive image processing tasks. When a user uploads photos for editing or filtering, these tasks are placed in a queue. Different worker nodes then pull tasks from the queue, ensuring even distribution of workload and efficient use of computing resources.
- Streams / Event Sourcing
- Database: When it comes to choosing a database, the hard truth is that any modern database will work. Given no need for strong consistency and our data has few relationships, I'm going to opt for a flexible key value store like DynamoDB to make scaling later on easier. Postgres or MySQL would work just as well, you'd just need to pay closer attention to scaling later on.
  - DynamoDB
  - PostgreSQL

# Deep dives
- Distributed Cache: Scaling your system and lowering system latency
- CDN

- Make search fast and scalable
  - Approach
We can extend the basic indexing strategy above to utilize full-text indexes in our database, if available. For popular SQL databases like MySQL or Postgres, full text extensions are available which utilize search engines like Lucene under the covers. These make queries for specific strings like "Taylor" or "Swift" much faster than doing a full table scan using LIKE.
Challenges
Full text indexes require additional storage space and can be slower to query than standard indexes.
Full text indexes can be more difficult to maintain, as they require special handling in both queries and in maintaining the database.

Approach
Add Elasticsearch or a similar full-text search engine. Elasticsearch is a powerful search engine that excels in full-text search, complex query execution, and handling high-volume traffic efficiently. At its core, Elasticsearch operates using inverted indexes, a key feature that makes it highly efficient for search operations. Inverted indexes allow Elasticsearch to quickly locate and retrieve data by mapping each unique word to the documents or records it appears in, significantly speeding up search queries.
To make sure the data in Elasticsearch is always in sync with the data in our SQL DB, we can use change data capture (CDC) for real-time or near-real-time data synchronization from PostgreSQL to Elasticsearch. This setup captures changes in the PostgreSQL database, such as inserts, updates, and deletes, and replicates them to the Elasticsearch index.
We can enable fuzzy search functionality with Elasticsearch, which allows for error tolerance in search queries. This is way we can handle typos and slight variations in spellings such as "Taylor Swift" vs "Tayler Swift". This is something that would be very difficult to do with SQL alone.
Challenges
Keeping the Elasticsearch index synchronized with PostgreSQL can be complex and requires a reliable mechanism to ensure data consistency.
Maintaining an Elasticsearch cluster adds additional infrastructure complexity and cost.


- Make upload, download fast and scalable
- Support large files
- Optimize storage: Blob storage
- Secure
- Make ID unique: counter with Redis since it is atomic => avoid race condition => convert it to base62 encoding
- Dealing with contention
- Multi-step Processes
- Scaling reads
- Scaling writes
- Handling Large Blobs
- Managing Long Running Tasks
- concurrent requests during popular events
Caching
Prioritize caching for data with high read rates and low update frequency, such as event details (names, dates, venue information), performer bios, and static venue details like location and capacity. Because this data does not change frequently, we can cache it like crazy to heavily minimize the load of our SQL DB and meet our high availability requirements.
Cache key-value pairs like eventId:eventObject to efficiently serve frequently accessed data.
Utilize Redis or Memcached as in-memory data stores, leveraging their speed for handling large volumes of read operations. A read-through cache strategy ensures data availability, with cache misses triggering a database read and subsequent cache update.
Cache Invalidation and Consistency:
Set up database triggers to notify the caching system of data changes, such as updates in event dates or performer lineups, to invalidate relevant cache entries.
Implement a Time-to-Live policy for cache entries, ensuring periodic refreshes. These TTLs can be long for static data like venue information and short for frequently updated data like event availability.
Load Balancing
Use algorithms like Round Robin or Least Connections for even traffic distribution across server instances. Implement load balancing for all horizontally scaled services and databases. You typically don't need to show this in your design, but it's good to mention it.
Horizontal Scaling
The Event Service is stateless which allows us to horizontally scale it to meet demand. We can do this by adding more instances of the service and load balancing between them.
Challenges
One of the primary challenges is maintaining consistency between the cache and the database. This is particularly challenging with frequent updates to event details (but we don't expect this)
Managing a large number of instances presents complexities. Ensuring smooth deployment and effective rollback procedures adds to the operational challenges.