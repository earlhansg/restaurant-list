import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { RestaurantList } from "./RestaurantList";

type RestaurantProps = {
  restaurant_name: string;
  state: string;
};

type InitialDataProps = {
  loading: boolean;
  data: RestaurantProps[];
  error: boolean;
};

const InitialData = {
  loading: false,
  data: [],
  error: false,
};

export const Restaurant = () => {
  const [data, setData] = useState<InitialDataProps>(InitialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<RestaurantProps[]>(
          "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
        );
        setData((prev: InitialDataProps) => ({
          ...prev,
          loading: true,
          data: [...response.data],
        }));
      } catch {
        setData((prev: InitialDataProps) => ({ ...prev, error: true }));
      } finally {
        setData((prev: InitialDataProps) => ({ ...prev, loading: false }));
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <RestaurantList />
    </div>
  );
};
