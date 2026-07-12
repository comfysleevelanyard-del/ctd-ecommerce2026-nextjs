import { auth0 } from "@/lib/auth0";
import axios from "axios";

const getOrders = async () => {
  const sessionId = (await auth0.getSession())?.user.sub;
  const response = await axios.post(
    "http://localhost:8080/retailer-dashboard/find-retailer",
    {
      userId: sessionId,
    },
  );

  const retailersId = response.data.id;
  console.log(retailersId);

  const r = await axios.post(
    "http://localhost:8080/retailer-dashboard/get-orders",
    {
      retailer_id: retailersId,
    },
  );
  console.log("T", r.data);
  return <div>{JSON.stringify(retailersId.id)}</div>;
};

export default getOrders;
