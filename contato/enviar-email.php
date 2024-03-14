<?php

    //Declarar váriavel usando cifrão($)
    //addslashes serve para que caractéries especiais sejam enviados sem erros

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "contatoviniciusmateos@gmail.com";
    $assunto = "Contato pelo portifólio";

    // "." serve para concatenação(juntar)
    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem: ".$mensagem;

    // From - email remetente 
    // "X=Mailer:PHP/".phpversion(); - função para entregar a versão atual do PHP
    $cabeca = "From: enviar.email.dev@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destino,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o e-mail!");
    }
?>