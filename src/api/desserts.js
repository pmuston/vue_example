import session from "./session";

let baseUrl = ""; // for distribution with Django backend
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:8000";
}

export default {
  loadDesserts() {
    return session.get(`${baseUrl}/api/dessert`);
  },
  removeDessert({ dessert }) {
    console.log("api removeDessert", dessert);
    var idx = dessert.id;
    return session.delete(`${baseUrl}/api/dessert/${idx}/`);
  },
  addDessert({ dessert }) {
    console.log("api addDessert", dessert);
    return session.post(`${baseUrl}/api/dessert/`, dessert);
  },
  updateDessert({ dessert }) {
    console.log("api updateDessert", dessert);
    var idx = dessert.id;
    return session.put(`${baseUrl}/api/dessert/${idx}/`, dessert);
  }
};
