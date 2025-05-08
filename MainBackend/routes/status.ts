import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

// used by AWS App Runner for certain and many other services that run apis to validate api health
router.get('/api', (req: Request, res: Response) => {
  res.send({
    message: 'Server is running as expected. Only user authenticated requests are permitted',
    status: true,
    title: 'Alive',
  });
});

export default router;
