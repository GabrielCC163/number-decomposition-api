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

---

## **Running tests**

```
docker-compose run -e NODE_ENV=test --rm --no-deps api yarn test
```
