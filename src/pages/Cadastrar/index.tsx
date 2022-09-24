import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";

import * as S from "./styles";
import { ButtonComponent } from "components";
import { IErrorResponse, IUser } from "interfaces/user.interface";
import { AxiosError } from "axios";
import { apiUser } from "services/data";

const Cadastrar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IUser>({
    name: '',
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await apiUser.register(formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate('/login')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }
  return (
    <S.Section>
      <form method="post" onSubmit={handleSubmit}>
        <IoPersonCircleSharp/>
        <label htmlFor="nome">Nome</label>
        <div>
          <input type="text" name="name" id="nome"
            onChange={(e) => handleChange({ name: e.target.value })}
            value={formData?.name}
          />
        </div>
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
          Já possui conta? <Link to="/login">Faça o login</Link>
          <ButtonComponent>Salvar</ButtonComponent>
        </p>
      </form>
    </S.Section>
  );
};
export default Cadastrar;
