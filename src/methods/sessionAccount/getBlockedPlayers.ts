type Response = {
    blockedProfiles: string[];
}

export default async function(session: string): Promise<Response | null> {
    const response = await fetch(`https://api.minecraftservices.com/privacy/blocklist`,
        {headers: {"Authorization": `Bearer ${session}`}});
    
    if (!response.ok) return null;
    return await response.json();
}