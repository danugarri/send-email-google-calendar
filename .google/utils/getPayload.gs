function getPayLoad({ clientFullName, date, clientEmail, EMAIL_CONFIG_ID }) {
  const { day, hour } = date;

  const payload = {
    description: `
            <p>
            Apreciado/a ${getCapitalised(clientFullName)}<br><br>
            El día ${day} a las ${hour} es nuestra primera reunión para la configuración de sus plataformas, tendrá una duración de 2 horas aproximadamente.<br><br>
            <br><br>
            Adjuntamos enlace:<br><br>
            <a href="https://test.zoom.us/j/esteessolounejemplov.1">https://test.zoom.us/j/esteessolounejemplov.1</a><br><br>
            Rogamos su confirmación a este correo.<br><br>
            Gracias. ¡Un saludo!<br><br>
            Atentamente,</p>
           `,
    subject: `¡Confirmar reunión! ${day} a las ${hour}`,
    email: clientEmail,
    priority: 1,
    email_config_id: Number(EMAIL_CONFIG_ID),
    cc_emails: ['youremail@gmail.com'],
  };
  Logger.log({ payload });
  return payload;
}
