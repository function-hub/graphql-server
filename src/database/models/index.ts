import { Sequelize } from 'sequelize';
import { setEnvVars } from '../../config/envVars';
import * as knex from 'knex';
import { QueryBuilder } from 'knex';

enum IConnectType {
    SQUELIZE = 0,
    KNEX = 1,
}

const knexConfig = {
    client: 'pg',
    connection: {
        database: process.env.SQL_DATABASE,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
    },
    pool: {
        min: 2,
        max: 20,
    },
    debug: process.env.NODE_ENV !== 'production',
    // pg bouncer
};

class Connection {
    private static instance: Connection;
    private sequlize: Sequelize;
    private knex: QueryBuilder;
    constructor() {
        this.sequlize = this.connectToDB(IConnectType.SQUELIZE);
        this.knex = this.connectToDB(IConnectType.KNEX);
    }

    public static getInstance(): Connection {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }

    connectToDB(connectType: IConnectType): any {
        switch (connectType) {
            case IConnectType.SQUELIZE:
                // constructor(database: string, username: string, password?: string, options?: Options); 重载函数
                return new Sequelize(
                    'test_graphql_db',
                    'test_graphql_admin',
                    'iamapassword',
                    {
                        host: 'localhost',
                        dialect: 'postgres',
                    },
                );
            case IConnectType.KNEX:
                return knex({});
        }
    }
}
// export const queryBuilder =
