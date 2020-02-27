const development = {
    client: 'mssql',
    connection: { 
        server: 'lotherington.database.windows.net', 
        user: 'duke', 
        password: process.env.MS_SQL_PW, 
        database: 'Projects',
        multipleStatements: true,
        encrypt: true
    },
    migrations: {
        tableName: 'guest.knex_migrations'
    }
}

module.exports = development;
