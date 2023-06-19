import react from "react";
import axios from "axios";

export const CustomHook = ({ url, method = "GET", data = {} }, callBackFunction) => {
    const config = {
        baseURL: "https://jsonplaceholder.typicode.com",
        method: method || "GET",
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const fetchData = async () => {
        const response = await axios(config);
        callBackFunction(response.data);
    };

    return 0;
};

