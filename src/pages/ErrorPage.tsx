interface ErrorPageProps {
  errorMessage?: string;
  statusCode?: number;
}

const ErrorPage = ({}: ErrorPageProps) => {
  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center">404</h1>
      <h2 className="text-2xl font-bold text-center">Page Not Found</h2>
    </main>
  );
};

export default ErrorPage;
