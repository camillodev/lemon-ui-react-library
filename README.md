# **Lemon Energy UI Components 💡**

## **Descrição do Projeto 📝**

Este projeto é uma biblioteca de UI components criada pela Lemon Energy utilizando Storybook como ferramenta de desenvolvimento. O objetivo é fornecer uma biblioteca de componentes para serem utilizados em projetos web.

### **Componente Dialog 💬**

O componente Dialog é o primeiro componente desenvolvido nesta biblioteca e é responsável por apresentar conteúdo em uma camada que sobrepõe todo o conteúdo da página. Este componente é composto por duas camadas, uma que ocupa toda a tela e não permite a interação com o conteúdo que esconde, e outra onde o conteúdo é apresentado.

### **Funcionamento 🚀**

O Dialog é controlado a partir da prop **`isOpen`**, que define se o componente está aberto ou não. Além disso, o componente deve aceitar um callback **`onClose`**, que será chamado em todas as ações do usuário que fecham o Dialog:

- Clicar no botão de fechar (via ícone clicável);
- Clicar na camada de overlay se a prop **`closeOnOverlayClick`** for true;
- Pressionar a tecla ESC.

O componente Dialog também apresenta todo seu conteúdo até uma certa altura da tela, qualquer conteúdo que exceda essa altura deve criar um comportamento de scroll no corpo do componente.

### **Props 🎁**

- **`title`** (string?) - Conteúdo a ser apresentado na parte superior do conteúdo do Dialog, com formatação diferenciada. Não é obrigatória.
- **`isOpen`** (boolean) - Diz se o Dialog está aberto (quando true) ou não (quando false). Obrigatória.
- **`onClose`** (function) - Ação de callback sempre que o Dialog for fechado. Obrigatória.
- **`closeOnOverlayClick`** (boolean) - Quando true, permitirá que o Dialog seja fechado quando o usuário clicar no overlay. Obrigatória.
- **`children`** (React.ReactNode?) - Conteúdo do Dialog. Não é obrigatória.

### **Referências de Design 🎨**

O design do componente Dialog pode ser encontrado em **[https://www.figma.com/file/kL6ez15Ab41AOxlR07FbeA/](https://www.figma.com/file/kL6ez15Ab41AOxlR07FbeA/)**.

## **Como usar 🛠️**

Para utilizar o componente Dialog, basta importá-lo e adicioná-lo ao seu projeto.

```
jsxCopy code
import { Dialog } from 'lemon-energy-ui-components';

const ComponenteFilho = () => {
  const props = {...};
  return (
    <div>
      {...}
      <Dialog title="Meu Dialog" {...props}>Conteúdo do meu Dialog</Dialog>
    </div>
  );
}

const ComponentePai = () => {
  // O Dialog deve abrir sobre todo o conteúdo da página,
  // independente do tamanho desta div contendo o ComponenteFilho.
  return (
    <div style={{ position: relative }}>
      <ComponenteFilho />
    </div>
  );
}

```

## **Como executar o projeto 🚀**

1. Clone este repositório em sua máquina:
    
    ```
    git clone https://github.com/user/repo.git
    
    ```
    
2. Instale as dependências do projeto:
    
    ```
    npm install
    
    ```
    
3. Inicie o Storybook:O Storybook estará disponível em **`http://localhost:6006`**.
    
    ```
    npm run storybook
    
    ```
