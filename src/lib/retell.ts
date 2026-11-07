import { createServerFn } from "@tanstack/react-start";

export const startRetellChat = createServerFn({ method: "POST" })
  .handler(async () => {
    const apiKey = process.env.RETELL_API_KEY;
    const agentId = process.env.VITE_RETELL_AGENT_ID;

    if (!apiKey || apiKey === "key_placeholder") {
      console.error("Retell Integration Error: RETELL_API_KEY is not configured in .env file.");
      throw new Error("RETELL_API_KEY is missing. Please configure it in your .env file.");
    }
    if (!agentId || agentId === "agent_placeholder") {
      console.error("Retell Integration Error: VITE_RETELL_AGENT_ID is not configured in .env file.");
      throw new Error("VITE_RETELL_AGENT_ID is missing. Please configure it in your .env file.");
    }

    try {
      const response = await fetch("https://api.retellai.com/create-chat", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: agentId,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Retell API error response:", errorText);
        throw new Error(`Retell API error: ${response.statusText} (${response.status})`);
      }

      const data = (await response.json()) as { chat_id: string };
      return { chatId: data.chat_id };
    } catch (error) {
      console.error("Error creating Retell chat session:", error);
      throw error instanceof Error ? error : new Error("Failed to start chat session with Retell AI");
    }
  });

export const sendRetellMessage = createServerFn({ method: "POST" })
  .validator((data: { chatId: string; message: string }) => data)
  .handler(async ({ data }) => {
    const { chatId, message } = data;
    const apiKey = process.env.RETELL_API_KEY;

    if (!apiKey || apiKey === "key_placeholder") {
      console.error("Retell Integration Error: RETELL_API_KEY is not configured in .env file.");
      throw new Error("RETELL_API_KEY is missing. Please configure it in your .env file.");
    }

    try {
      const response = await fetch("https://api.retellai.com/create-chat-completion", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          content: message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Retell API error response:", errorText);
        throw new Error(`Retell API error: ${response.statusText} (${response.status})`);
      }

      const data = (await response.json()) as {
        messages?: Array<{ role: string; content: string }>;
      };

      // Retrieve the latest message from the agent
      const agentMessages = data.messages?.filter((m) => m.role === "agent");
      const latestAgentMessage = agentMessages?.[agentMessages.length - 1];

      if (!latestAgentMessage) {
        throw new Error("No reply received from Retell AI agent.");
      }

      return { content: latestAgentMessage.content };
    } catch (error) {
      console.error("Error sending message to Retell AI:", error);
      throw error instanceof Error ? error : new Error("Failed to get response from Retell AI");
    }
  });
