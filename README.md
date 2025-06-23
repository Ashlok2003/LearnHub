# 📘 LearnHub

**LearnHub** is a modular, microservice-based Learning Management System (LMS) built with **Spring Boot** and **Next.js**. It enables users to manage courses, enrollments, assessments, and analytics, with robust authentication and admin control.

---

## 🚀 Tech Stack

- 🧩 **Backend**: Spring Boot, Spring Cloud, Eureka, JWT, PostgreSQL, Redis, Kafka
- 🌐 **Frontend**: Next.js, Tailwind CSS
- 🐳 **DevOps**: Docker, GitHub Actions, Terraform, Helm, Kubernetes
- 📊 **Monitoring**: Prometheus, Grafana

---

## 🧱 Microservices

- `api-gateway`: Routes traffic to backend services
- `auth-service`: JWT auth, roles, registration
- `course-service`: Manage courses & modules
- `enrollment-service`: Enroll users in courses
- `assessment-service`: Quizzes, scoring
- `analytics-service`: Progress & performance
- `client`: Next.js frontend app

---

## 📦 Quick Start

```bash
git clone https://github.com/your-org/learnhub.git
cd learnhub
docker-compose up --build
