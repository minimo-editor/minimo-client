const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export async function getProject(address) {
  try {
    const response = await fetch(`${SERVER_URL}/project/${address}`, { method: 'GET' });
    const json = await response.json();

    return json;
  } catch (error) {
    // TODO: throw error
    console.log(error);
  }
}

export async function postProject(data) {
  try {
    const response = await fetch(`${SERVER_URL}/project`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const json = await response.json();

    return json.ok;
  } catch (error) {
    throw new Error('faild to post project');
  }
}

export async function checkValidAddress(address) {
  try {
    const json = await getProject(address);

    if (!json.ok && json.error.status === 404) {
      return true;
    }

    return false;
  } catch (error) {
    // TODO: throw error
    console.log(error);
  }
}
