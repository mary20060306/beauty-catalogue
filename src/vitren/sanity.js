import { createClient } from "@sanity/client";

export const client = createClient({
projectId: "qvedo4ef",
dataset: "production",
apiVersion: "2024-01-01",
useCdn: true
});