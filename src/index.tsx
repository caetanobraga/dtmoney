import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freela de site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-11 09:00:00'),
        },
        {
          id: 2,
          title: 'agua',
          type: 'withdraw',
          category: 'conta',
          amount: 150,
          createdAt: new Date('2023-05-11 09:00:00'),
        },
        {
          id: 3,
          title: 'freela de site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-11 09:00:00'),
        },
        {
          id: 4,
          title: 'freela de site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-11 09:00:00'),
        },
        {
          id: 5,
          title: 'freela de site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-05-11 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
