import * as express from "express";
import { config, getDatabaseUrl } from "@config/default";
import { prisma } from "@services/prisma";
import { bookRouter } from "@modules/books/routers";
import { categoryRouter } from "@modules/categories/routers";
import { errorHandler } from "@middlewares/error";

import { plainToInstance } from 'class-transformer';

const registerRouter = (app: express.Express, basePath: string, router: express.Router) => {
  app.use(basePath, (req, res, next: express.NextFunction) => {
    return Promise.resolve(router(req, res, next)).catch(next);
  });
};

const loadRoutes = (app: express.Express) => {
  registerRouter(app, "/books", bookRouter);
  registerRouter(app, "/categories", categoryRouter);
}

const startServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    loadRoutes(app);
    app.use(errorHandler);

    const port = config.port;
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (e) {
    console.error("Error occurs: ", e);
    throw e;
  }
};

startServer()
  .then(async () => {
    getDatabaseUrl();
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
