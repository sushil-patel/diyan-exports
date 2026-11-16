# Diyan Exports

Marketing and enquiry website for **Diyan Exports**, a merchant exporter of premium agricultural
commodities (spices, oil seeds, powdered spices, herbs, pulses, grains, feeds, and cotton yarn) based
in Mehsana, Gujarat, India.

The project is a two-part application:

| Part | Stack | Purpose |
|------|-------|---------|
| `backend/` | Java 21, Spring Boot 3.5, Spring Web, Spring Data JPA, Spring Security (JWT), H2, Lombok, Maven | REST API for product catalog, company info, enquiry intake, and admin access |
| `frontend/` | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, lucide-react, framer-motion | Public website: home, about, products catalog, quality policy, enquiry form, contact |

## Features

- Category and product catalog rendered from the backend API (dynamic `products/[categorySlug]/[productSlug]` routes).
- Company information and certification showcase.
- Enquiry form that persists submissions through the API (email notification is currently mocked and logged).
- JWT-based authentication with token refresh/blacklist and a protected `/admin` area.
- Light and dark theming driven by a single design-token file (`frontend/src/app/globals.css`).

## Repository Layout

```
.
├── backend/
│   ├── src/main/java/com/diyan/exports/
│   │   ├── controller/      REST controllers (Public, Enquiry, Admin)
│   │   ├── service/         Business logic (products, enquiries, users, email, tokens)
│   │   ├── repositories/    Spring Data JPA repositories
│   │   ├── model/           JPA entities and request models
│   │   ├── security/        JWT utilities, providers, filters
│   │   ├── audit/           JPA auditing support
│   │   └── config/          Security and database seeding configuration
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   ├── data.sql         Seed data
│   │   └── static/images/   Product images served by the backend
│   └── pom.xml
└── frontend/
    ├── src/app/             App Router pages (home, about, products, quality, enquiry, contact)
    ├── src/components/      Shared UI (Navbar, Footer, Certifications)
    └── package.json
```

## Prerequisites

- **Java 21** and the bundled Maven wrapper (`backend/mvnw` / `backend/mvnw.cmd`)
- **Node.js 20+** and npm

## Running the Backend

The backend runs on `http://localhost:8080` and uses an in-memory H2 database seeded from `data.sql`.

```bash
cd backend
./mvnw spring-boot:run        # macOS / Linux
mvnw.cmd spring-boot:run      # Windows (PowerShell / CMD)
```

Configuration lives in `backend/src/main/resources/application.properties`. Local overrides and secrets
(database credentials, JWT secret, active profile) belong in `backend/.env`, which is **git-ignored** and
must never be committed.

Useful endpoints:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/categories` | List product categories |
| GET | `/api/categories/{slug}` | Products in a category |
| GET | `/api/products/{slug}` | Single product |
| GET | `/api/company-info` | Company information |
| POST | `/api/enquiries` | Submit an enquiry |
| GET | `/admin/enquiries` | List enquiries (requires ADMIN JWT) |
| POST | `/admin/user-register` | Register an admin user |
| POST | `/generate-token` | Obtain a JWT |
| POST | `/refresh-token` | Refresh a JWT |

The H2 console is available at `http://localhost:8080/h2-console`.

## Running the Frontend

The frontend runs on `http://localhost:3000` and calls the backend at `http://localhost:8080`. Start the
backend first.

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Theming

All design tokens (background, foreground, and `brand-*` colors for both light and dark mode) are defined in
`frontend/src/app/globals.css`. Components reference these tokens through Tailwind utility classes, so
changing the palette in that one file updates the entire site consistently.

## Environment and Secrets

- `.env` files are ignored at the repository root, in `backend/`, and in `frontend/`.
- Never commit credentials, API keys, or JWT secrets. Provide them through local `.env` files or your
  deployment environment.

Backend (`backend/.env`):
- `ENQUIRY_USERNAME` / `ENQUIRY_PASSWORD` — basic-auth credentials required to `POST /api/enquiries`
  and to access `/admin/**`. Mapped in `application.properties` via `app.enquiry.username` /
  `app.enquiry.password`. Defaults: `diyan_admin` / `change_me`.

Frontend (`frontend/.env`, see `frontend/.env.example`):
- `NEXT_PUBLIC_ENQUIRY_USERNAME` / `NEXT_PUBLIC_ENQUIRY_PASSWORD` — credentials the enquiry form
  sends with each submission as a `Basic` auth header.
