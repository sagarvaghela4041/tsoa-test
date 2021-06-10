import { app } from "./app";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

const port = process.env.PORT || 3000;
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);