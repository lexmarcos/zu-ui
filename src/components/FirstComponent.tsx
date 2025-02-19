const FirstComponent = ({ texto }: { texto: string }) => {
  return <div>{texto || "Olá do MeuComponente!"}</div>;
};

export default FirstComponent;
