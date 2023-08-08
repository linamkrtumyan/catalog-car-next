import React, { FC } from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { ICarData } from "@/interfaces/car.interface";
import CarItem from "@/ui/car/CarItem";

const oswald = Oswald({ subsets: ["latin"] });

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout title="Home">
      <h1
      // className={oswald.className}
      >
        Home
      </h1>

      {cars.length ? (
        cars.map((car) => <CarItem car={car} key={car.id} />)
      ) : (
        <div>cars not found</div>
      )}
    </Layout>
  );
};

export default Home;
