type Question = {
    answer: {
        id: number;
    },
    question: {
        id: number;
        question: string;
    }
}

type SuccessResponse = {
    ok: true;
    data: Question[];
}

export default async function(session: string): Promise<SuccessResponse | null>{
    const response = await fetch(`https://api.mojang.com/user/security/challenges`,
        {headers: {"Authorization": `Bearer ${session}`}});

    if (!response.ok) return null;
    return {
        ok: true,
        data: await response.json()
    }
}