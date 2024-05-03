type Response = {
    privileges: {
        onlineChat: {
            enabled: boolean;
        };
        multiplayerServer: {
            enabled: boolean;
        };
        multiplayerRealms: {
            enabled: boolean;
        };
        telemetry: {
            enabled: boolean;
        };
    };
    profanityFilterPreferences: {
        profanityFilterOn: boolean;
    };
    banStatus: {
        bannedScopes: {
            MULTIPLAYER?: {
                banId: string;
                expires: number;
                reason: BanReason;
                reasonMessage: string;
            };
        };
    };
};

type BanReason = "false_reporting" | "hate_speech" | "terrorism_or_violent_extremism" | "child_sexual_exploitation_or_abuse" |
"imminent_harm" | "non_consensual_intimate_imagery" | "harassment_or_bullying" | "defamation_impersonation_false_information" |
"self_harm_or_suicide" | "alcohol_tobacco_drugs"

export default async function(session: string, newProfanityFilterValue: boolean | null = null): Promise<Response | null> {
    const response = await fetch(`https://api.minecraftservices.com/player/attributes`,
    {
        headers: {"Authorization": `Bearer ${session}`},
        method: newProfanityFilterValue === null ? "GET" : "POST",
        body: newProfanityFilterValue === null ? null : JSON.stringify({profanityFilterOn: newProfanityFilterValue}),
    });

    if (!response.ok) return null;
    return await response.json();
}
