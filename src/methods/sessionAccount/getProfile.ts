import { Profile } from '../../types';

export default async function(session: string): Promise<Profile | null> { 
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile`,
        {headers: {"Authorization": `Bearer ${session}`}});

    if (!response.ok) return null;
    return await response.json();
}