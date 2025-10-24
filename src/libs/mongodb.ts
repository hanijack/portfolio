// libs/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI:string | undefined = process.env.MONGO_DB;
if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");

declare global {
  var _mongoose_cache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const globalAny: any = global;

if (!globalAny._mongoose_cache) {
  globalAny._mongoose_cache = { conn: null, promise: null };
}

export default async function connectMong() {
  if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");
  if (globalAny._mongoose_cache.conn) return globalAny._mongoose_cache.conn;
  if (!globalAny._mongoose_cache.promise) {
    globalAny._mongoose_cache.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  globalAny._mongoose_cache.conn = await globalAny._mongoose_cache.promise;
  return globalAny._mongoose_cache.conn;
}