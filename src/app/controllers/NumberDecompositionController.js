const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const getDivisorsAndPrimes = (num) => {
  const divisors = [];
  const primes = [];

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);

      if (isPrime(i)) {
        primes.push(i);
      }

      if (i !== num / i) {
        const divisionResult = num / i;
        divisors.push(divisionResult);

        if (isPrime(divisionResult)) {
          primes.push(divisionResult);
        }
      }
    }
  }

  return {
    divisors: divisors.sort((a, b) => a - b),
    primes: primes.sort((a, b) => a - b),
  };
};

module.exports = {
  index(req, res) {
    try {
      let {
        params: { number },
      } = req;

      const numberToResolve = Number.parseInt(number);

      if (
        !Number.isInteger(numberToResolve) ||
        numberToResolve <= 0
      ) {
        return res.status(400).json({
          message: 'A positive integer is required.',
        });
      }

      const response = getDivisorsAndPrimes(numberToResolve);

      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  },
};
