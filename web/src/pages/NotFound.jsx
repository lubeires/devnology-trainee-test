import { Message } from "../components";

// page displayed if the route does not match any of the declared ones
export const NotFound = () => {
  return <Message message={"Página não encontrada..."} isError={true} />;
};
