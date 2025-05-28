// CREATE USER
export const createUserData = async <T>(
    url: string,
    name: string,
    role: string
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, role })
    });

    return await res.json();
  }
  
  //GET ALL USERS
  export const getAllUserData = async <T>(url: string): Promise<T> => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });

    return await res.json();
  };

// GET USER BY ID
export const getUserById = async <T>(url: string, id: string): Promise<T> => {
  const res = await fetch(`${url}${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error(`Error fetching user with ID ${id}: ${res.statusText}`);
  }
  return await res.json();
};

//EDIT USER BY ID
export const updateUserData = async <T>(
    url: string,
    id: string,
    name: string,
    role: string
  ): Promise<T> => {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, role })
    });
    return await res.json();
  };
