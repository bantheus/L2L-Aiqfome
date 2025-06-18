import Link from "next/link";

interface NotFoundProps {
  resourceName: string;
  message?: string;
  backButtonLabel: string;
  backButtonHref: string;
}

function NotFound({
  resourceName,
  message,
  backButtonLabel,
  backButtonHref,
}: NotFoundProps) {
  const defaultMessage = `Não foi possível encontrar o ${resourceName.toLowerCase()} que você está procurando. Tente novamente ou volte para o início.`;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{resourceName} não encontrado 😭</h1>
        <p className="text-muted-foreground max-w-md text-balance">
          {message || defaultMessage}
        </p>
      </div>

      <Link
        href={backButtonHref}
        className="bg-primary hover:bg-primary/90 focus-visible:ring-ring mt-4 inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {backButtonLabel}
      </Link>
    </div>
  );
}

export default NotFound;
