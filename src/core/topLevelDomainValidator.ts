// Validates top level domain against official TLD list taken here:
// https://data.iana.org/TLD/tlds-alpha-by-domain.txt
// 
// Normalizes to ASCII form for checking PunnyCode domains.
// Could be improved by updating from the source using cron or any scheduler.

import * as fs from 'fs';
import * as url from 'url';

export interface ITopLevelDomainValidator {
    isValid(tld: string): boolean
}

export class TopLevelDomainValidator implements ITopLevelDomainValidator {
    _tldMap: Map<string, boolean>;

    constructor () {
        const tlds_content = fs.readFileSync('./src/resources/tlds-alpha-by-domain.txt','utf8');
        this._tldMap = new Map(tlds_content
                            .split('\n')
                            .map((s) => [s.toLowerCase(), true]));
    }

    isValid(topLevelDomain: string): boolean {
        const punnyCoded = url.domainToASCII(topLevelDomain);
    
        return this._tldMap.has(punnyCoded);
    }
}