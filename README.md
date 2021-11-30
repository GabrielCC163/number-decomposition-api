# Number Decomposition API - Search for divisors and primes of a number

### Requirements

- Docker and Docker Compose

## **Initialization**

```
docker-compose up
```

---

## API Documentation

### **/api-docs**

---

## **Running requests**

Pass the number as a parameter in the route
to find the divisors and primes:

### **/decomposition/:number**

Fetch URL: https://number-decomposition-api.herokuapp.com/decomposition/45
Web client: https://eloquent-euler-0b8842.netlify.app/

---

## **Running tests**

```
docker-compose run -e NODE_ENV=test --rm --no-deps api yarn test
```
