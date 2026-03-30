import { tGuest } from "../types/guest.type.ts";

const kvUrl = Deno.env.get("KV_URL");
const kv = await Deno.openKv(kvUrl);

function normalizeGuest(record: any): tGuest {
  return {
    ...record,
    max_attending: record.max_attending ?? record.attending,
    attending: record.confirmed ? record.attending : 0,
  };
}

export const guestService = {
  async getAll(): Promise<tGuest[]> {
    const guests: tGuest[] = [];
    for await (const entry of kv.list({ prefix: ["guests"] })) {
      guests.push(normalizeGuest(entry.value));
    }
    return guests;
  },

  async get(id: string): Promise<tGuest | null> {
    const record = await kv.get(["guests", id]);
    return record.value ? normalizeGuest(record.value) : null;
  },

  async add(names: string, max_attending: number = 0, surname?: string): Promise<tGuest> {
    const id = crypto.randomUUID();
    const guest: tGuest = { id, names, surname, attending: 0, max_attending, confirmed: false };
    await kv.set(["guests", id], guest);
    return guest;
  },

  async delete(id: string): Promise<void> {
    await kv.delete(["guests", id]);
  },

  async update(
    id: string,
    names: string,
    max_attending: number,
    attending: number,
    confirmed: boolean,
    surname?: string,
  ): Promise<void> {
    const record = await kv.get<tGuest>(["guests", id]);
    if (record.value) {
      await kv.set(["guests", id], {
        ...record.value,
        names,
        surname,
        max_attending,
        attending,
        confirmed,
      });
    }
  },

  async confirm(id: string, newAttending: number): Promise<boolean> {
    const record = await kv.get<tGuest>(["guests", id]);

    if (record.value) {
      const guest = normalizeGuest(record.value);

      if (newAttending <= guest.max_attending) {
        await kv.set(["guests", id], {
          ...record.value,
          attending: newAttending,
          confirmed: true,
        });
        return true;
      }
    }
    return false;
  },
};
