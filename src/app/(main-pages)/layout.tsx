import Menu from '../components/Menu/Menu';

export default function WithMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Menu />
    </>
  );
}
