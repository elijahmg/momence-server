interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

type ParseExchangeRate = [string, ExchangeRate[]]

function parseNumber(numberAsString: string) {
  const parsedNumber = Number(numberAsString);

  if (isNaN(parsedNumber)) {
    throw new Error('Failed to parse number value')
  }

  return parsedNumber
}

export function parseExchangeRate(input: string): ParseExchangeRate {
  const dataAsArray = input.split('\n');

  // eg 18 Jan 2024 #13
  const dateAsString = dataAsArray.shift()!;

  // removes header
  dataAsArray.shift()

  // removes empty last line
  dataAsArray.pop()

  const rate = dataAsArray.reduce((acc, row) => {
      const [country, currency, amount, code, rate] = row.split('|')

      acc.push({
        amount: parseNumber(amount),
        rate: parseNumber(rate),
        currency,
        country,
        code
      })

      return acc
  }, [] as ExchangeRate[])

  return [dateAsString, rate]
}