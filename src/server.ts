import "reflect-metadata"; // this shim is required
import { createKoaServer } from "routing-controllers";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import Router from "koa-router";
import { ExampleController } from "./controllers/ExampleController";
import logger from "koa-logger";

const storage = getMetadataArgsStorage();
const schemas = validationMetadatasToSchemas();

const spec = routingControllersToSpec(storage, {}, { components: { schemas } });

// Create server instance
const app = createKoaServer({
  controllers: [ExampleController],
});

const router = new Router();
router.get("/", (ctx) => {
  ctx.body = spec;
});
router.get("/_health", (ctx) => {
  ctx.body = "Ok";
});

app.use(router.routes());
app.use(logger())

export default app;
