# GraphQL Gateway (Supergraph)

This is the entry point that combines all subgraphs.

---

## 📦 Setup

```bash
npm init -y
npm install apollo-server @apollo/gateway graphql
```

---

## 📁 Structure

```
gateway/
├── package.json
└── index.js
```

---

## ⚙️ package.json

```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
```

---

## ▶️ Run

```bash
npm install
npm start
```

---

## 🌐 Runs On

```
http://localhost:5000
```

---

## 🔗 Subgraphs Configuration

```js
const gateway = new ApolloGateway({
  serviceList: [
    { name: "movies", url: "http://localhost:3000" },
    { name: "pricing", url: "http://localhost:4000" }
  ]
});
```

---

## 🧠 How It Works

1. Receives query from client
2. Calls Movies subgraph
3. Gets movie + price reference
4. Calls Pricing subgraph
5. Merges results

---

## 🧪 Sample Query

```graphql
query {
  movies {
    id
    name
    priceDetails {
      entityPrice {
        amount
        currency
      }
    }
  }
}
```

---

## ⚠️ Important

Start services in this order:

1. movies-service (3030)
2. pricing-service (4040)
3. movies-subgraph (3000)
4. pricing-subgraph (4000)
5. gateway (5000)

---

## ✅ Purpose

* Single entry point for clients
* Combines multiple subgraphs into one API
