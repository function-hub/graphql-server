interface IEnvVars {
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    BD_PORT: number;
}

function fetchEnv(envKey: string, defaultValue: any): any {
    return process.env[envKey] || defaultValue;
}

export function setEnvVars(): IEnvVars {
    return {
        DB_HOST: fetchEnv('DB_HOST', 'localhost'),
        DB_USER: fetchEnv('DB_USER', 'server'),
        DB_PASSWORD: fetchEnv('DB_PASSWORD', '1qaz2wsx'),
        DB_DATABASE: fetchEnv('DB_DATABASE', 'server'),
        BD_PORT: fetchEnv('BD_PORT', 5432),
    };
}
