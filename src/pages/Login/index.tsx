import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";

import * as S from "./styles";
import { ButtonComponent } from "components";
import { useAuth } from "hooks/authHook";
import { IErrorResponse, IUser } from "interfaces/user.interface";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth()
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const { email, password } = formData
      await signIn({
        email: String(email),
        password: String(password),
      })
      toast.success("Login realizado com sucesso!");
      navigate('/adm')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      toast.error(String(err.response?.data))
    }
  }

  return (
    <S.Section>
      <form method="post" onSubmit={handleSubmit}>
        <IoPersonCircleSharp/>
        <label htmlFor="email">E-mail</label>
        <div>
          <input type="email" name="email" id="email" 
            onChange={(e) => handleChange({ email: e.target.value })}
            value={formData?.email}
          />
        </div>
        <label htmlFor="senha">Senha</label>
        <div>
          <input type="password" name="senha" id="senha"
            onChange={(e) => handleChange({ password: e.target.value })}
            value={formData?.password}
          />
        </div>
        <p>
          Não possui conta? <Link to="/cadastrar">Cadastre-se</Link>
          <ButtonComponent>Entrar</ButtonComponent>
        </p>
      </form>
    </S.Section>
  );
};

export default Login;
