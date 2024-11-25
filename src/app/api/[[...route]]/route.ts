import { Hono } from "hono";
import { handle } from "hono/vercel";
import { jwt } from "hono/jwt";
import * as router from "@/app/api/_routers";

const app = new Hono().basePath("/api/v1");

const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET,
  alg: "HS256",
});

app.use("/*", jwtMiddleware);

app.get("/protected", jwtMiddleware, async (c) => {
  return c.json({ message: "Protected routes" });
});

app.route("/user", router.user);
app.route("/collection", router.collection);
app.route("/collections", router.collections);
app.route("/contracts", router.contracts);
app.route("/address", router.address);
app.route("/nonce", router.nonce);
app.route("/metadata", router.metadata);
app.route("/mint", router.mint);
app.route("/deploy", router.deploy);
app.route("/nfts", router.nfts);
app.route("/storage", router.storage);
app.route("/search", router.search);
app.route("/getFloorPrice", router.getFloorPrice);
app.route("/getListedNfts", router.getListedNfts);
app.route("/getNft", router.getNft);

export const GET = handle(app);
export const POST = handle(app);
