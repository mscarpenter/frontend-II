import { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("profissional");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  function cadastrar(event) {
    event.preventDefault();

    setMensagem("");
    setErro("");

    // Verifica se todos os campos foram preenchidos
    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    // Busca os usuários já cadastrados
    const usuarios = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    );

    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = usuarios.find(
      (usuario) => usuario.email === email
    );

    if (usuarioExistente) {
      setErro("Este e-mail já está cadastrado.");
      return;
    }

    // Cria o novo usuário
    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      senha,
      tipo,
    };

    // Adiciona o novo usuário à lista
    usuarios.push(novoUsuario);

    // Salva no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Limpa os campos
    setNome("");
    setEmail("");
    setSenha("");
    setTipo("profissional");

    // Mostra mensagem de sucesso
    setMensagem(`Cadastro realizado com sucesso, ${nome}!`);
  }

  return (
    <main className="page">

      <h1>Crie sua conta</h1>

      <p>
        Cadastre-se no Trampo Certo para encontrar oportunidades
        ou contratar profissionais.
      </p>

      <form onSubmit={cadastrar}>

        <label>
          Nome completo
        </label>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label>
          E-mail
        </label>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>
          Senha
        </label>

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <label>
          Quero me cadastrar como:
        </label>

        <select
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
        >
          <option value="profissional">Profissional</option>
          <option value="empresa">Empresa</option>
        </select>

        <button type="submit">
          Criar cadastro
        </button>

      </form>

      {erro && (
        <p>
          {erro}
        </p>
      )}

      {mensagem && (
        <p>
          {mensagem}
        </p>
      )}

    </main>
  );
}

export default Cadastro;