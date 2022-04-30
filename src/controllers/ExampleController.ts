import { Get, JsonController, QueryParam } from "routing-controllers";

@JsonController()
export class ExampleController {
  @Get("/example")
  testRoute(@QueryParam("string", { required: true }) string: string) {
    return { string };
  }
}
