export default async function (): Promise<string[]> {
    const response = await fetch(
        `https://sessionserver.mojang.com/blockedservers`
    );
    if (!response.ok) return [];

    const text = await response.text();
    return text.split("\n").filter((line) => line.length > 0);
}
