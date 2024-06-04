import React  from "react";

import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGE0MDEwN2M4NGQ1OTQ2NWJiZDk5ZGZmNmY3NjIwYiIsInN1YiI6IjY2NWQyZGRmODA2MjJlMDA0YjQ5NzExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DLbcoVPP6i-DpmW3S19_w_Yh8tUOOlaT5yCKCWFQq9g'
      }
    
});

export default instance;
