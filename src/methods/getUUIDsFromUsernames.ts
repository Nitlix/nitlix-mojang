export default async function(username: string): Promise<null | string> {
    const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.id;
}