import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();
  const parseData = JSON.parse(data);
  parseData.push(createFakeContact());
  await writeContacts(parseData);
};

addOneContact();
