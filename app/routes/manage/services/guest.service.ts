import { tGuest } from "../types/guest.type.ts";

const kvUrl = Deno.env.get("KV_URL");
const kv = await Deno.openKv(kvUrl);

export const guestService = {
  async getAll(): Promise<tGuest[]> {
    const guests: tGuest[] = [];
    for await (const entry of kv.list<tGuest>({ prefix: ["guests"] })) {
      guests.push(entry.value);
    }
    return guests;
  },

  async get(id: string): Promise<tGuest | null> {
    const record = await kv.get<tGuest>(["guests", id]);
    return record.value;
  },

  async add(names: string, attending: number = 0): Promise<tGuest> {
    const id = crypto.randomUUID();
    const guest: tGuest = { id, names, attending, confirmed: false };
    await kv.set(["guests", id], guest);
    return guest;
  },

  async update(id: string, names: string, attending: number, confirmed: boolean): Promise<void> {
    const record = await kv.get<tGuest>(["guests", id]);
    if (record.value) {
      await kv.set(["guests", id], { ...record.value, names, attending, confirmed });
    }
  },

  async delete(id: string): Promise<void> {
    await kv.delete(["guests", id]);
  },
};
