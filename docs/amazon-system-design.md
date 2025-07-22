# Table of Contents

1. [Requirements](#requirements)
    - [Functional](#functional)
    - [Non-functional](#non-functional)
2. [Core Entities](#core-entities)
3. [Interface (API)](#interface-api)
4. [Data Flow](#data-flow)
5. [High Level Design](#high-level-design)
    - [API Gateway](#api-gateway)
    - [Load Balancer](#load-balancer)
    - [Database](#database)
        - [DynamoDB](#dynamodb)
        - [PostgreSQL](#postgresql)
    - [Services](#services)
6. [Deep Dives](#deep-dives)
    - [Distributed Cache, CDN: Scaling your system and lowering system latency](#distributed-cache-cdn-scaling-your-system-and-lowering-system-latency)
    - [Make ID Unique](#make-id-unique)
    - [Make Search Fast and Scalable](#make-search-fast-and-scalable)
    - [Security](#security)
    - [Multi-step Processes](#multi-step-processes)
    - [Dealing with Contention](#dealing-with-contention)
    - [Scaling Reads](#scaling-reads)
    - [Scaling Writes](#scaling-writes)
    - [Handling Large Blobs](#handling-large-blobs)
    - [Managing Long Running Tasks](#managing-long-running-tasks)
    - [Concurrent Requests During Popular Events](#concurrent-requests-during-popular-events)
    - [Real-time Updates](#real-time-updates)
    - [Monitoring](#monitoring)

# Requirements
## Functional
- CRUD
- View
- Search, filter

## Non-functional
- CAP Theorem: Consistency or availability?
- Environment constraints:
- Scalability: peak traffic, scale reads or writes more
- Latency: How quickly
- Durability: can  tolerate some data loss?
- Fault Tolerance:  redundancy, failover, and recovery mechanisms.
- Security: XSS, Cross-site request forgery, Authentication / Authorization, Encryption (HTTPS, database encryption)
- CI/CD, tooling, testing strategy
- Observability + Analytics: Ensure logging mechanisms to track system health and performance, keeping in mind the cost implications of log storage. Consider storing logs selectively or aggregating them.
- Real time update?
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
- HTTP vs Websocket
- Why HTTP2: HTTP/2 allows multiple requests to be sent over a single connection, reducing round-trip times and speeding up how assets load. Always enable HTTP/2 on your server if possible.
  - REST API: simple, can support HTTP2, easy load balancing, cons: longer latency, connection timeouts and traffic overhead => Basic CRUD
  - GraphQL: fetch what you need, avoid overload, but longer latency if not optimized => good for complex, interrelated data structures
  - Websocket: real-time, bidirectional, single TCP connection but High server load for many concurrent clients,  can be overkill for simple operations => real time features
- Cursor or offset: Cursor-based pagination: The server returns a cursor pointing to the following item, which the client uses to fetch the next set of results. is more robust when data changes rapidly. Unlike offset-based pagination (pages 1, 2, and 3), which can show duplicate or missing results if new items are added or old ones are deleted between requests, cursor-based pagination always starts from the last item received. This keeps the data consistent as the user scrolls and ensures smooth UX even as new items arrive. Cons: more complex, hard to debug as need to traverse, no page jumping
- Versioning

# Data Flow
Draw: Client, (Api Gateway & Load balancer: routing, authentication, rate limiting), Server, Counter, Database, Distributed Cache(Redis), Change Data Capture (CDC), S3, CDN, Distributed Lock, Queue, Elastic Search (CDC), Worker

# High Level Design
- Client: Users will interact with the system through the clients website or app. All client requests will be routed to the system's backend through an API Gateway.

## API Gateway: 
- Entry point for clients to access the different microservices of the system. Request Validation, routing, authentication, rate limiting, and logging. Horizontal Scaling: API Gateways are typically stateless, add more gateway instances behind a load balancer to distribute incoming requests.

## Load balancer: 
- Distribute incoming traffic across multiple application servers to prevent overloading and ensure even distribution. Balances the load among different application server instances to maintain responsiveness.
- By having the API gateway and load balancer, we can scale up our service with more traffic by adding additional hosts. Since each host is stateless as it's only writing to the database (and we're not dealing with reads yet), this is really easy to scale by just adding more hosts

## Database
- When it comes to choosing a database, the hard truth is that any modern database will work. Given no need for strong consistency and our data has few relationships, I'm going to opt for a flexible key value store like DynamoDB to make scaling later on easier. Postgres or MySQL would work just as well, you'd just need to pay closer attention to scaling later on.

### DynamoDB
- Scalability: NoSQL databases scale horizontally by using consistent hashing and/or sharding to distribute data across many servers.
  
### PostgreSQL 
- SQL Joins, Indexes, Transaction
- Provides strong ACID guarantees while still scaling effectively with replication and partitioning
- Handles both structured and unstructured data through JSONB support (JSONB column giving us the flexibility to add new attributes as needed just like we would in a NoSQL database)
- Includes built-in solutions for common needs like full-text search and geospatial queries. lets us index location data for efficient geospatial queries. This is perfect for our social media platform when we want to show users posts from their local area
- Can scale reads effectively through replication
- Offers excellent tooling and a mature ecosystem

## Services:
- Elastic search: Inverted indexes are a data structure that maps from words to the documents that contain them.
- Database indexes: B-trees are everywhere in modern databases. PostgreSQL uses them for almost everything - primary keys, unique constraints, and most regular indexes are all B-trees. PostgreSQL automatically creates two B-tree indexes: one for the primary key and one for the unique email constraint. These B-trees maintain sorted order, which is crucial for both uniqueness checks and range queries. Add indexes to the columns you frequently query, join on, or sort by. But "too many indexes" slowing down writes.
- Redis:
  -  Distributed Lock: Traditional databases with ACID properties use transaction locks to keep data consistent, which is great for ensuring that while one user is updating a record, no one else can update it, but they're not designed for longer-term locking. Distributed locks are perfect for situations where you need to lock something across different systems or processes for a reasonable period of time. For example, if you have a Redis instance with a key ticket-123 and you want to lock it, you can set the value of ticket-123 to locked. If another process tries to set the value of ticket-123 to locked, it will fail because the value is already set to locked. Once the first process is done with the lock, it can set the value of ticket-123 to unlocked and another process can acquire the lock. E-Commerce Checkout System, Ride-Sharing Matchmaking, Distributed Cron Jobs, Online Auction Bidding System
- Queue: (Kafka) Buffer for Bursty Traffic: In a ride-sharing application like Uber, queues can be used to manage sudden surges in ride requests. During peak hours or special events, ride requests can spike massively. A queue buffers these incoming requests, allowing the system to process them at a manageable rate without overloading the server or degrading the user experience.
- Distribute Workers Across a System: In a cloud-based photo processing service, queues can be used to distribute expensive image processing tasks. When a user uploads photos for editing or filtering, these tasks are placed in a queue. Different worker nodes then pull tasks from the queue, ensuring even distribution of workload and efficient use of computing resources.
- Streams / Event Sourcing: Event sourcing is a technique where changes in application state are stored as a sequence of events. These events can be replayed to reconstruct the application's state at any point in time, making it an effective strategy for systems that require a detailed audit trail or the ability to reverse or replay transactions.


# Deep dives
- Distributed Cache, CDN: Scaling your system and lowering system latency
## Make ID unique
-Counter with Redis since it is atomic => avoid race condition => convert it to base62 encoding

## Make search fast and scalable
- We can extend the basic indexing strategy above to utilize full-text indexes in our database, if available. For popular SQL databases like MySQL or Postgres, full text extensions are available which utilize search engines like Lucene under the covers. These make queries for specific strings like "Taylor" or "Swift" much faster than doing a full table scan using LIKE.
- Challenges
  - Full text indexes require additional storage space and can be slower to query than standard indexes.
  - Full text indexes can be more difficult to maintain, as they require special handling in both queries and in maintaining the database.
- Add Elasticsearch or a similar full-text search engine. Elasticsearch is a powerful search engine that excels in full-text search, complex query execution, and handling high-volume traffic efficiently. At its core, Elasticsearch operates using inverted indexes, a key feature that makes it highly efficient for search operations. Inverted indexes allow Elasticsearch to quickly locate and retrieve data by mapping each unique word to the documents or records it appears in, significantly speeding up search queries.
- To make sure the data in Elasticsearch is always in sync with the data in our SQL DB, we can use change data capture (CDC) for real-time or near-real-time data synchronization from PostgreSQL to Elasticsearch. This setup captures changes in the PostgreSQL database, such as inserts, updates, and deletes, and replicates them to the Elasticsearch index.
- We can enable fuzzy search functionality with Elasticsearch, which allows for error tolerance in search queries. This is way we can handle typos and slight variations in spellings such as "Taylor Swift" vs "Tayler Swift". This is something that would be very difficult to do with SQL alone.
- Challenges
  - Keeping the Elasticsearch index synchronized with PostgreSQL can be complex and requires a reliable mechanism to ensure data consistency.
  - Maintaining an Elasticsearch cluster adds additional infrastructure complexity and cost.

## Security
- Basic Approach: Static API Keys
  - Merchant gets a unique API key on signup.
  - Sent in headers with each request: Authorization: Bearer {api_key}.
  - Backend checks the key and authenticates the merchant.
  - Vulnerable to leaks (in code, repos, backups).
  - No protection from replay attacks.
- Improved Approach: Request Signing:
  - The merchant’s frontend (web or mobile) loads a secure JavaScript SDK from the payment system (e.g., Stripe or your custom payment service).
  - This SDK injects a secure iframe into the page — the customer sees a form for entering their card info.
  - The iframe is hosted on the payment provider’s domain, not the merchant’s.
  - The card details go directly into this iframe.
  - Merchant’s code cannot read or access the data inside the iframe because of browser same-origin policy.
  - Inside the iframe, the payment SDK encrypts the card data using the payment system’s public key — before it even leaves the browser.
  - Now the data is double protected:
    - Encrypted with public key.
    - Sent over HTTPS (so it’s secure in transit).
  - The encrypted card data is sent directly to the payment provider.
  - The merchant never sees the raw card details.
  - The payment system responds with a payment token or PaymentIntent ID — a safe reference to the actual card info.
  - Now the merchant frontend sends a request to its own backend server with:
    - The token (or PaymentIntent ID)
    - Other order info (amount, user ID, item, etc.)
  - The merchant backend prepares a request to the payment system to complete the charge.
  - 	It:
•	Adds timestamp + nonce.
•	Signs the request body with its secret key using HMAC-SHA256.
•	Adds all this in headers.
•	The payment system:
•	Uses the public API key to find the merchant’s secret key.
•	Reconstructs the request signature and compares it.
•	Checks timestamp + nonce to prevent replay.
•	If valid: ✅ charges the card using the previously encrypted card data.
•	If anything’s off: ❌ rejects the request.

## Multi-step Processes
- Real systems often involve many steps across many services. Failures can happen at any point: network issues, server crashes, human delays. You need retries, state tracking, compensation, and resilience. Manual orchestration gets messy and fragile very quickly.
  - Single Server Orchestration:
    - One server runs all steps in order.
    - Easy but fails badly if server crashes.
    - Adding pub/sub + DB for state helps but quickly becomes a tangled mess.
  - Event Sourcing:
    - Instead of storing state, store all events in an event log. Each worker processes events and emits new ones.Fault tolerance: If a worker crashes, another picks up the event
    - Scalability: Add more workers to handle higher load
    - Observability: Complete audit trail of all events
    - Flexibility: Possible to add new steps or modify workflows
    - Downsides: complex infra and debugging.
  - Workflow Systems: if step X fails, we need to undo step Y, we need to ensure all steps complete or none do
    - It is purpose-built tools to reliably manage long-running processes.
    - Durable Execution Engines (e.g. Temporal): write workflows in code.
    - Managed Workflow Systems (e.g. AWS Step Functions): define workflows as JSON state machines
    - How will you handle updates to the workflow?
      - workflow versioning, we simply create a new version of the workflow code and deploy it separately. Old workflows will continue to run with the old version of the code, and new workflows will run with the new version of the code.
      - Workflow migrations are a more complex approach that allows you to update the workflow in place. This is useful if you need to add a new step to the workflow, but you don't want to break existing workflows.
      - How can we ensure X step runs exactly once?  that the activity can be called multiple times with the same inputs and get the same result. Storing off a key to a database (e.g. the idempotency key of the email) and then checking if it exists before performing the irreversible action is a common pattern to accomplish this.

## Dealing with contention
  - Multiple processes compete for the same resource simultaneously
  - Single Node Solutions:
    - Atomic Transactions: All operations succeed or fail together
    - Pessimistic Locking: Lock rows using SELECT ... FOR UPDATE. The FOR UPDATE clause acquires an exclusive lock on the concert row before reading. When Alice runs this code, Bob's identical transaction will block at the SELECT statement until Alice's transaction completes. This prevents both from seeing the same initial seat count and ensures only one person can check and update at a time. Others wait until the lock is released. Hurt Performance
    - Isolation Levels: Set transaction level to SERIALIZABLE for automatic conflict detection. Expensive but strong consistency.
    - Optimistic Concurrency Control: assumes conflicts are rare and detects them after they occur. If the value changed, retry. When Bob's update fails, he knows someone else modified the record. He can re-read the current state, check if seats are still available, and retry with the new version number. If seats are gone, he gets a clear "sold out" message instead of a mysterious failure. Best for low contention and performance.
  - Multiple Node Solutions: Consider a bank transfer where Alice and Bob have accounts in different databases.
    - Two Phase commit: The server asks all DB to prepare the transaction in the first phase, then tells them to commit or abort in the second phase based on whether everyone successfully prepared. Two-phase commit guarantees atomicity across multiple systems, but it's expensive and fragile. If your service crashes between prepare and commit, both databases are left with open transactions in an uncertain state. If any database is slow or unavailable, the entire transfer blocks. Network partitions can leave the system in an inconsistent state.
    - Distributed Locks: only one process can work on a particular resource at a time across your entire system. Redis with TTL - Redis provides atomic operations with automatic expiration. Prevents simultaneous actions. Use for temporary holds like seat reservations.
    - Saga Pattern: Breaks process into steps with compensating actions. Allows rollback if later steps fail. During saga execution, the system is temporarily inconsistent. Good for eventual consistency. might show transfers as "pending" until all steps complete.

## Scaling reads
  - Hardware Upgrades: more RAM, more CPU
  - Index the database: B-tree, Hash indexes. Add indexes to the columns you frequently query, join on, or sort by. But "too many indexes" slowing down writes.
  - Denormalization: duplicated data but reduce query
  - Scale Your Database Horizontally
    - Read Replicas: copy data from your primary database to additional servers. Synchronous replication ensures data consistency but introduces latency. Asynchronous replication is faster but introduces potential data inconsistencies. Don't reduce the dataset size
    - Database Sharding: smaller datasets mean faster individual queries, and you can distribute read load across multiple databases.sharding adds significant operational complexity and is primarily a write scaling technique. For most read scaling problems, adding caching layers is more effective and easier to implement.
  - Caching:
    - Redis: TTL, tagged invalidation, versioned keys, ...
    - CDN: CDNs only make sense for data accessed by multiple users. Don't cache user-specific data like personal preferences, private messages, or account settings.
  - How do you handle millions of concurrent reads for the same cached data: combining multiple requests for the same key into a single request or add random number to key

## Scaling writes
  - Vertical Scaling: improve hardware
  - Database Choices: Cassandra for write-heavy database, but it is not great for read
    - Disable expensive features like foreign key constraints, complex triggers, or full-text search indexing during high-write periods
    - batch multiple transactions before flushing to disk
    - Reduce index overhead
  - Horizontal Sharding
    - Horizontal sharding means splitting data into smaller parts and storing them on different servers, so each server handles only some of the data—like how Redis Cluster uses key hashing to decide where to store each item.
    - Selecting a Good Partitioning Key
      - Consistent hashing is a way to evenly distribute data across servers so that when servers are added or removed, only a small amount of data needs to move.
  - Vertical Partitioning: normalization
  - Handling Burst Write:
    - Queue: Your database processes writes at a steady rate while the queue handles bursts. Use queues when you expect to have bursts that are short-lived.
    - Load Shedding Strategies: drop less important writes
    - Batching: batch multiple writes together
  - How do you handle resharding when you need to add more shards?: The dual-write phase ensures no data is lost during migration. You write to both old and new shards, but read with preference for the new shard.

## Handling Large Blobs
  - When a client wants to upload a file, instead of receiving the entire file, your server just receives a request for upload permission. You validate the user, check quotas, then generate a temporary upload URL. This URL encodes permission to upload one specific file to one specific location for a limited time - typically 15 minutes to 1 hour. This is called a presigned URL. Use presigned URL to upload directly to Blob Storage
  - Download: through CDN or blob storage
  - Resumable Uploads for Large Files: chunked upload APIs. AWS S3 uses multipart uploads where each 5MB+ part gets its own presigned URL. Client queries the storage API to see which parts already uploaded successfully.Finally, after all parts upload, the client must call a completion endpoint with the list of part numbers and their checksums. The storage service then assembles these parts into the final object. Until this completion succeeds, you have parts in storage but no accessible file. Incomplete multipart uploads cost money, so lifecycle rules should clean them up after 24-48 hours.
  - State Synchronization Challenges ('pending', 'uploading', 'completed', 'failed'), event notifications from s3
- Managing Long Running Tasks
  - When users submit heavy tasks (like video encoding), the web server instantly validates the request, pushes a job to a queue (Redis/RabbitMQ), and returns a job ID, all within milliseconds. Meanwhile, separate worker processes continuously poll the queue, grab pending jobs, execute the actual time-consuming work, and update the job status in a database: client, server, message queue, workers, database. The moment you hear "video transcoding", "image processing", "PDF generation", "sending bulk emails", or "data exports" that's your cue.
    - Fast user response times - API calls return in milliseconds instead of timing out after 30 seconds. Users get immediate acknowledgment that their request was received.
    Independent scaling - Web servers and workers scale separately. Add more workers during peak processing times without paying for idle web servers.
    Fault isolation - A worker crash processing one video doesn't bring down your entire API. Failed jobs can be retried without affecting user-facing services.
    Better resource utilization - CPU-intensive workers run on compute-optimized instances. Memory-heavy tasks get high-memory machines. Web servers use cheap, general-purpose instances.

    System complexity - You now have queues, workers, and job status tracking to manage. More moving parts means more things that can break.
    Eventual consistency - The work isn't done when the API returns. Users might see stale data until background processing completes.
    Job status tracking - You need infrastructure to store job states, handle retries, and expose status endpoints. This adds database load and API complexity.
    Monitoring overhead - Queue depth, worker health, job failure rates, processing latency - you're monitoring a distributed system instead of simple request/response cycles.

## Concurrent requests during popular events
- Caching
  - Prioritize caching for data with high read rates and low update frequency, such as event details (names, dates, venue information), performer bios, and static venue details like location and capacity. Because this data does not change frequently, we can cache it like crazy to heavily minimize the load of our SQL DB and meet our high availability requirements.
  - Cache key-value pairs like eventId:eventObject to efficiently serve frequently accessed data.
  - Utilize Redis or Memcached as in-memory data stores, leveraging their speed for handling large volumes of read operations. A read-through cache strategy ensures data availability, with cache misses triggering a database read and subsequent cache update.
- Cache Invalidation and Consistency:
  - Set up database triggers to notify the caching system of data changes, such as updates in event dates or performer lineups, to invalidate relevant cache entries.
  - Implement a Time-to-Live policy for cache entries, ensuring periodic refreshes. These TTLs can be long for static data like venue information and short for frequently updated data like event availability.
- Load Balancing
  - Use algorithms like Round Robin or Least Connections for even traffic distribution across server instances. Implement load balancing for all horizontally scaled services and databases. Y
- Horizontal Scaling
  - The Event Service is stateless which allows us to horizontally scale it to meet demand. We can do this by adding more instances of the service and load balancing between them.
- Challenges
  - One of the primary challenges is maintaining consistency between the cache and the database. This is particularly challenging with frequent updates to event details (but we don't expect this)
  Managing a large number of instances presents complexities. Ensuring smooth deployment and effective rollback procedures adds to the operational challenges.

## Real-time updates:
- Simple Polling: regularly poll the server for updates. Pros: simple, stateless. Cons: Higher latency, Limited update frequency, more bandwidth usage, network over head
- Server-Sent Events: Client establishes SSE connection, server sends updates (one way street)
- Websocket: real-time, bidirectional, single TCP connection but High server load for many concurrent clients,  can be overkill for simple operations => real time features
- Peer to peer: Clients talk to a central "signaling server" which keeps track of which peers are available together with their connection information. Once a client has the connection information for another peer, they can try to establish a direct connection without going through any intermediary servers.
- Pub/sub: The client establishes a connection with an endpoint server.
  - The endpoint server registers the client with the Pub/Sub service, often by creating a topic, subscribing to it, and keeping a mapping from topics to the connections associated with them. On the update broadcasting side, the following happens:
  - Updates are pushed to the Pub/Sub service to the relevant topic.
  - The Pub/Sub service broadcasts the update to all clients subscribed to that topic.
  - The endpoint server receives the update, looks up which client is subscribed to that topic, and forwards the update to that client over the existing connection.

## Monitoring
  - Infrastructure Monitoring: CPU usage, Memory usage, Disk space, Network bandwidth. Purpose: Early warnings before things break
  - Service-Level Monitoring: Focus: APIs and services. Request latency. Error rates. Throughput (requests per second). See if your services are slow or failing.
  - Application-Level Monitoring: User and business metrics. Google Analytics. Understand product behavior and user impact