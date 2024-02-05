import { Account, Client } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65c13488674c0649c6d2');

export const account = new Account(client);
client.subscribe(
  ['users.*.sessions.*.delete', 'users.*.sessions.*.create'],
  (event) => console.table(event),
);

export { ID } from 'appwrite';
