import { Appwrite } from 'appwrite';

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1')
    .setProject('616064b95b549')
;

export const account = sdk.account