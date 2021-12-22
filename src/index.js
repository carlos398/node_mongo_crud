import app from "./app";
import './database'
import {PORT} from "./config"

app.listen(PORT || 3000);
console.log("server on port", PORT );
