import {Link} from "react-router-dom";

export default function Menu()
{
    
return (
<header>
    <h2>Escola</h2>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/cadastro">Novo aluno</Link>
            <Link to="/">Listagem de Alunos</Link>
        </div>
</header>

);
}