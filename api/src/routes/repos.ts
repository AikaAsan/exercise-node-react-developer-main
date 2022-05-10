import { Router, Request, Response } from 'express';

export const repos = Router();
import axios from 'axios';
import { readFile } from 'fs/promises';

repos.get('/', async (_: Request, res: Response) => {
  const url = 'https://api.github.com/users/silverorange/repos';
  const file = `${__dirname}/../../data/repos.json`;
  const reposGit = await axios(url).then(({ data }) => data);
  const reposLocal = await readFile(file, 'utf8').then((data) =>
    JSON.parse(data)
  );

  const repos = [...reposGit, ...reposLocal].filter((repo) => !repo.fork);
  res.header('Cache-Control', 'no-store');
  res.status(200).json(repos);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
});
