export interface IUserTable {
    id: string;
    createdAt?: number; // Timestamp
    updatedAt?: number;
    images: IImage[];    
    name: string;
    role: string;
    numberOfTasks: number;
    actions: string;
  }

  export interface IImage {
    url: string;
    file: any; // type of JS file
  }
  