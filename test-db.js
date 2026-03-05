const mysql = require('mysql2/promise');

// Test with connection string (same format as Vercel)
const connectionString = 'mysql://arcmax_arcmaxnext:arcmaxnext0987@162.144.12.169:3306/arcmax_arcmaxnext?sslaccept=strict';

async function testUrl() {
  try {
    console.log('Testing connection string with SSL...');
    const connection = await mysql.createConnection(connectionString);
    const [rows] = await connection.execute('SELECT 1');
    console.log('✅ URL connection successful!', rows);
    await connection.end();
  } catch (error) {
    console.error('❌ URL connection failed:', error.message);
    
    // Try without SSL as fallback
    try {
      console.log('Trying without SSL...');
      const connection2 = await mysql.createConnection('mysql://arcmax_arcmaxnext:arcmaxnext0987@162.144.12.169:3306/arcmax_arcmaxnext');
      const [rows2] = await connection2.execute('SELECT 1');
      console.log('✅ URL without SSL successful!', rows2);
      await connection2.end();
    } catch (error2) {
      console.error('❌ All URL attempts failed:', error2.message);
    }
  }
}

testUrl();