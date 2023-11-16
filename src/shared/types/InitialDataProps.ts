import { RestaurantProps } from "./RestaurantProps";

export type InitialDataProps = {
    loading: boolean;
    data: RestaurantProps[];
    state: string[];
    error: boolean;
};