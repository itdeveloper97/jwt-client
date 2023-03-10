export interface LoginRequest {
  login: string;
  password: string;
}
export interface LoginResponse {
  id: number;
  login: string;
  token: string;
}
export const login = async (params: LoginRequest): Promise<LoginResponse> => {
  return await fetch("http://127.0.0.1:7000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((res) => {
    return res.json();
  });
};
