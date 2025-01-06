interface ProjectLayoutProps {
  children: React.ReactNode;
}

function layout({ children }: ProjectLayoutProps) {
  return (
    <div className="bg-gradient-to-r dark:from-black dark:to-slate-950 from-white to-gray-400">
      {children}
    </div>
  );
}

export default layout;
