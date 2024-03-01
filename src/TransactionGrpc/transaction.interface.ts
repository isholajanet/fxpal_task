
export interface CreateTransactionRequest {
    transaction: {
      amount: number;
      currency: string;
      type: string;
      description: string;
      recipientAccount: string;
      status: string;
    };
  }
  
  export interface GetTransactionRequest {
    _id: string;
  }
  
  export interface UpdateTransactionRequest {
    transaction: {
      _id: string;
      amount: number;
      currency: string;
      type: string;
      description: string;
      recipientAccount: string;
      status: string;
    };
  }
  
  export interface DeleteTransactionRequest {
    _id: string;
  }
  
  export interface DeleteTransactionResponse {
    success: boolean;
  }
  