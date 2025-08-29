# 💸 Money Manager

> _“Making cents of your expenses!”_ 🪙  

Money Manager is a **full-stack personal finance app** that helps you track incomes, expenses, categories, and gain insights through a slick dashboard with charts.  
Built with ❤️ using **React, Tailwind, Spring Boot, and PostgreSQL** (with MySQL support for local dev).  

---

## 🚀 Tech Stack

- **Frontend** → React, TailwindCSS  
- **Backend** → Spring Boot, Spring Security, JWT, Spring Email  
- **Database** → MySQL (local), PostgreSQL (production)  
- **Deployment** → Docker  

---

## ✨ Features

- 🔐 **JWT Authentication & Authorization** – your money, your rules.  
- 👤 **Profile management** – with profile picture uploads.  
- 💵 **Track incomes & expenses** – add, edit, delete, and view.  
- 📊 **Dashboard with charts & analytics** – see where your cash flows.  
- 🗂️ **Categories & Filters** – organize like a pro.  
- 📑 **Export to Excel** – because spreadsheets never die.  
- 📧 **Email notifications** – the app that actually mails you.  

---

## 📂 Project Structure

```bash
MoneyManager
│
├── moneymanager-backend/      # Spring Boot backend
│   ├── .idea/                 # IDE config files
│   ├── .mvn/                  # Maven wrapper
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/          # Java source code (config, controller, service, entity, dto, repository, security, util)
│   │   │   └── resources/     # application properties, templates, static files
│   │   └── test/              # Unit tests
│   ├── target/                # Compiled jar files
│   ├── Dockerfile             # Backend docker config
│   ├── pom.xml                # Maven dependencies
│   └── mvnw / mvnw.cmd        # Maven wrapper scripts
│
├── moneymanager-frontend/     # React frontend
│   ├── node_modules/          # Installed npm packages
│   ├── public/                # Public static assets (favicon, index.html)
│   └── src/
│       ├── assets/            # Images and asset scripts
│       ├── components/        # Reusable React components
│       ├── context/           # React context for global state
│       ├── hooks/             # Custom hooks
│       ├── pages/             # Page components
│       ├── util/              # Helper JS files (API calls, validation, uploads)
│       ├── App.jsx / main.jsx # Main entry points
│       ├── App.css / index.css# Styling files
│   ├── package.json            # npm dependencies
│   ├── vite.config.js          # Vite config
│   └── README.md               # Frontend README (optional)
│
└── README.md                  # Project README (this file)

```

## 🖼️ Screenshots

<img width="1901" height="702" alt="image" src="https://github.com/user-attachments/assets/d5164a87-44e7-49e3-9ad4-430f292eb3ef" />
<img width="1044" height="687" alt="image" src="https://github.com/user-attachments/assets/09f6a442-17bc-4f5b-a6a6-870a608131d0" />
<img width="950" height="792" alt="image" src="https://github.com/user-attachments/assets/527a19d7-541d-4cfb-b4f9-a25cb2cba72e" />
<img width="1881" height="948" alt="image" src="https://github.com/user-attachments/assets/9c77345b-6d8e-4610-b5e5-84786993d9eb" />
<img width="1873" height="870" alt="image" src="https://github.com/user-attachments/assets/ba4f9452-e67a-4e36-b3c5-f81e4be98dac" />
<img width="1887" height="779" alt="image" src="https://github.com/user-attachments/assets/c6e616db-8858-46ec-9d73-e4b35c42c2f4" />

## ⚡ Installation

### 1️⃣ Clone the repo

```
git clone https://github.com/<your-username>/money-manager.git
cd money-manager
```

### 2️⃣ Backend Setup (Spring Boot + Docker)
Local (MySQL)

- Update application.properties with your local MySQL credentials.
- Run:

```
cd moneymanager-backend
./mvnw spring-boot:run
```

Production (PostgreSQL with Docker)

- Build the Docker image:

```
docker build -t moneymanager-backend .
```

- Run the container:

```
docker run -p 8080:8080 moneymanager-backend
```

### 3️⃣ Frontend Setup (React + Tailwind)

```
cd src
npm install
npm run dev
```

The frontend will run on http://localhost:5173

## 🌍 Deployment

Live Project → [Click here to try it](https://moneymanager-two.vercel.app/) 🚀

## 🤝 Contributing

Contributions are welcome!
Fork it, create a branch, make some magic ✨, and open a PR.

## 📜 License

MIT License © Satyam Seth
