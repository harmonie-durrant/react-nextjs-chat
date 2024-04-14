const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

require('dotenv').config()

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
	const pk = process.env.PRIVATE_KEY;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username, secret: username, first_name: username
            },
            {
                headers: {
                    "private-key": pk
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);