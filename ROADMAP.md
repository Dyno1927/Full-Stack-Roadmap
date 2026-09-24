# Full-Stack Engineering Roadmap

My personal learning plan. Sequenced 2026-08-01, adapted from
roadmap.sh/full-stack. Goal: build genuine independent understanding, not
AI-assisted output — see mentor rules in Claude's memory for how review
sessions on this material should run.

Each stage should produce at least one real, working project before moving
on. Projects get progressively larger and more production-like.

## 1. Foundation
- HTML, CSS (already fluent) — build a static site using roadmap.sh's
  project ideas as a starting reference
- Accessibility (WCAG basics), responsive design
- npm ecosystem / package management (brief refresher)
- Git & GitHub in depth: branching, drafting PRs, CI/CD assignment review,
  AI-assisted review + self-review integration, GitHub Actions, version
  control practices

## 2. Frontend
- JavaScript (deep), TypeScript
- React, TSX, state management, routing, forms
- Frontend performance optimization

## 3. Backend
- Node.js, CLI apps
- Express/Fastify, REST API design, OpenAPI/Swagger
- Auth: JWT, sessions, cookies, authorization
- Rate limiting, API versioning, pagination

## 4. Databases
- SQL fundamentals, PostgreSQL, MongoDB, Redis, TimescaleDB
- Query optimization, indexing, transactions, replication, backups

## 5. Testing
- Unit / integration / e2e testing, TDD (understand, not dogma)
- API testing, mocking, coverage

## 6. Software Engineering
- SOLID, design patterns, Clean Architecture, refactoring, DI
- Modular design, documentation, ADRs, technical writing

## 7. Linux & DevOps
- Arch Linux properly, bash/shell scripting, terminal mastery
- Processes, signals, permissions
- Networking: DNS, HTTP/HTTPS, TLS, SSH, Nginx/reverse proxies
- Docker, Docker Compose, Kubernetes, IaC, secrets management

## 8. Cloud
- AWS, Cloudflare — storage, compute, networking, IAM
- Monitoring, logging, observability, cost optimization

## 9. Distributed Systems
- Event-driven architecture, message brokers (RabbitMQ/NATS/Kafka)
- CAP theorem, event buses, queues, consistency models
- Load balancing, caching strategies, microservices vs modular monoliths

## 10. Security
- OWASP Top 10, secure auth, authorization models
- Secrets management, dependency security, threat modeling

## 11. Computer Science
- Data structures, algorithms, Big O
- Concurrency, async programming, event loop
- OS fundamentals, networking fundamentals

## 12. Systems Languages
- C — manual memory management, pointers, the model every higher-level
  runtime is built on top of
- C++ — RAII, templates, the OOP/systems middle ground
- C# (already know a little, not solid) — solidify: LINQ, async/await,
  generics, the CLR/GC model, contrast against Node's event loop
- Rust — ownership/borrowing, zero-cost abstractions, memory safety without
  a GC; best attempted after C/C++ make manual memory management concrete

## 13. Performance Engineering
- Profiling, benchmarking
- Rendering / database / API / memory optimization

## 14. System Design
- Monoliths, modular monoliths, microservices
- Scalability, reliability, high availability, fault tolerance
- Real-world architecture case studies

---

## Reference material already available
I have an older, larger system (mostly AI-built) that touches most of
stages 3–9: FastAPI, async SQLAlchemy, Alembic, Redis Streams event bus,
Postgres+TimescaleDB, Docker Compose, React+TS dashboard, CI. Use it as a
comparison point once a stage's fundamentals are genuinely understood from
scratch — not as the thing being reverse-engineered early.
