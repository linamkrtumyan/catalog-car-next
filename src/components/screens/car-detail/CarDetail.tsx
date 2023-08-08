import Layout from "@/components/layout/Layout";
import { ICarDataSingle } from "@/interfaces/car.interface";
import CarItem from "@/ui/car/CarItem";
import { FC } from "react";

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  return (
    <Layout title={car.name} description="good expensive car">
      <CarItem car={car} />
    </Layout>
  );
};

export default CarDetail;
