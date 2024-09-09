
export default function ErrorPage({ searchParams }: { searchParams: { error: string } }) {
    const errorMessage = searchParams.error || 'Ocorreu um erro desconhecido.';
  
    return (
      <div>
        <h1>Erro na autenticação</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
  