process.env.PORT = process.env.PORT || 3000;

import express from "express";

const app = express();

app.listen(process.env.PORT, () => { console.log('API is running'); console.log('listening on: ' + process.env.PORT) });

export default app;