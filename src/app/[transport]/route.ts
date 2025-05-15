import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";

const handler = createMcpHandler((server) => {
  server.tool(
    "uuid_generator",
    "UUIDを生成します",
    { num: z.number().min(1).default(1) },
    async ({ num }) => {
      // 結果を返す
      const results = Array.from({ length: num }, () => crypto.randomUUID());
      return {
        content: [{ type: "text", text: results.join(",") }],
      };
    }
  );
});

export { handler as GET, handler as POST, handler as DELETE };
