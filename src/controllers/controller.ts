
export const scanUrls = (req, res) => {
    let txt = req.body;

    res.send(`{ "req": "${txt}" }`);
};
