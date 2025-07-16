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

# Architecture
- Core Entities:
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
# Data model
# Interface (API)
- HTTP vs Websocket
- Why HTTP2: HTTP/2 allows multiple requests to be sent over a single connection, reducing round-trip times and speeding up how assets load. Always enable HTTP/2 on your server if possible.
  - REST API: simple, can support HTTP2, easy load balancing, cons: longer latency, connection timeouts and traffic overhead => Basic CRUD
  - GraphQL: fetch what you need, avoid overload, but longer latency if not optimized => good for complex, interrelated data structures
  - Websocket: real-time, bidirectional, single TCP connection but High server load for many concurrent clients,  can be overkill for simple operations => real time features
- Cursor or offset: Cursor-based pagination: The server returns a cursor pointing to the following item, which the client uses to fetch the next set of results. is more robust when data changes rapidly. Unlike page-based pagination (pages 1, 2, and 3), which can show duplicate or missing results if new items are added or old ones are deleted between requests, cursor-based pagination always starts from the last item received. This keeps the data consistent as the user scrolls and ensures smooth UX even as new items arrive. Cons: more complex, hard to debug as need to traverse, no page jumping
- Versioning
# Optimization