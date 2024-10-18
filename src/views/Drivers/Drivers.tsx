import { useState } from 'react';
import DriverOption from './Components/DriverOption';
import DriverDetails from './Components/DriverDetails';
import { DriverData } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchDriversDataByYear } from '@/services';

const Drivers = () => {
  const { data, isPending } = useQuery({
    queryKey: ['driversByYear'],
    queryFn: fetchDriversDataByYear,
  });

  const [selectedDriver, setSelectedDriver] = useState<
    DriverData | undefined
  >();
  const handleSelectDriver = (driverId?: string) => {
    const driverInfo = data.find(
      (driver: DriverData) => driver.driverId === driverId
    );
    setSelectedDriver(driverInfo);
  };
  if (isPending) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <h3 className="text-black text-lg uppercase">Drivers</h3>
      <div className="flex flex-wrap gap-5 sm:gap-20">
        {data.map((driverData: DriverData) => (
          <DriverOption
            key={driverData.driverId}
            name={`${driverData.givenName} ${driverData.familyName}`}
            number={driverData.permanentNumber}
            isSelected={selectedDriver?.driverId === driverData.driverId}
            onSelectDriver={() => handleSelectDriver(driverData?.driverId)}
          />
        ))}
      </div>
      {selectedDriver && (
        <DriverDetails
          givenName={selectedDriver?.givenName}
          familyName={selectedDriver?.familyName}
          permanentNumber={selectedDriver?.permanentNumber}
          dateOfBirth={selectedDriver?.dateOfBirth}
          nationality={selectedDriver?.nationality}
          url={selectedDriver?.url}
        />
      )}
    </>
  );
};

export default Drivers;
