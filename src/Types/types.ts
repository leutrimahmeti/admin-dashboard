export interface User {
    id: number;
    name: string;
    status: string;
  };
  
export interface UserRowProps  {
    user: User;
    handleToggleStatus: (userId: number) => void;
    handleDeleteClick: (userId: number) => void;
};

export interface CardData {
    label: string;
    value: number;
    color: string;
    description: string;
    subLabel: string;
    subValue: number;
  };