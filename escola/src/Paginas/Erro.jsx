import {Link} from "react-router-dom";
export default function Erro()
{
return (
<div>
<h1>Página não encontrada</h1>
<p>Parece que a página que você está procurando não está disponível.
    Isso pode ter acontecido por um link quebrado, um erro de digitação ou a página pode ter sido removida.
</p>

<h2>O que fazer agora?</h2>
<ul>
    <li>Chorar</li>
    <li>Verifique se o endereço está correto</li>
    <li>Volte para <Link to="/">Página Inicial</Link></li>
    <li>Se precisar de ajuda, entre em contato conosco</li>
</ul>

<p>Agredecemos a sua compreensão!</p>
</div>

);
}