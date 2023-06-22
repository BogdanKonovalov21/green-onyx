import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, mobile, message } = req.body;

  try {
    await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PRIVATE_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.NEXT_PRIVATE_CHAT_ID,
      text: `Name: ${name} Mobile number: ${mobile} Message: ${message}`
    });

    res.status(201).send('Message sent to Telegram');
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error sending message to Telegram. ${error}`);
  }
}