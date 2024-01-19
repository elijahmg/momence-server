import { expect, test } from "bun:test";
import { parseExchangeRate } from "./parse-exchange-rate.ts";

const MOCK_EXCHANGE_RATE = `18 Jan 2024 #13
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.928
Brazil|real|1|BRL|4.622
Bulgaria|lev|1|BGN|12.652
Canada|dollar|1|CAD|16.856
China|renminbi|1|CNY|3.164
Denmark|krone|1|DKK|3.318
EMU|euro|1|EUR|24.745
Hongkong|dollar|1|HKD|2.910
Hungary|forint|100|HUF|6.476
Iceland|krona|100|ISK|16.552
IMF|SDR|1|XDR|30.286
India|rupee|100|INR|27.365
Indonesia|rupiah|1000|IDR|1.457
Israel|new shekel|1|ILS|6.039
Japan|yen|100|JPY|15.385
Malaysia|ringgit|1|MYR|4.824
Mexico|peso|1|MXN|1.325
New Zealand|dollar|1|NZD|13.904
Norway|krone|1|NOK|2.162
Philippines|peso|100|PHP|40.756
Poland|zloty|1|PLN|5.624
Romania|leu|1|RON|4.971
Singapore|dollar|1|SGD|16.929
South Africa|rand|1|ZAR|1.202
South Korea|won|100|KRW|1.700
Sweden|krona|1|SEK|2.178
Switzerland|franc|1|CHF|26.240
Thailand|baht|100|THB|63.943
Turkey|lira|100|TRY|75.490
United Kingdom|pound|1|GBP|28.856
USA|dollar|1|USD|22.758`


const NOT_FULL_RATE = `18 Jan 2024 #13
Country|Currency
Australia|dollar
`


test('Parse exchange rate - happay case', () => {
  const [data, rates] = parseExchangeRate(MOCK_EXCHANGE_RATE);

  expect(data).toBe('18 Jan 2024 #13')
  expect(rates[0].rate).toBe(14.928)
})

test('Failed to parse', () => {
  expect(() => parseExchangeRate(NOT_FULL_RATE)).toThrow('Failed to parse number value')
})