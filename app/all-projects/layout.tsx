interface ProjectLayoutProps {
  children: React.ReactNode;
}

function layout({ children }: ProjectLayoutProps) {
  return <div>{children}</div>;
}

export default layout;
