import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const usersPath = '/users';
const loginPath = '/login';

async function postUsersRequest(
  email, password, firstName = '', lastName = '', phoneNumber = '', address = '',
) {
  const payload = {
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
    },

  };

  try {
    if (payload.data.firstName === '' && payload.data.lastName === '' && payload.data.phoneNumber === '' && payload.data.address === '') {
      const response = await axios.post(`${serverUrl}${loginPath}`, payload);
      const result = response.data;
      return result;
    }
    const response = await axios.post(`${serverUrl}${usersPath}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUsersRequest;
