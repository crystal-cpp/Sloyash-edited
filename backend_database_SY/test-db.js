const pool = require('./db');

async function testConnection() {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Connect Neon Success!', res.rows[0]);
        process.exit(0);
    } catch (err) {
        console.error('Error Connection', err.message);
        process.exit(1);
    }
}

testConnection();