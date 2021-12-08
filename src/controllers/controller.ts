import * as scan from '../core/urlScanner'

const urlScanner = new scan.UrlScanner();

export const scanUrls = (req, res) => {
    const scannedLinks = urlScanner.scan(req.body) || [];
    res.send(scannedLinks);
};

