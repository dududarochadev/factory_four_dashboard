import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { Environment } from "../Environment";

interface IHealthStatusData {
  title: string;
  success: boolean;
  hostname: string;
  time: string;
}

interface IStatusCardProps {
  option: string;
}

export const StatusCard: React.FC<IStatusCardProps> = ({ option }) => {
  const [data, setData] = useState<IHealthStatusData>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://api.factoryfour.com/${option}/health/status`);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      setData(await response.json());
      setError(undefined);
    } catch (error: any) {
      setError(error.message || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [option]);

  useEffect(() => {
    get();
  }, [get]);

  useEffect(() => {
    const interval = setInterval(() => {
      get();
    }, Environment.secondsPerRequisition * 1000);

    return () => clearInterval(interval);
  }, [get]);

  if (isLoading) {
    return (
      <h5>Loading...</h5>
    )
  }

  return (
    <div style={{
      background: 'white',
      width: '200px',
      height: '200px',
      margin: '20px',
      border: '5px',
      borderColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    }}>
      <h3 style={{ margin: '0px' }}>{option.toUpperCase()}</h3>

      <div style={{ width: '60%', background: data?.success ? 'green' : 'red', textAlign: 'center' }}>
        <h5 style={{ color: "white", margin: '10px' }}>{data?.success ? 'Healthy' : 'Error'}</h5>
      </div>


      {
        error ? (
          <>
            <h4 style={{ color: "red", margin: 0 }}>OUTAGE</h4>
            <h6 style={{ color: "red", margin: 0 }}>{error}</h6>
          </>
        ) : (
          <>
            <p style={{ margin: '0px' }}>{data?.hostname}</p>
            <p style={{ margin: '0px' }}>{dayjs(data?.time).format("HH:mm:ss ")}</p>
          </>
        )
      }
    </div >
  )
}