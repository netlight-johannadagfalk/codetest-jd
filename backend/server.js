import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = 8080;
const app = express();

app.use(cors());
const corsOptions = {
  origin: ['https://codetest-xkcd.netlify.app/']
};

app.get(`/getData/:id`, cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET'
  };
  const response = await fetch(
    `https://xkcd.com/${req.params.id}/info.0.json`,
    fetchOptions
  );
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
