import {Express} from 'express';
import  SwaggerUi from 'swagger-ui-express';
import SwagggerOutput from './swagger_output.json';
import fs, { readFileSync } from 'fs';
import path from 'path';

export default function docs(app: Express) {

  const css = fs.readFileSync(path.resolve(__dirname, '../../node_modules/swagger-ui-dist/swagger-ui.css'), 'utf-8');

  app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(SwagggerOutput, {
    customCss: css,
  }));
};