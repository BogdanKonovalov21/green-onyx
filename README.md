## Before starting:
### Adding Environment Variables for Telegram Bot:
Follow these steps to obtain the required data:
- Create a new bot using BotFather.
- Save the token **(BOT_TOKEN)** for your bot.
- Find your bot in Telegram and send it a message.
- Go to the following URL: **https://api.telegram.org/bot`{BOT_TOKEN}`/getUpdates** and find the **chat_id (CHAT_ID)** by looking for `result.message.chat.id`.

Now that you have all the required data, the next step is to create a .env.local file and save the data using the following format:
```bash
NEXT_PRIVATE_BOT_TOKEN = {BOT_TOKEN}
NEXT_PRIVATE_CHAT_ID = {CHAT_ID}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
