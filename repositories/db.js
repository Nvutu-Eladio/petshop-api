import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
        connectionString: "postgres://aoyasvax:ogTket5zREqCWhdy9EtUYZWWQ4IzkTE3@drona.db.elephantsql.com/aoyasvax"
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}