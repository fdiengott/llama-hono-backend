# Llama chatbot

This is a simple backend for me to better understand streaming ai responses. I am primarily a frontend developer so playing around with backend servers is good practice. In the last few months I have spent a lot of time learning and thinking about AI, but have only written a little bit of code to actually implement it. This also gave me the opportunity to once again play with Bun and to try Hono out for the first time instead of using express.

I had intended for this project to use OpenAi's API so I wouldn't have to download all of the weights of a model and run it locally, but as I am in the process of switching from chatGPT to Claude (trying it out), the API seems unavailable to me. It was a good opportunity, however, to download and host my own model.

In the future, I should hook this up to a simple frontend form instead of relying upon URL query params, but I wanted this to be a quick POC, so here we are.

## Usage

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
