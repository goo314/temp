import { Router, Request, Response } from 'express';
import Knex from 'knex';
import knexConfig from '../knexfile';

const router = Router();
const knex = Knex(knexConfig.development);

router.post('/users', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const [id] = await knex('users').insert({ name, email });
    const user = await knex('users').where({ id }).first();
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
});

router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await knex('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
});

router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await knex('users').where({ id: req.params.id }).first();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
});

router.put('/users/:id', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    await knex('users').where({ id: req.params.id }).update({ name, email });
    const user = await knex('users').where({ id: req.params.id }).first();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const result = await knex('users').where({ id: req.params.id }).del();
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
});

export default router;
