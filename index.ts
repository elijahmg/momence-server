import { parseExchangeRate } from "./utils/parse-exchange-rate.ts";

const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";

const EXCHANGE_RATE_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

const server = Bun.serve({
  port: PORT,
  async fetch() {
    const response = await fetch(EXCHANGE_RATE_URL)
    const responseAsText = await response.text();

    const [date, rates] = parseExchangeRate(responseAsText)

    return new Response(JSON.stringify({ date, rates }), {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  },
});

console.log(`[${NODE_ENV}] Serving http://localhost:${server.port}`);