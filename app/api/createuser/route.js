import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "user_2uMqPKJtf2Su9TRZXduMGocCGDD";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  const token = serverClient.createToken(user.data.id);
  console.log("A NEW USER CREATED.", token);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: { token: token },
  });

  // Give access to this user for all chats
  const slugs = [
    "Python",
    "JavaScript",
    "React",
    "Next-JS",
    "AI-ML",
    "Cybersecurity",
  ];
  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: item + " Discussion",
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });
  return Response.json({ message: "Hello World" });
}
