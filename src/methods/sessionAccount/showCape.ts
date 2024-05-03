import { Profile } from '../../types';

type ErrorResponse = {
    path: string,
    errorMessage: string,
    developerMessage?: string,
    ok: false,
}

type SuccessResponse = Profile & {
    ok: true
}

export default async function(session: string, capeId: string | number): Promise<ErrorResponse | SuccessResponse> {
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile/capes/active`,
        {headers: {"Authorization": `Bearer ${session}`}, method: "PUT", body: JSON.stringify({capeId})});

    const data = await response.json();
    data.ok = response.ok;
    return data;
}