
export const createUserData = async <T>(
    url: string,
    name: string,
    role: string
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, role })
    });

    return await res.json();
  }
  
  export const getAllUserData = async <T>(url: string): Promise<T> => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });

    return await res.json();
  };
