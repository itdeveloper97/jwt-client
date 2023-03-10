import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

interface IFormLogin {
  login: string;
  password: string;
}
export const useLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const form = useForm<IFormLogin>();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data: IFormLogin) => {
    auth.loginRequest(data, () => {
      navigate("/", {
        state: from,
      });
    });
  };

  return { onSubmit, form };
};
