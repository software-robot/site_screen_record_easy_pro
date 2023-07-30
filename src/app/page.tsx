import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Política de Privacidade</h1>

      <p>
        Bem-vindo(a) ao nosso aplicativo! Esta Política de Privacidade descreve
        como coletamos, usamos e protegemos suas informações ao utilizar a
        funcionalidade de gravação de áudio do aplicativo. Ao utilizar o recurso
        de gravação de áudio, você concorda com os termos descritos nesta
        política.
      </p>

      <h2>Coleta de Dados e Uso</h2>

      <p>
        Nosso aplicativo utiliza a permissão{" "}
        <code>android.permission.RECORD_AUDIO</code> para acessar o microfone do
        seu dispositivo. É importante ressaltar que{" "}
        <strong>não armazenamos nem compartilhamos</strong> quaisquer
        informações de áudio gravadas pelo aplicativo. Toda a gravação de áudio
        é processada e permanece{" "}
        <strong>exclusivamente no seu dispositivo</strong>, sem ser enviada a
        nossos servidores ou a terceiros.
      </p>

      <h2>Controle do Usuário</h2>

      <p>
        Você tem total controle sobre quando e como o recurso de gravação de
        áudio é utilizado. O aplicativo solicitará sua permissão para acessar o
        microfone durante o tempo de execução. Você pode optar por conceder ou
        negar essa permissão por meio das configurações do seu dispositivo.
      </p>

      <h2>Finalidade da Gravação de Áudio</h2>

      <p>
        A gravação de áudio é utilizada exclusivamente para{" "}
        <strong>fins específicos</strong> dentro do aplicativo, como fornecer
        recursos e funcionalidades que dependem do acesso ao microfone. Esses
        recursos podem incluir, mas não estão limitados a: gravação de notas de
        voz, gravação de áudio em um contexto específico dentro do aplicativo e
        outras funcionalidades relacionadas.
      </p>

      <h2>Segurança e Privacidade</h2>

      <p>
        A segurança e a privacidade dos seus dados são fundamentais para nós. O
        aplicativo utiliza medidas de segurança adequadas para proteger
        quaisquer informações sensíveis que são processadas pelo recurso de
        gravação de áudio.{" "}
        <strong>Nenhuma informação de áudio é transmitida pela internet</strong>{" "}
        ou armazenada em nossos servidores.
      </p>

      <h2>Atualizações na Política de Privacidade</h2>

      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente para
        refletir quaisquer mudanças em nossas práticas de privacidade. Quando
        fizermos alterações significativas nesta política, notificaremos você
        por meio de uma atualização no aplicativo ou de outra forma apropriada.
        Certifique-se de revisar esta política regularmente para estar ciente de
        como protegemos suas informações.
      </p>

      <h2>Contato</h2>

      <p>
        Se tiver alguma dúvida ou preocupação sobre nossa Política de
        Privacidade ou sobre o uso do recurso de gravação de áudio do
        aplicativo, entre em contato conosco através dos canais de suporte
        fornecidos no aplicativo.
      </p>

      <p>Data de vigência: 01-01-2023</p>

      <h1>Termos de Uso</h1>

      <p>
        1. <strong>Aceitação dos Termos</strong>
      </p>

      <p>
        Ao utilizar o recurso de gravação de áudio neste aplicativo, você
        concorda com estes Termos de Uso. Se você não concorda com qualquer
        parte destes termos, não utilize o recurso de gravação de áudio.
      </p>

      <p>
        2. <strong>Uso Responsável</strong>
      </p>

      <p>
        Você concorda em utilizar o recurso de gravação de áudio apenas para
        fins lícitos e de acordo com todas as leis e regulamentos aplicáveis.
        Você não deve utilizar o recurso de gravação de áudio para fins ilegais
        ou prejudiciais.
      </p>

      <p>
        3. <strong>Propriedade Intelectual</strong>
      </p>

      <p>
        O aplicativo e seu recurso de gravação de áudio são protegidos por
        direitos autorais e outras leis de propriedade intelectual. Você
        concorda em respeitar todos os direitos autorais e outras informações de
        propriedade exibidas no aplicativo.
      </p>

      <p>
        4. <strong>Isenção de Responsabilidade</strong>
      </p>

      <p>
        O aplicativo não assume qualquer responsabilidade por danos ou prejuízos
        decorrentes do uso do recurso de gravação de áudio ou de qualquer
        problema técnico relacionado ao mesmo. O recurso de gravação de áudio é
        fornecido "como está", e o aplicativo não faz nenhuma garantia quanto à
        sua disponibilidade, precisão ou confiabilidade.
      </p>

      <p>
        5. <strong>Alterações nos Termos de Uso</strong>
      </p>

      <p>
        Estes Termos de Uso podem ser atualizados de tempos em tempos para
        refletir mudanças no aplicativo ou em nossas práticas. Ao continuar a
        utilizar o recurso de gravação de áudio após qualquer atualização destes
        termos, você concorda em ficar vinculado às versões revisadas dos Termos
        de Uso.
      </p>

      <p>
        6. <strong>Contato</strong>
      </p>

      <p>
        Se tiver alguma dúvida ou dúvida sobre estes Termos de Uso ou sobre o
        uso do recurso de gravação de áudio do aplicativo, entre em contato
        conosco por meio dos canais de suporte fornecidos no aplicativo.
      </p>

      <p>Data de vigência: 01-01-2023</p>
    </main>
  );
}
