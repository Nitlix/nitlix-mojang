export default async function (
    usernames: string[]
): Promise<(string | null)[]> {
    const response = await fetch(
        `https://api.minecraftservices.com/minecraft/profile/lookup/bulk/byname`,
        {
            method: "POST",
            body: JSON.stringify(usernames),
        }
    );

    if (!response.ok) return [];
    const data = await response.json();

    return data.map((user: { id: string; name: string }) => user.id);
}
