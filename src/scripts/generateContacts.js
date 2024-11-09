import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts();
  const parseData = JSON.parse(data);
  for (let i = 0; i < number; i++) {
    parseData.push(createFakeContact());
  }
  await writeContacts(parseData);
};

generateContacts(5);
