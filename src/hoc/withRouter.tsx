import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (WrappedComponent: any) => (props: any) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};
