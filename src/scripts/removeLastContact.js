import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  const parseData = JSON.parse(data);
  const count = parseData.length;

  if (count > 0) {
    parseData.pop();
    return writeContacts(parseData);
  } else return writeContacts(parseData);
};

removeLastContact();
