import React, { useState, useEffect, ReactNode, createContext } from 'react';
type ToastProps = {
  children: ReactNode;
};

type ToastContextProps = {
    ShowToast: (msg:string)=> void
}

export const ToastContext = createContext<ToastContextProps>({
    ShowToast: ()=> {},
});

const ToastProvider = ({ children }: ToastProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [trigInterval, setTrigInterval] = useState<boolean>(false);
  const [displayMessage, setDisplayMessage] = useState<string>("");
  const [countDown, setCountDown] = useState<number>(100);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [trigInterval]);

  const ShowToast = (msg: string) => {
    setShow(true);
    setTrigInterval((pre: boolean):boolean => !pre)
    setDisplayMessage(msg);
    countdown()
  }

  function countdown() {
    const interval = setInterval(() => {
        setCountDown(pre => pre-1);
      if (countDown <= 0) {
        clearInterval(interval);
        setCountDown(100);
      }
    }, 50);
  }

  return (
    <ToastContext.Provider value={{
            ShowToast
    }}>
        {children}
        <div  className={`toast toast-start ${!show && 'hidden'} `}>
            <div className="alert  relative overflow-hidden">
              <div>
                <div className='flex p-2'>
                    <div> 
                        <div className='text-base-bold'>Precision shooting</div>
                        <div className='text-base-content'>You are looking for an</div>
                    </div>
                    <div className='text-subtitle-big ml-3 text-success'>X3</div>
                </div>
              </div>
              <progress className="progress progress-success w-full absolute bottom-0 left-0" value={countDown} max="100"></progress>
            </div>
          </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;