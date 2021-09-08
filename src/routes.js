import { Router } from 'express';
// import DocFile from './ReadFile';

const routes = Router();

routes.get('/teste', (req, res) => {
  return res.send('Teste de Rota => OK.')
});

// routes.get('/read',DocFile);


export default routes;