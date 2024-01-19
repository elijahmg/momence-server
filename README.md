# momence-server

This is server for momence tech task.

I used custom server because CNB returns CORS issue from client side

Server runs on https://render.com/

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

# Notes & improvements

1. Bun is not enough mature for server work, however it's enough for quick prototyping. Also description of the task did not point out to use any specific backend tech. Ideally it would be expressJS.
2. Error handling can be done better. 
