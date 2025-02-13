# Pankkiyhteys

This library is an implementation of Web Services API, a standardised solution used for automated communications between banks and corporate customers.

Currently only [Osuuspankki](https://www.op.fi/) is fully supported.

Nordea client can be used with existing certificates to make normal Web Services API calls for listing, fetching and
sending files. Certificate renewal isn't currently supported with the Nordea client. 

For in depth technical documentation about Web Services [click here](https://www.finanssiala.fi/wp-content/uploads/2021/03/WebServices_Messages_v110_20200504.pdf).

# Bolt.Works fork

This fork is maintained by Bolt.Works, and focuses on Nordea support.  
We have an unmerged PR to the upstream repository, which adds Nordea support. 
The fork has gone through a lot of changes since its inception, and, since we don't use
the original Osuuspankki client, whether or not this fork works with Osuuspankki is unknown.

## Install

Install with [npm](https://www.npmjs.com/):

```
  npm install pankkiyhteys
```

## Usage

Autogenerated docs at: https://hyrsky.github.io/pankkiyhteys

### Request certificate with transfer key

```js
import { promises as fs } from "fs";

const client = new Osuuspankki('1234567890', undefined, 'FI')
const privateKey = await Key.generateKey();

await fs.writeFile(`private-key-${new Date().toISOString()}.key`, privateKey);

const cert = await client.getInitialCertificate(privateKey, "0123456789ABCDEF");

await fs.writeFile(`certificate-${new Date().toISOString()}.pem`, cert);
```

### Renewing certificate

```js
function isAboutToExpire(key) {
  const dateToCheck = new Date()
  dateToCheck.setMonth(dateToCheck.getMonth() + 2)
  return key.expires() < dateToCheck
}

const key = new Key(oldPrivateKey, oldCert)
const client = new Osuuspankki('1234567890', key, 'FI')

if (key.isAboutToExpire()) {
  /**
   * You have to:
   *   * generate new key.
   *   * save key to persistent storage before renewal.
   */
  const keys = await Key.generateKey()
  await writeFile('./newkey.pem', keys.privateKey)
  const certificate = await client.getCertificate(keys.privateKey)
  await writeFile('./newcert.pem', certificate)
}
```
