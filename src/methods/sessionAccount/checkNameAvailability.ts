type ResponseString = "DUPLICATE" | "AVAILABLE" | "NOT_ALLOWED";

export default async function (
    accountSession: string,
    name: string
): Promise<ResponseString | null> {
    const response = await fetch(
        `https://api.minecraftservices.com/minecraft/profile/name/${name}/available`,
        { headers: { Authorization: `Bearer ${accountSession}` } }
    );

    if (!response.ok) return null;
    return (await response.json()).status as ResponseString;
}
