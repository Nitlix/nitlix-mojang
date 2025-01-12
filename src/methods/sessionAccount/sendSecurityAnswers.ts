type Answer = {
    id: number;
    answer: string;
};

type SuccessResponse = {
    ok: true;
};

type ErrorResponse = {
    ok: false;
    error: {
        error: string;
        errorMessage: string;
    };
};

export default async function (
    session: string,
    answers: Answer[]
): Promise<SuccessResponse | ErrorResponse> {
    const response = await fetch(
        `https://api.mojang.com/user/security/location`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
            },
            body: JSON.stringify(answers),
        }
    );

    if (response.ok) return { ok: true };
    else {
        return {
            ok: false,
            error: await response.json(),
        };
    }
}
