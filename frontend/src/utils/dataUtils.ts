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
  
  export const GetAllUserData = async <T>(
    url: string,
    name: string,
    role: string
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'Get',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, role })
    });

    return await res.json();
  }
  