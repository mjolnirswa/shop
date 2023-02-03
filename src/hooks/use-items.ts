import { useAppSelector } from "./redux-hooks";

export function useItems() {
    const items = useAppSelector(state => state.item);

    if (items.length > 0) {
        return true;
    }else {
        return false;
    }
};