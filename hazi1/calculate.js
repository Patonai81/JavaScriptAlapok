export const percentage= (list) => {
    const success = () => {
       return list.reduce((cumulate, item) => {
            if (item.isBought=== true){
                cumulate++;
            }
            return cumulate;
        }, 0);
    }
    return success()/list.length*100;
}