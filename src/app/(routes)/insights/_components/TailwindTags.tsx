export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { children } = props;
  return (
    <p className="mb-8 mt-3 leading-loose tracking-wide dark:text-gray-300 ">
      {children}
    </p>
  );
}
