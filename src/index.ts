import { Hono } from "hono";
import { streamText } from "hono/streaming";
import ollama from "ollama";
import { limiter } from "./limiter";

const app = new Hono();

//  TODO: this isn't working properly
app.use(limiter);

app.get("/chat/:query", async (c) => {
    return streamText(c, async (stream) => {
        const response = await ollama.chat({
            model: "llama2",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful assistant. Please be cordial and only moderately formal. Keep your responses to one or two sentences.",
                },
                { role: "user", content: c.req.param("query") },
            ],
            stream: true,
        });

        for await (const chunk of response) {
            stream.write(chunk.message.content);
        }
    });
});

export default app;
