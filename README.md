# বাজার দর (BazarDor)

**BazarDor** is a Bengali market price information web application built with Next.js. It helps users explore product prices, compare price changes over time, and view market-wise pricing information across different divisions of Bangladesh.

## 🚀 Technologies Used

- **Next.js 16** – React framework for building the application.
- **Next.js App Router** – File-based routing and page navigation.
- **TypeScript** – Type-safe development.
- **Tailwind CSS** – Responsive UI styling.
- **HeroUI** – UI components.
- **Better Auth** – Authentication and user account management.
- **MongoDB** – Database for authentication data.
- **React Toastify** – Success and error notifications.
- **Lucide React** – Icons.
- **React Toastify** – Display success, error, and informational notifications.

## ✨ Key Features

1. **Product Browsing** – Explore products with Bengali names, categories, images, and prices.
2. **Category-wise Products** – Browse products by category.
3. **Price Sorting** – Sort products by default order, lowest price to highest, and highest price to lowest.
4. **Price Comparison** – View today's, yesterday's, last week's, and last month's prices along with price changes.
5. **Market-wise Price Details** – View minimum and maximum prices across different markets and divisions.

## 🔐 Authentication & User Account

- Email and password authentication.
- Google login.
- GitHub login.
- User profile information.
- Update profile name.
- Logout functionality.

## 📂 Project Structure

```text
src/
├── app/
│   ├── category/
│   │   └── [slug]/
│   ├── details/
│   │   └── [id]/
│   ├── ...
│   └── layout.tsx
├── components/
├── lib/
│   └── auth-client.ts
```

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Go to the project directory**

```bash
cd bazardor
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DB_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Add your own credentials. Never commit secret values to GitHub.

**5. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Project Name

**বাজার দর (BazarDor)**

A simple way to explore market prices in Bangladesh.
