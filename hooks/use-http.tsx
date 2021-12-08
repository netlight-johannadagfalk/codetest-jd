import { useState, useCallback } from 'react';
import { useReducer } from 'react';

const httpReducer = (currHttpState: any, action: any) => {
  switch (action.type) {
    case 'SEND':
      return { isLoading: true, error: null, data: null };
    case 'RESPONSE':
      return { ...currHttpState, isLoading: false, data: action.responseData };
    case 'ERROR':
      return { isLoading: false, error: action.errorMessage };
    default:
      throw new Error('Should not be reached');
  }
};

const useHttp: () => {
  isLoading: any;
  data: any;
  error: any;
  sendRequest: (requestConfig: any, applyData: any) => Promise<void>;
} = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
    data: null
  });

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any) => {
      dispatchHttp({ type: 'SEND' });
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        applyData(data);
        dispatchHttp({ type: 'RESPONSE', responseData: data });
      } catch (error: any) {
        dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong' });
      }
    },
    []
  );

  return {
    isLoading: httpState.isLoading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest
  };
};

export default useHttp;

// import { useState, useCallback } from 'react';

// const useHttp: () => {
//   isLoading: boolean;
//   error: Error | null;
//   sendRequest: (requestConfig: any, applyData: any) => Promise<void>;
// } = () => {
//   const [error, setError] = useState<Error | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const sendRequest = useCallback(
//     async (requestConfig: any, applyData: any) => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(requestConfig.url, {
//           method: requestConfig.method ? requestConfig.method : 'GET',
//           headers: requestConfig.headers ? requestConfig.headers : {},
//           body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
//         });

//         if (!response.ok) {
//           throw new Error('Something went wrong');
//         }

//         const data = await response.json();
//         applyData(data);
//       } catch (error: any) {
//         setError(error);
//       }
//       setIsLoading(false);
//     },
//     []
//   );

//   return { isLoading, error, sendRequest };
// };

// export default useHttp;
