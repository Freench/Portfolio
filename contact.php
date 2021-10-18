<?php
if(isset($_POST['envoyer'])) {
   if(!empty($_POST['mail']) AND !empty($_POST['sujet']) AND !empty($_POST['message'])) {
      $header="MIME-Version: 1.0\r\n";
      $header.='From:'.$_POST['mail']."\n";
      $header.='Content-Type:text/html; charset="uft-8"'."\n";
      $header.='Content-Transfer-Encoding: 8bit';
      $message='
      <html>
         <body>
            <div align="center">

               <u>Nom de l\'expéditeur :</u>'.$_POST['sujet'].'<br />
               <u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
               <br />
               '.nl2br($_POST['message']).'

            </div>
         </body>
      </html>
      ';
      mail("f.pernot@codeur.online", $_POST['sujet'], $message, $header);
      $msg="Votre message a bien été envoyé !";
      echo $msg;
      header('Refresh: 5; URL=https://francisp.promo-93.codeur.online/portfolio');
   } else {
      $msg="Tous les champs doivent être complétés !";
   }
}
?>