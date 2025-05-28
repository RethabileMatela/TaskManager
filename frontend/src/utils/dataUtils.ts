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
    const res = await fetch(`${url}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, role })
    });
    return await res.json();
  };

// CREATE TASK BY USER ID
export const createTaskData = async <T>(
  url: string,
  userId: string,
  title: string,
  description: string
  ): Promise<T> => {
  try {
    const res = await fetch(`${url}${userId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    });
    if (!res.ok) {
      throw new Error(`Error creating task for user ${userId}: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
};

//GET ALL TASK WHERE CREATED BY ID EQUALS USER ID
export const getAllTasksByUserId = async <T>(url: string, userId: string): Promise<T> => {
  const res = await fetch(`${url}${userId}/tasks`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error(`Error fetching tasks for user ${userId}: ${res.statusText}`);
  }
  return await res.json();
};